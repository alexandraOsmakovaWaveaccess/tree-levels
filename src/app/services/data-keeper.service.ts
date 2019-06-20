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
      name: 'First level item - 0(1)',
      expandable: true,
      level: 1,
      path: '0/1',
      id: 1
    },
    {
      name: 'Second level item - 0(2)',
      expandable: false,
      level: 2,
      path: '0/1/2',
      id: 2
    },
    {
      name: 'Second level item - 1(3)',
      expandable: false,
      level: 2,
      path: '0/1/3',
      id: 3
    },
    {
      name: 'First level item - 1(4)',
      expandable: true,
      level: 1,
      path: '0/4',
      id: 4
    },
    {
      name: 'Second level item - 0(5)',
      expandable: false,
      level: 2,
      path: '0/4/5',
      id: 5
    },
    {
      name: 'Second level item - 1(6)',
      expandable: true,
      level: 2,
      path: '0/4/6',
      id: 6
    },
    {
      name: 'Third level item - 0(7)',
      expandable: false,
      level: 3,
      path: '0/4/6/7',
      id: 7
    },
    {
      name: 'Third level item - 1(8)',
      expandable: true,
      level: 3,
      path: '0/4/6/8',
      id: 8
    },
    {
      name: 'Fourth level item - 0(9)',
      expandable: true,
      level: 4,
      path: '0/4/6/8/9',
      id: 9
    },
    {
      name: 'Fifth level item - 0(10)',
      expandable: false,
      level: 5,
      path: '0/4/6/8/9/10',
      id: 10
    }];

  constructor() {
  }

  private createTree() {

    let dataToTree: TreeItem = this.extractChild(this.dataFlat.find(el => {
      if (el.path.length === 1) {
        return true
      }
    }))

    this.clearChildrenList(dataToTree);
    this.checkChildChildren(dataToTree);

    return dataToTree
  }

  private extractChild(el) {
    let treeObject: TreeItem = {
      name: el.name,
      path: el.path,
      id: el.id,
      level: el.level,
      children: this.getAllChildren(el.path)
    };

    return treeObject;
  }

  private getAllChildren(path) {
    let children = new Array();
    for (let i = 0; i < this.dataFlat.length; i++) {
      if (this.dataFlat[i].path !== path && this.dataFlat[i].path.indexOf(path) !== -1) {
        children.push({
          name: this.dataFlat[i].name,
          path: this.dataFlat[i].path,
          id: this.dataFlat[i].id,
          level: this.dataFlat[i].level,
          children: this.getAllChildren(this.dataFlat[i].path)
        })
      }
    }
    return children
  }

  private clearChildrenList(data) {
    data.children = data.children.filter(el => {
      if (el.path.length === `${data.path}/`.length + `${el.id}`.length) {
        return el
      }
    })
  }

  private checkChildChildren(data) {
    for (let i = 0; i < data.children.length; i++) {
      this.clearChildrenList(data.children[i]);
      this.checkChildChildren(data.children[i])
    }
  }

  public getTableData() {
    let acc = [];
    let rows = [];

    const iterator = (i) => {
      if (i.level === 1) {
        acc = [];
      }
      const lastItem = acc[acc.length - 1] || {};
      
      const item = {
        ...lastItem,
        [`level_${i.level}`]: i.name,
      };

      acc.push(item);

      if (i.children.length > 0 && i.level < 6) {
        i.children.forEach(iterator);
      } 
      if (i.children.length === 0 || i.level > 5) {
        rows.push(item);
      }
    }

    this.createTree().children.forEach(iterator);

    console.log(rows);

  }

}
