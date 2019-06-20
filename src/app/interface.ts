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

export interface TreeItem {
  name: string;
  path: string;
  level: number;
  id: number;
  children: any[];
}

