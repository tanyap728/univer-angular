import {Injectable} from "@angular/core";

@Injectable()
export class ClassService {
  massClass = ['10A','11B' ];

  addClass( className: string): void {
    this.massClass.push(className);
  }
}
