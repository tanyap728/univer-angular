import {Subject} from "./subject.model";
import {Class} from "./class.model";
import {UUID} from "angular2-uuid";

export class Lesson {

  constructor(private id: string,
              private topic: string,
              private subject: Subject,
              private dateLesson: Date,
              private currentClass: Class) {
  }
  getId() {
    return this.id;
  }

  getTopic(): string {
   return this.topic;
  }
  getSubject(): Subject {
    return this.subject;
  }
  getClass() {
    return this.currentClass;
  }
  getDateLesson(): Date {
    return this.dateLesson;
  }

}
