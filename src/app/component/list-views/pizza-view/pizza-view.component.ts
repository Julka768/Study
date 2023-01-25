import { Component, OnInit } from '@angular/core';
import { IPizza } from 'src/model/pizza.model';

@Component({
  selector: 'app-pizza-view',
  templateUrl: './pizza-view.component.html',
  styleUrls: ['./pizza-view.component.scss'],
})
export class PizzaViewComponent implements OnInit {
  pizzas: IPizza[] = [];

  constructor() {}
  ngOnInit(): void {
    fetch('../../../../assets/data/pizzas.json')
      .then((res) => res.json())
      .then((json) => {
        this.pizzas = json;
      });
  }
}
