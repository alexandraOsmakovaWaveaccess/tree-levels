export interface TreeLevel {
  expandable: boolean;
  name: string;
  level: number;
  path: string;
  isExpanded?: boolean;
  id: number
}

export interface TabbleElement {
  name: string;
  level: number;
}

export interface TreeItem {
  name: string;
  path: string;
  id: number,
  children: any;
}

