import {Address} from "../models/address";

export class User {
  private _id: number;
  private _name: string;
  private _email: string;
  private _address: Address;



  constructor(id: number, name: string, email: string, address: Address) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._address = address;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }
}
