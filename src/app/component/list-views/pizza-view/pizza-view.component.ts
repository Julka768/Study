import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/card.service';
import { IPizza } from 'src/model/pizza.model';

@Component({
  selector: 'app-pizza-view',
  templateUrl: './pizza-view.component.html',
  styleUrls: ['./pizza-view.component.scss'],
})
export class PizzaViewComponent implements OnInit {
  @Input() pizzas: IPizza[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  addToCart(pizza: IPizza) {
    this.cartService.addPizza(pizza);
  }
}
