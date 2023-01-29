import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/card.service';
import { IPasta } from 'src/model/pasta.model';
import { IPizza } from 'src/model/pizza.model';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.scss'],
})
export class ShoppingPageComponent implements OnInit {
  pizzas: IPizza[] = [];
  pastas: IPasta[] = [];
  total: number = 0;
  isLoading = true;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.fetchData();
  }

  private GetTotalPriceOfList(array: any[]): number {
    if (array == null || array.length < 1) {
      return 0;
    }
    return array.map((p) => p.price * p.quantity).reduce((a, b) => a + b, 0);
  }

  remove(pizza: IPizza): void {
    this.cartService.removePizza(pizza);
  }
  removePasta(pasta: IPasta): void {
    this.cartService.removePasta(pasta);
  }

  minusOne(pizza: IPizza): void {
    this.cartService.minusOne(pizza);
  }
  minusOnePasta(pasta: IPasta): void {
    this.cartService.minusOnePasta(pasta);
  }

  addOne(pizza: IPizza): void {
    this.cartService.addPizza(pizza);
  }
  addOnePasta(pasta: IPasta): void {
    this.cartService.addPasta(pasta);
  }

  private fetchData() {
    this.cartService.selectedPizzas$.subscribe((value) => {
      console.log('pobrane pizze: ', value);
      this.pizzas = this.sortArrayByName(value);
      this.isLoading = false;
    });

    this.cartService.selectedPastas$.subscribe((value) => {
      this.pastas = this.sortArrayByName(value);
      this.isLoading = false;
    });
  }

  private sortArrayByName(array: any[]): any[] {
    const sorted = array.sort((t1, t2) => {
      const name1 = t1.name.toLowerCase();
      const name2 = t2.name.toLowerCase();
      if (name1 > name2) {
        return 1;
      }
      if (name1 < name2) {
        return -1;
      }
      return 0;
    });
    return sorted;
  }

  getTotalOfTotal() {
    return (
      this.GetTotalPriceOfList(this.pizzas) +
      this.GetTotalPriceOfList(this.pastas)
    );
  }
}
