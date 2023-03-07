import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interface/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  /**
   * Obtiene un heroe según su ID
   */
  getHeroePorId(id: string) {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string) {
    return this.http.get<Heroe[]>(
      `${this.baseUrl}/heroes?q=${termino}&_limit=5`
    );
  }
}
