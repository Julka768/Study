import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/card.service';
import { IPasta } from 'src/model/pasta.model';

@Component({
  selector: 'app-pasta-view',
  templateUrl: './pasta-view.component.html',
  styleUrls: ['./pasta-view.component.scss'],
})
export class PastaViewComponent implements OnInit {
  @Input() pastas: IPasta[] = [];

  constructor(private cartService: CartService) {}
  ngOnInit(): void {}

  addToCart(pasta: IPasta) {
    this.cartService.addPasta(pasta);
  }
}
