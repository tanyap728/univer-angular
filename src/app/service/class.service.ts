import {Injectable} from '@angular/core';
import {Class} from '../models/class.model';
import {UUID} from 'angular2-uuid';
import {Student} from '../models/student.model';

@Injectable()
export class ClassService {
  private massClass: Class[];
  constructor() {
    this.massClass = [];
    const class1 = new Class(UUID.UUID(), '11-A', [], []);
    const class2 = new Class(UUID.UUID(), '12-A', [], []);
    // class1.addStudent(new Student(UUID.UUID(), 'vasya'));
    // class1.addStudent(new Student(UUID.UUID(), 'petya'));
    this.massClass.push(class1);
    this.massClass.push(class2);
  }
  public getClassList(): Class[] {
   return this.massClass;
  }
  public addClass(newClass: Class): void {
    this.massClass.push(newClass);
  }
  getClassById(id: UUID): Class {
    for ( const theclass of this.massClass) {
      if ( theclass.getId() === id) {
        return theclass;
      }
    }
  }
}
