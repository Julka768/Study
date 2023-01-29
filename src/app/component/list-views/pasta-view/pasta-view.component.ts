import { Component, Input, OnInit } from '@angular/core';
import { IPasta } from 'src/model/pasta.model';

@Component({
  selector: 'app-pasta-view',
  templateUrl: './pasta-view.component.html',
  styleUrls: ['./pasta-view.component.scss'],
})
export class PastaViewComponent implements OnInit {
  @Input() pastas: IPasta[] = [];

  constructor() {}
  ngOnInit(): void {}
}
