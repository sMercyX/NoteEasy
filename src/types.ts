export interface Note {
  id: number;
  text: string;
  creator: string;
  date: string;
  color: string;
}

export interface HistoryType {
  id: number;
  textBefore: string;
  textAfter: string;
  date: string;
  colorBefore: string;
  colorAfter: string;
}
