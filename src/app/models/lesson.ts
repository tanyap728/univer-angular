import {Subject} from "./subject.model";
import {Class} from "./class.model";
import {UUID} from "angular2-uuid";

export class Lesson {

  constructor(private id: UUID,
              private ticket: number,
              private topic: string,
              private subject: Subject,
              private dateLesson: Date) {
  }
  getId(){
    return this.id;
  }
  getTicket(): number {
    return this.ticket;
  }
  getTopic(): string {
   return this.topic;
  }
  getSubject(): Subject {
    return this.subject;
  }
  getDateLesson(): Date {
    return this.dateLesson;
  }

}
