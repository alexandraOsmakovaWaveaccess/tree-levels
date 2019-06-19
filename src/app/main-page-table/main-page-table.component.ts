import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { TreeLevel, TabbleElement } from '../interface';
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
    this.resortData()
    this.dataSource.data = new BehaviorSubject<TabbleElement[]>(this.activTable);
    console.log(this.dataSource)
  }

  ngOnInit() {
  }

  resortData() {
    this.activTable = this.dataKeeper.dataTree.filter(el => {
      if (el.level !== 0) {
        return { name: el.name, level: el.level }
      }
    })

    this.activTable = this.activTable.map(el => {
      return { name: el.name, level: el.level }
    })
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
