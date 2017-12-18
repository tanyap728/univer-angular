import {Injectable} from "@angular/core";
import {Lesson} from "../models/lesson";
import {ClassService} from "./class.service";
import {Class} from "../models/class.model";
import {UUID} from "angular2-uuid";
import {Subject} from "../models/subject.model";

@Injectable()
export class LessonServise {
  private lessons: Lesson[] = [];
  constructor(private classService: ClassService) {

    // const theClass: Class = this.classService.getClassList()[0];
    // this.lessons.push(new Lesson(UUID.UUID(), 'dg', theClass.getSubjects()[0] , new Date(1995, 11, 17), theClass));

  }
  getLessonByClassAndSubject(theClassId: string, subjectId: string): Lesson[] {
     return this.lessons.filter( (lesson: Lesson) => {
     return  lesson.getClass().getId() === theClassId && lesson.getSubject().getId() === subjectId;
     });
  }

  addLessonByClass(classCurrent: Class,  topic: string, subject: Subject, dateCurrent: Date) {
    this.lessons.push(new Lesson(UUID.UUID(), topic, subject , dateCurrent, classCurrent));
  }
  getLessonById(lessonId) {
    return this.lessons.find((lesson) => {
      return lesson.getId() === lessonId;
    });
  }
}
