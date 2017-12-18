import {Injectable} from "@angular/core";
import {Lesson} from "../models/lesson";
import {LessonsByClass} from "../models/lessonsByClass";
import {ClassService} from "./class.service";
import {Class} from "../models/class.model";

@Injectable()
export class LessonServise {
  private lessonsForClass: LessonsByClass[];
  constructor(private classService: ClassService) {
    for (theClass of classService.getClassList()) {
      const lessonByClass = new LessonsByClass(theClass);
      lessonByClass.addLesson(new Lesson(1, 'dg', theClass.getSubjects()[0]  , new Date(1995, 11, 17)));
      this.lessonsForClass.push();
    }
    // this.lessonsForClass = [{class: ,
    //   lessonTikets: [
    //     new Lesson(1, 'dg','матеша', new Date(1995, 11, 17)),
    //     new Lesson(2, 'dg','матеша', new Date(1995, 11, 17)),
    //     new Lesson(3, 'dg','матеша', new Date(1995, 11, 17)),
    //     new Lesson(4, 'dg','матеша', new Date(1995, 11, 17)),
    //     new Lesson(5, 'dg','химия',  new Date(1995, 11, 17)),
    //   ]},
    //   {class: '11B', lessonTikets: [
    //     new Lesson(6, 'nu', 'dg', new Date(1995, 11, 17)),
    //     new Lesson(7, 'nu', 'dg', new Date(1995, 11, 17)),
    //     new Lesson(8, 'nu', 'dg', new Date(1995, 11, 17)),
    //     new Lesson(9, 'nu', 'dg', new Date(1995, 11, 17)),
    //     new Lesson(10, 'nu', 'dg', new Date(1995, 11, 17)),
    //   ]}, ];
  }
  getLessonByClass(theClass: Class): LessonsByClass {
    // return this.lessonsForClass.every( lessonsForClass => {
    //
    // });
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
