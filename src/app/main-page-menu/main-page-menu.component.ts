import { Component, OnInit } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { DataKeeperService } from '../services/data-keeper.service';
import { TreeLevel } from '../interface';

@Component({
  selector: 'app-main-page-menu',
  templateUrl: './main-page-menu.component.html',
  styleUrls: ['./main-page-menu.component.scss']
})
export class MainPageMenuComponent implements OnInit {
  treeData: Array<TreeLevel> = this.dataKeeper.dataFlat;

  constructor(private dataKeeper: DataKeeperService) {
   }

  ngOnInit() {
  }


  treeControl = new FlatTreeControl<TreeLevel>(
    node => node.level, node => node.expandable);

  dataSource = new ArrayDataSource(this.treeData);

  hasChild = (_: number, node: TreeLevel) => node.expandable;

  getParentNode(node: TreeLevel) {
    const nodeIndex = this.treeData.indexOf(node);

    for (let i = nodeIndex - 1; i >= 0; i--) {
      if (this.treeData[i].level === node.level - 1) {
        return this.treeData[i];
      }
    }

    return null;
  }

  shouldRender(node: TreeLevel) {
    const parent = this.getParentNode(node);
    return !parent || parent.isExpanded;
  }


}
