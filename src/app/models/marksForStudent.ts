import {UUID} from "angular2-uuid";
import {Subject} from "./subject.model";
import {Student} from "./student.model";
import {Lesson} from "./lesson";

export class MarksForStudent {

  constructor(private id: string,
              private mark: number,
              private studentId: string,
              private lesson: Lesson,
              private subjectId: string) {

  }
  getId() {
    return this.id;
  }
  getMark(): number {
    return this.mark;
  }
  getStudentId() {
    return this.studentId;
  }
  getLesson(): Lesson {
    return this.lesson;
  }
  getSubject(): Subject {
    return this.subjectId;
  }
}
