export interface TreeLevel {
  expandable: boolean;
  name: string;
  level: number;
  path: string;
  isExpanded?: boolean;
  id: number
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

export class TreeItemNode {
  children: TreeItemNode[];
  name: string;
}

export class TreeItemFlatNode {
  name: string;
  level: number;
  expandable: boolean;
}

