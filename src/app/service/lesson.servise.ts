import {Injectable} from "@angular/core";
import {Lesson} from "../models/lesson";

@Injectable()
export class LessonServise {
  private lessonsForClass = [{className: '10A',
    lessonTikets: [
      new Lesson(1, 'dg','матеша', new Date(1995, 11, 17)),
      new Lesson(2, 'dg','матеша', new Date(1995, 11, 17)),
      new Lesson(3, 'dg','матеша', new Date(1995, 11, 17)),
      new Lesson(4, 'dg','матеша', new Date(1995, 11, 17)),
      new Lesson(5, 'dg','химия',  new Date(1995, 11, 17)),
   ]},
    {className: '11B', lessonTikets: [
      new Lesson(6, 'nu', 'dg', new Date(1995, 11, 17)),
      new Lesson(7, 'nu', 'dg', new Date(1995, 11, 17)),
      new Lesson(8, 'nu', 'dg', new Date(1995, 11, 17)),
      new Lesson(9, 'nu', 'dg', new Date(1995, 11, 17)),
      new Lesson(10, 'nu', 'dg', new Date(1995, 11, 17)),
    ]},];

  getStudentsByClassName(clName: string, subject: string) {
    for( let classL of this.lessonsForClass) {
      if(classL.className === clName) {
        return classL.lessonTikets.filter( (item) =>{
          return item.getSubject() === subject;
        });
      }
    }
  }

  addLessonByClass(theme: string, subject: string, date: Date, className: string) {
    for( let classL of this.lessonsForClass) {
      if(classL.className === className) {
        let num = Math.floor( Math.random()*(1000-10)+10);
        classL.lessonTikets.push(new Lesson(num, theme, subject, date));
      }
    }
  }

}
