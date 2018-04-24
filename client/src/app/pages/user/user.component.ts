import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../../services/userService';
import { CoreUtils } from '../../utils/core.utils';
import { GridColumn, GridMenu, GridComponent } from '../../component/grid/grid.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild(GridComponent) gridComponent: GridComponent;
  title = 'User Profile';
  resetUrl = '';
  gridColumns: any[] = new Array();
  gridActions: any[] = new Array();
  funds: any[];

  constructor(public userService: UserService, public coreUtils: CoreUtils, private modalService: NgbModal) { }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
    this.initGrid();
  }

  menuActionNew(content): void {
    this.modalService.open(content).result.then((result) => {
      
    }, (reason) => {
      
    });

  }

  menuActionEdit(): void {
    console.log(this.gridComponent.getSelectedRows());
  }

  menuActionDelete(): void {
    console.log(this.gridComponent.getSelectedRows());
  }

  columnAction(row): void {
    console.log(row);
  }

  getDateFormat(row, val): String {
    return this.coreUtils.getDateFormat(val);
  }

  initGrid(): void {
    this.resetUrl = this.userService.resetUrl + '/list';
    let nameCol: GridColumn = {title: 'User Name', filedName: 'username', width: '30%', columnFormat: null, display: true,
      click: this.columnAction.bind(this),
      sort: {enable: true, sortBy: 'username'}};
    this.gridColumns.push(nameCol);

    nameCol = {title: 'Creation Date', filedName: 'creation_date', width: '30%', columnFormat: this.getDateFormat.bind(this), display: true,
      click: null,
      sort: {enable: true, sortBy: 'creation_date'}};
    this.gridColumns.push(nameCol);

    nameCol = {title: 'Last Updated Date', filedName: 'last_updated_date', width: '30%', columnFormat: this.getDateFormat.bind(this), display: true,
      click: null,
      sort: {enable: true, sortBy: 'last_updated_date'}};
    this.gridColumns.push(nameCol);

     let gridMenu: GridMenu;
    gridMenu = {title: 'New', aClass: 'btn-primary', faIcon: 'fa fa-sticky-note-o',
      action: this.menuActionNew.bind(this), subMenus: []};
    this.gridActions.push(gridMenu);

    gridMenu = {title: 'Edit', aClass: 'btn-info', faIcon: 'fa fa-edit',
      action: this.menuActionEdit.bind(this), subMenus: []};
    this.gridActions.push(gridMenu);

    gridMenu = {title: 'Delete', aClass: 'btn-danger', faIcon: 'fa fa-trash',
      action: this.menuActionDelete.bind(this), subMenus: []};
    this.gridActions.push(gridMenu);
  }
}
