import { Component, OnInit } from '@angular/core';
import { IPasta } from 'src/model/pasta.model';

@Component({
  selector: 'app-pasta-page',
  templateUrl: './pasta-page.component.html',
  styleUrls: ['./pasta-page.component.scss'],
})
export class PastaPageComponent implements OnInit {
  pastas: IPasta[] = [];

  constructor() {}

  ngOnInit(): void {
    fetch('../../../../assets/data/pastas.json')
      .then((res) => res.json())
      .then((json) => {
        this.pastas = json;
      });
  }
}
