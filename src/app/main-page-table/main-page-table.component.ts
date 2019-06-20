import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { TabbleElement } from '../interface';
import { DataKeeperService } from '../services/data-keeper.service';
@Component({
  selector: 'app-main-page-table',
  templateUrl: './main-page-table.component.html',
  styleUrls: ['./main-page-table.component.scss']
})
export class MainPageTableComponent implements OnInit {

  activTable: Array<TabbleElement>;
  displayedColumns: string[] = ['1st level', '2nd level', '3rd level', '4th level', '5th level'];
  dataSource = new ExampleDataSource();

  constructor(private dataKeeper: DataKeeperService) {
    this.activTable = this.dataKeeper.tableData;
    this.dataSource.data = new BehaviorSubject<TabbleElement[]>(this.activTable);
  }

  ngOnInit() {
  }

  saveImprovementData() {
    for (let i = 0; i < this.activTable.length; i++) {
      let objKeys = Object.keys(this.activTable[i]);
      objKeys = objKeys.filter((el) => {
        if (this.activTable[i][el].length === 0) {
          delete this.activTable[i][el]
        } else {
          return el
        }
      })
      if (objKeys.length === 0) {
        this.activTable.splice(i, 1)
      }
    }

    this.dataKeeper.refreshFlatData(this.activTable);
  }

  addNewTableRow() {

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
