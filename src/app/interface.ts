export interface TreeLevel {
  expandable: boolean;
  name: string;
  level: number;
  parent: string;
  isExpanded?: boolean;
}

export interface TabbleElement {
  name: string;
  level: number;
}

