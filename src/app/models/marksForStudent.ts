import {UUID} from "angular2-uuid";
import {Subject} from "./subject.model";
import {Student} from "./student.model";
import {Lesson} from "./lesson";

export class MarksForStudent {

  constructor(private id: UUID,
              private mark: number,
              private student: UUID,
              private lesson: Lesson,
              private subject: UUID) {

  }
  getId() {
    return this.id;
  }
  getMark(): number {
    return this.mark;
  }
  getStudent() {
    return this.student;
  }
  getLesson(): Lesson {
    return this.lesson;
  }
  getSubject(): Subject {
    return this.subject;
  }
}
