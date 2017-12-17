import {Injectable} from "@angular/core";

@Injectable()
export class ClassService {
  massClass = ['10A', '11B' ];

  getClassList() {
   return Array.from(this.massClass);
  }

  addClass( className: string): void {
    this.massClass.push(className);
  }
}
