import { Component, OnInit } from '@angular/core';
import { IPasta } from 'src/model/pasta.model';

@Component({
  selector: 'app-pasta-view',
  templateUrl: './pasta-view.component.html',
  styleUrls: ['./pasta-view.component.scss'],
})
export class PastaViewComponent implements OnInit {
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
