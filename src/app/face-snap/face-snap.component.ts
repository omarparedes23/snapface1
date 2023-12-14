import { Component,OnInit,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;

  //title!: string;
  //description!: string;
  //createdDate!: Date;
  //snaps!: number;
  //imageUrl!: string;
  buttonText!: string;

  constructor(private faceSnapsService:FaceSnapsService) {}

  ngOnInit() {
    //this.title = 'Archibald';
    //this.description = 'Mon meilleur ami depuis tout petit !';
    //this.createdDate = new Date();
    //this.snaps = 6;
    //this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = 'Oh Snap!';
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      //this.faceSnap.snaps++;  snapFaceSnapById
      //this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      //this.faceSnap.snaps--;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }
  }
}
