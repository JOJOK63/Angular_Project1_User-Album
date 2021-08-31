
export class Album {
  private _userId: number;
  private _id: number;
  private _title: string;


  constructor(userId: number, id: number, title: string) {
    this._userId = userId;
    this._id = id;
    this._title = title;
  }


  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
}
