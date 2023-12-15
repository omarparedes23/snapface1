import { Component, OnInit } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  private corsHeaders: HttpHeaders;
  public restaurantsArray$!: Observable<Irestaurant[]>;
  //urlIp: string = 'http://127.0.0.1:8080/easytable-0.0.1-SNAPSHOT';
  //urlIp: string = 'http://52.47.152.220:9000';
  urlIp: string = '/api';
  //urlIp: string = 'http://localhost:9000';
  private urlApirestaurants = this.urlIp + '/restaurant/restaurants';
  constructor(private http: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
    });
  }
  ngOnInit(): void {
    this.restaurantsArray$ = this.getRestaurants();
    headers: this.corsHeaders;
  }
  getRestaurants(): Observable<Irestaurant[]> {
    return this.http.get<Irestaurant[]>(this.urlApirestaurants).pipe(
      tap((resultat) => console.log('Résultat de la requête : ', resultat)),
      catchError((error) => {
        if (error.error instanceof ErrorEvent) {
          console.log(`Error: ${error.error.message}`);
        } else {
          console.log(`Error: ${error.message}`);
        }
        return [];
      })
    );
  }
}

export interface Irestaurant {
  id: number;
  nom: string;
  rue: string;
  ville: string;
  codePostal: string;
  telephone: string;
  email: string;
  presentation: string;
  restaurant_type: string;
  url: string;
}
