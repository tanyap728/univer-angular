import {Subject} from "./subject.model";
import {Class} from "./class.model";

export class Lesson {

  constructor(private ticket: number,
              private topic: string,
              private subject: Subject,
              private dateLesson: Date) {
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
