import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPasta } from 'src/model/pasta.model';
import { IPizza } from 'src/model/pizza.model';

@Injectable()
export class CartService {
  private pizzas$ = new BehaviorSubject<IPizza[]>([]);
  selectedPizzas$ = this.pizzas$.asObservable();

  private pastas$ = new BehaviorSubject<IPasta[]>([]);
  selectedPastas$ = this.pastas$.asObservable();

  constructor() {}

  setPizzas(pizzas: any) {
    this.pizzas$.next(pizzas);
  }

  setPasta(pastas: any) {
    this.pastas$.next(pastas);
  }

  addPizza(pizza: IPizza) {
    let pizzas = this.pizzas$.value;
    console.log('aktualne pizze: ', pizzas);

    let pizzaAlreadyOnList = pizzas.find((p) => p.name == pizza.name);

    if (pizzaAlreadyOnList) {
      pizzaAlreadyOnList.quantity += 1;
      let tempPizzasList = this.removeFromArray(pizza.name, pizzas);
      tempPizzasList.push(pizzaAlreadyOnList);
      this.pizzas$.next(tempPizzasList);
    } else {
      pizzas.push(pizza);
      this.pizzas$.next(pizzas);
    }
  }

  addPasta(pasta: IPasta) {
    let pastas = this.pastas$.value;
    console.log('aktualne makarony: ', pastas);

    let pastaAlreadyOnList = pastas.find((p) => p.name == pasta.name);

    if (pastaAlreadyOnList) {
      pastaAlreadyOnList.quantity += 1;
      let tempPastasList = this.removeFromArray(pasta.name, pastas);
      tempPastasList.push(pastaAlreadyOnList);
      this.pastas$.next(tempPastasList);
    } else {
      pastas.push(pasta);
      this.pastas$.next(pastas);
    }
  }

  minusOne(pizza: IPizza) {
    let pizzas = this.pizzas$.value;
    console.log('aktualne pizze: ', pizzas);

    let pizzaAlreadyOnList = pizzas.find((p) => p.name == pizza.name);

    if (pizzaAlreadyOnList) {
      pizzaAlreadyOnList.quantity -= 1;
      let tempPizzasList = this.removeFromArray(pizza.name, pizzas);
      tempPizzasList.push(pizzaAlreadyOnList);
      this.pizzas$.next(tempPizzasList);
    } else {
      pizzas.push(pizza);
      this.pizzas$.next(pizzas);
    }
  }

  minusOnePasta(pasta: IPasta) {
    let pastas = this.pastas$.value;
    console.log('aktualne makarony: ', pastas);

    let pastaAlreadyOnList = pastas.find((p) => p.name == pasta.name);

    if (pastaAlreadyOnList) {
      pastaAlreadyOnList.quantity -= 1;
      let tempPastasList = this.removeFromArray(pasta.name, pastas);
      tempPastasList.push(pastaAlreadyOnList);
      this.pastas$.next(tempPastasList);
    } else {
      pastas.push(pasta);
      this.pastas$.next(pastas);
    }
  }

  getSelectedPizzas(): Observable<IPizza[]> {
    console.log('pizza values: ', this.pizzas$.value);
    return this.pizzas$.asObservable();
  }

  getSelectedPastas(): Observable<IPasta[]> {
    console.log('pasta values: ', this.pastas$.value);
    return this.pastas$.asObservable();
  }

  removePizza(pizza: IPizza) {
    let pizzas = this.pizzas$.value;
    let updatedPizzaList = this.removeFromArray(pizza.name, pizzas);
    this.pizzas$.next(updatedPizzaList);
  }

  removePasta(pasta: IPasta) {
    let pastas = this.pastas$.value;
    let updatedPastaList = this.removeFromArray(pasta.name, pastas);
    this.pastas$.next(updatedPastaList);
  }

  private removeFromArray(name: string, array: any[]): any[] {
    let copyArray = array;
    copyArray.forEach((value, index) => {
      if (value.name == name) copyArray.splice(index, 1);
    });

    return copyArray;
  }
}
