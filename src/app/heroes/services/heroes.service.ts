import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interface/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  inject() {}

  getHeroes() {
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }

  /**
   * Obtiene un heroe según su ID
   */
  getHeroePorId(id: string) {
    return this.http.get<Heroe>(`http://localhost:3000/heroes/${id}`);
  }
}
