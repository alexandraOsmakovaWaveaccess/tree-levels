import { Injectable } from '@angular/core';
import { TreeLevel, TreeItem } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class DataKeeperService {

  public dataFlat: Array<TreeLevel> = [
    {
      name: 'Base',
      expandable: true,
      level: 0,
      path: '0',
      id: 0
    },
    {
      name: 'First level item - 0',
      expandable: true,
      level: 1,
      path: '0/1',
      id: 1
    },
    {
      name: 'Second level item - 0',
      expandable: false,
      level: 2,
      path: '0/1/2',
      id: 2
    },
    {
      name: 'Second level item - 0',
      expandable: false,
      level: 2,
      path: '0/1/3',
      id: 3
    },
    {
      name: 'First level item - 1',
      expandable: true,
      level: 1,
      path: '1/4',
      id: 4
    },
    {
      name: 'Second level item - 0',
      expandable: false,
      level: 2,
      path: '0/4/5',
      id: 5
    },
    {
      name: 'Second level item - 1',
      expandable: true,
      level: 2,
      path: '0/4/6',
      id: 6
    },
    {
      name: 'Third level item - 0',
      expandable: false,
      level: 3,
      path: '0/4/6/7',
      id: 7
    },
    {
      name: 'Third level item - 1',
      expandable: false,
      level: 3,
      path: '0/4/6/8',
      id: 8
    }];

  constructor() {
    this.createTree()
  }

  public createTree() {

    let dataToTree: TreeItem = this.extractChild(this.dataFlat.find(el => {
      if (el.path.length === 1) {
        return true
      }
    }))

    dataToTree.children = dataToTree.children.filter(el => {
      if (el.children.length > 0) {
        return el
      }
    })
    console.log(dataToTree)
  }

  extractChild(el) {
    let treeObject: TreeItem = {
      name: el.name,
      path: el.path,
      id: el.id,
      children: this.getAllChildren(el.path)
    };

    return treeObject;
  }

  getAllChildren(path) {
    const children = new Array();
    for (let i = 0; i < this.dataFlat.length; i++) {
      if (this.dataFlat[i].path !== path && this.dataFlat[i].path.indexOf(path) !== -1) {
        children.push({
          name: this.dataFlat[i].name,
          path: this.dataFlat[i].path,
          id: this.dataFlat[i].id,
          children: this.getAllChildren(this.dataFlat[i].path)
        })
      }
    }

    return children
  }
}
