import { Injectable } from '@angular/core';
import { TreeLevel } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class DataKeeperService {

  public dataTree: Array<TreeLevel> = [{
    name: 'Base',
    expandable: true,
    level: 0,
    parent: '1'
  }, {
    name: 'First level item - 0',
    expandable: true,
    level: 1,
    parent: '1.1'
  }, {
    name: 'Second level item - 0',
    expandable: false,
    level: 2,
    parent: '1.1.1'
  }, {
    name: 'Second level item - 0',
    expandable: false,
    level: 2,
    parent: '1.1.2'
  }, {
    name: 'First level item - 1',
    expandable: true,
    level: 1,
    parent: '1.2'
  }, {
    name: 'Second level item - 0',
    expandable: false,
    level: 2,
    parent: '1.2.1'
  }, {
    name: 'Second level item - 1',
    expandable: true,
    level: 2,
    parent: '1.2.2'
  },
  {
    name: 'Third level item - 0',
    expandable: false,
    level: 3,
    parent: '1.2.2.1'
  },
  {
    name: 'Third level item - 1',
    expandable: false,
    level: 3,
    parent: '1.2.2.2'
  }];

  constructor() { }
}
