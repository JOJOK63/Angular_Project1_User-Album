export class Address {
  private _street : string;
  private _suite : string;
  private _city : string;


  constructor(street: string, suite: string, city: string) {
    this._street = street;
    this._suite = suite;
    this._city = city;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get suite(): string {
    return this._suite;
  }

  set suite(value: string) {
    this._suite = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }
}
