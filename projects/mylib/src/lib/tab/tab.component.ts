import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { TabGroupBase } from '../tab-group/tab-group-base';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'lib-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TabComponent implements OnInit {

  @ViewChild(TemplateRef, {static: true}) _implicitContent: TemplateRef<any>;

  /** Portal that will be the hosted content of the tab */
  private _contentPortal: TemplatePortal | null = null;

  /** @docs-private */
  get content(): TemplatePortal | null {
    return this._contentPortal;
  }

  constructor(private _viewContainerRef: ViewContainerRef, private _tabGroup: TabGroupBase) {
    (this._tabGroup as TabGroupComponent).something = false;
  }

  ngOnInit(): void {
    this._contentPortal = new TemplatePortal(
        this._implicitContent, this._viewContainerRef);
  }

}
