import { UUID } from 'angular2-uuid';

export class Subject {
  constructor(private _id: UUID, private _name: string) {
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
}
