import {Injectable} from "@angular/core";
import {Lesson} from "../models/lesson";
import {LessonsByClass} from "../models/lessonsByClass";
import {ClassService} from "./class.service";
import {Class} from "../models/class.model";
import {UUID} from "angular2-uuid";

@Injectable()
export class LessonServise {
  private lessonsForClass: LessonsByClass[];
  constructor(private classService: ClassService) {
    for (const theClass of classService.getClassList()) {
      const lessonByClass = new LessonsByClass(theClass);
      lessonByClass.addLesson(new Lesson(UUID.UUID(), 1, 'dg', theClass.getSubjects()[0] , new Date(1995, 11, 17)));
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
  getLessonByClassAndSubject(theClass: UUID, subject: UUID): Lesson[] {
     const lessons = this.lessonsForClass.filter( lessonsForClass => lessonsForClass.getClass().getId() === theClass );
     return lessons[0].getLessons().filter(lesson => lesson.getSubject().getId() === subject);
  }

  addLessonByClass(classId: UUID,  lesson: Lesson) {
    let lessonByClass = new LessonsByClass(this.classService.getClassById(classId));
    lessonByClass.addLesson(lesson);
  }
  getLessonById(lessonId: UUID ) {
    for (const lessonByClass of this.lessonsForClass) {
      for (let lesson of lessonByClass.getLessons()) {
        if (lesson.getId() === lessonId) {
          return lesson;
        }
      }
    }
  }
}
