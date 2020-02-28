import { Component, OnInit } from '@angular/core';
import { TabGroupBase } from './tab-group-base';
import { TabGroupComponent } from './tab-group.component';


@Component({
  selector: 'lib-header-outlet',
  template: 'Hi I am the outlet'
})

export class HeaderOutletComponent implements OnInit {
  constructor(private _tabGroup: TabGroupBase) {
    (this._tabGroup as TabGroupComponent).something = false;
  }

  ngOnInit() { }
}