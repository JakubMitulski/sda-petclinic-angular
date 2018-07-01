///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {Owner} from '../owner';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.css']
})

export class OwnerDetailsComponent implements OnInit {
  @Input()
  owner: Owner;

  constructor() { }

  ngOnInit() {
  }

  onHideClick() {
    this.owner = null;
  }
}
