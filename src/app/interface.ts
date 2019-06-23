export interface TreeLevel {
  expandable: boolean;
  name: string;
  level: number;
  path: string;
  isExpanded?: boolean;
  id: number
}

export interface TabbleElement {
  level_1: string;
  level_2: string;
  level_3: string;
  level_4: string;
  level_5: string;
}

export interface FlatDataRefresh {
  name: string;
  id: number;
  lastPath: string;
  level: number
}

export interface TreeItem {
  name: string;
  path: string;
  level: number;
  id: number;
  children: any[];
}

export class TodoItemNode {
  children: TodoItemNode[];
  name: string;
}

export class TodoItemFlatNode {
  name: string;
  level: number;
  expandable: boolean;
}

