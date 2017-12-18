import { UUID } from 'angular2-uuid';

export class Subject {
  constructor(private _id: string, private _name: string) {
  }
  getId() {
    return this._id;
  }
  getName() {
    return this._name;
  }
}
