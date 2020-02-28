import { Component, OnInit, ChangeDetectionStrategy, ContentChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabGroupBase } from './tab-group-base';

@Component({
  selector: 'lib-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: TabGroupBase, useExisting: TabGroupComponent}]
})
export class TabGroupComponent  implements OnInit, TabGroupBase {

  show = true;
  show2 = true;

  something = true;

  @ContentChildren(TabComponent, { descendants: true }) tabs: QueryList<TabComponent>;

  constructor(private _cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {

  }

}
