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

  // usado en buscar
  getSugerencias(termino: string) {
    return this.http.get<Heroe[]>(
      `${this.baseUrl}/heroes?q=${termino}&_limit=5`
    );
  }

  // usado en agregar
  agregarHeroe(heroe: Heroe) {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, heroe);
  }
  actualizarHeroe(heroe: Heroe) {
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }
}
