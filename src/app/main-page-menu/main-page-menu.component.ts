import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { DataKeeperService } from '../services/data-keeper.service';
import { TreeLevel, TreeItemNode, TreeItemFlatNode } from '../interface';
import { of as ofObservable, Observable } from 'rxjs';


@Component({
  selector: 'app-main-page-menu',
  templateUrl: './main-page-menu.component.html',
  styleUrls: ['./main-page-menu.component.scss']
})
export class MainPageMenuComponent implements OnInit {
  treeData: Array<TreeLevel> = [];

  constructor(private dataKeeper: DataKeeperService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,
      this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<any>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    this.dataKeeper.treeDataChange.subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit() {}

  getLevel = (node: any) => { return node.level; };

  isExpandable = (node: any) => { return node.expandable; };

  getChildren = (node: any): Observable<any[]> => {
    return ofObservable(node.children);
  }
  
  hasChild = (_: number, _nodeData: any) => { return _nodeData.expandable; };

  hasNoContent = (_: number, _nodeData: any) => { return _nodeData.item === ''; };

  transformer = (node: TreeItemNode, level: number) => {
    let flatNode = this.nestedNodeMap.has(node) && this.nestedNodeMap.get(node)!.name === node.name
      ? this.nestedNodeMap.get(node)!
      : new TreeItemFlatNode();
    flatNode.name = node.name;
    if(!flatNode.level) {
      flatNode.level = level;
    }
    if(node.children.length !== 0) {
      flatNode.expandable = true
    } else {
      flatNode.expandable = false
    }
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }


  flatNodeMap: Map<TreeItemFlatNode, TreeItemNode> = new Map<TreeItemFlatNode, TreeItemNode>();
  nestedNodeMap: Map<TreeItemNode, TreeItemFlatNode> = new Map<TreeItemNode, TreeItemFlatNode>();

  selectedParent: TreeItemFlatNode | null = null;

  treeControl: FlatTreeControl<TreeItemFlatNode>;

  treeFlattener: MatTreeFlattener<TreeItemNode, TreeItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TreeItemNode, TreeItemFlatNode>;


}
