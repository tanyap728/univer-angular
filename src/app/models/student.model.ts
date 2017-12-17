import {UUID} from "angular2-uuid";

export class Student {
  constructor(private id: UUID, private name: string) {
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
}
