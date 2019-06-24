import { Component, OnInit } from '@angular/core';
import { FlatDataRefresh } from '../interface';
import { DataKeeperService } from '../services/data-keeper.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-main-page-table',
  templateUrl: './main-page-table.component.html',
  styleUrls: ['./main-page-table.component.scss']
})
export class MainPageTableComponent implements OnInit {

  activTable: Array<any>;
  displayedColumns: string[] = ['1st level', '2nd level', '3rd level', '4th level', '5th level'];
  dataSource: any;
  dirtyInputs: Array<FlatDataRefresh> = [];
  static tableChanged = new Subject();

  constructor(private dataKeeper: DataKeeperService) {
    this.dataKeeper.tableData.subscribe(data => {
      this.dataSource = data
    });
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
