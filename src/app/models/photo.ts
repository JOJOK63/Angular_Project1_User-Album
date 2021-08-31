export class Photo {
  private _albumId : number;
  private _id : number;
  private _title : string;
  private _url : string;
  private _thumbnailUrl : string;


  get thumbnailUrl(): string {
    return this._thumbnailUrl;
  }

  set thumbnailUrl(value: string) {
    this._thumbnailUrl = value;
  }

  constructor(albumId: number, id: number, title: string, url: string, thumbnailUrl: string) {
    this._albumId = albumId;
    this._id = id;
    this._title = title;
    this._url = url;
    this._thumbnailUrl = thumbnailUrl;
  }

  get albumId(): number {
    return this._albumId;
  }

  set albumId(value: number) {
    this._albumId = value;
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

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
