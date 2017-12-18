import {Injectable} from "@angular/core";
import {Lesson} from "../models/lesson";
import {LessonsByClass} from "../models/lessonsByClass";
import {ClassService} from "./class.service";
import {Class} from "../models/class.model";
import {UUID} from "angular2-uuid";

@Injectable()
export class LessonServise {
  private lessonsForClass: LessonsByClass[] = [];
  constructor(private classService: ClassService) {
    for (const theClass of classService.getClassList()) {
      const lessonByClass = new LessonsByClass(theClass);
      lessonByClass.addLesson(new Lesson(UUID.UUID(), 1, 'dg', theClass.getSubjects()[0] , new Date(1995, 11, 17)));
      this.lessonsForClass.push(lessonByClass);
    }
  }
  getLessonByClassAndSubject(theClass: string, subject: string): Lesson[] {
     const lessons = this.lessonsForClass.filter( lessonsForClass => lessonsForClass.getClass().getId() === theClass );
     return lessons[0].getLessons().filter(lesson => lesson.getSubject().getId() === subject);
  }

  addLessonByClass(classId: string,  lesson: Lesson) {
    let classFind =  this.lessonsForClass.find((item) => {
     return item.getClass().getId() === classId;
    });
    if (classFind) {
      classFind.addLesson(lesson);
    }else {
      let  lessonByClass = new LessonsByClass(this.classService.getClassById(classId));
      lessonByClass.addLesson(lesson);
      this.lessonsForClass.push(lessonByClass);
    }
  }
  getLessonById(lessonId: string ) {
    for (const lessonByClass of this.lessonsForClass) {
      for (let lesson of lessonByClass.getLessons()) {
        if (lesson.getId() === lessonId) {
          return lesson;
        }
      }
    }
  }
}
