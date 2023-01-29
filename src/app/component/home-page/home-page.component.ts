import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IPasta } from 'src/model/pasta.model';
import { IPizza } from 'src/model/pizza.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  toppings = new FormControl();
  hots = new FormControl();
  pizzaOrPastasSelect = new FormControl();
  pizzaSelected: boolean = true;
  pastaSelected: boolean = true;

  pizzas: IPizza[] = [];
  filteredPizzas: IPizza[] = [];

  pastas: IPasta[] = [];
  filteredPastas: IPasta[] = [];

  onPizzaOrPastaSelected() {
    if (this.pizzaOrPastasSelect.value != null) {
      this.pizzaSelected = this.pizzaOrPastasSelect.value
        .toString()
        .includes('pizza');
      this.pastaSelected = this.pizzaOrPastasSelect.value
        .toString()
        .includes('pasta');

      if (this.pizzaSelected && !this.pastaSelected) {
        this.filteredPastas = [];
        this.pizzaFetchIfEmpty();
      }

      if (this.pizzaSelected && this.pastaSelected) {
        this.pizzaFetchIfEmpty();
        this.pastaFetchIfEmpty();
      }

      if (this.pastaSelected && !this.pizzaSelected) {
        this.filteredPizzas = [];
        this.pastaFetchIfEmpty();
      }

      if (!this.pastaSelected && !this.pizzaSelected) {
        this.filteredPastas = [];
        this.filteredPizzas = [];
      }
    }
    this.onToppingsSelected();
  }

  onHotOrNotSelected() {
    console.log(this.hots.value.toString());
  }

  onToppingsSelected() {
    console.log(this.toppings.value.toString());

    let selectedToppings = this.toppings.value
      .toString()
      .replace(/\s/g, '')
      .toLowerCase();

    let toppingsArray: string[] = selectedToppings.split(',');
    console.log(toppingsArray);

    if (this.pizzaSelected) {
      console.log(
        this.pizzas.map((p) => p.toppings.replace(/\s/g, '').toLowerCase())
      );
      this.filteredPizzas = this.pizzas.filter((p) =>
        toppingsArray.some((t) =>
          p.toppings.replace(/\s/g, '').toLowerCase().includes(t)
        )
      );
    }
    if (this.pastaSelected) {
      this.filteredPastas = this.pastas.filter((p) =>
        toppingsArray.some((t) =>
          p.toppings.replace(/\s/g, '').toLowerCase().includes(t)
        )
      );
    }
  }

  toppingList: string[] = [
    'białe wino',
    'szynka',
    'ser mozzarella',
    'NDuja',
    'kurczak',
    'cebula',
    'ser gorgonzola',
    'papryka',
    'karczochy',
  ];

  hotList: string[] = ['ostre', 'nie ostre'];
  pizzaOrPastaList: string[] = ['pizza', 'pasta'];

  constructor() {}

  ngOnInit(): void {
    this.pizzaFetch();
    this.pastasFetch();
  }

  pizzaFetch() {
    fetch('../../../../../assets/data/pizzas.json')
      .then((res) => res.json())
      .then((json) => {
        this.pizzas = json;
        this.filteredPizzas = this.pizzas;
      });
  }

  pastasFetch() {
    fetch('../../../../assets/data/pastas.json')
      .then((res) => res.json())
      .then((json) => {
        this.pastas = json;
        this.filteredPastas = this.pastas;
      });
  }

  pizzaFetchIfEmpty() {
    if (this.filteredPizzas.length < 1) {
      this.filteredPizzas = this.pizzas;
    }
  }

  pastaFetchIfEmpty() {
    if (this.filteredPastas.length < 1) {
      this.filteredPastas = this.pastas;
    }
  }
}
