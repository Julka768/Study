import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IPizza } from 'src/model/pizza.model';

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.scss'],
})
export class PizzaPageComponent implements OnInit {
  pizzas: IPizza[] = [];

  constructor() {}
  ngOnInit() {}
}
