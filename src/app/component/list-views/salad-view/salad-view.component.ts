import { Component, OnInit } from '@angular/core';
import { ISalad } from 'src/model/salad.model';

@Component({
  selector: 'app-salad-view',
  templateUrl: './salad-view.component.html',
  styleUrls: ['./salad-view.component.scss'],
})
export class SaladViewComponent implements OnInit {
  salads: ISalad[] = [];

  constructor() {}
  ngOnInit(): void {
    fetch('../../../../assets/data/salads.json')
      .then((res) => res.json())
      .then((json) => {
        this.salads = json;
      });
  }
}
