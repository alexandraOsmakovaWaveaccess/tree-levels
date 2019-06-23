import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { TabbleElement, FlatDataRefresh } from '../interface';
import { DataKeeperService } from '../services/data-keeper.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-main-page-table',
  templateUrl: './main-page-table.component.html',
  styleUrls: ['./main-page-table.component.scss']
})
export class MainPageTableComponent implements OnInit {

  activTable: Array<TabbleElement>;
  displayedColumns: string[] = ['1st level', '2nd level', '3rd level', '4th level', '5th level'];
  dataSource = new ExampleDataSource();
  dirtyInputs: Array<FlatDataRefresh> = [];
  static tableChanged = new Subject();

  constructor(private dataKeeper: DataKeeperService) {
    this.activTable = this.dataKeeper.tableData;
    this.dataSource.data = new BehaviorSubject<TabbleElement[]>(this.activTable);
  }

  ngOnInit() {
  }

  getDirtyInputIndex(el, index) {
    const inputElem: FlatDataRefresh = {
      name: el[`level_${index}`],
      id: el[`item_id_${index}`],
      lastPath: el.path,
      level: index

    }
    this.dirtyInputs.push(inputElem)
  }

  saveImprovementData() {
    this.dataKeeper.refreshFlatData(this.dirtyInputs);
    MainPageTableComponent.tableChanged.next();
    this.dirtyInputs = [];
  }

  trackById(index: number, item: any) {
    return index
  }
}

export class ExampleDataSource extends DataSource<TabbleElement> {
  incomeData: Array<TabbleElement>;
  data = new BehaviorSubject<TabbleElement[]>(this.incomeData);

  connect(): Observable<TabbleElement[]> {
    return this.data;
  }

  disconnect() { }
}
