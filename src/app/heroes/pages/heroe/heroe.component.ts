import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../interface/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  heroe!: Heroe;

  ngOnInit() {
    this.activatedRoute.params.subscribe(({ id }) => console.log(id));
  }
}
