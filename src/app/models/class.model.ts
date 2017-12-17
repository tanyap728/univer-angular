import {UUID} from "angular2-uuid";
import {Student} from "./student.model";
import {Subject} from "./subject.model";

export class Class {
  constructor(private id: UUID,
              private name: string,
              private _students: Student[],
              private _subjects: Subject[]) {
    this._students = [];
    this._subjects = [];
  }
  getStudents() {
    return Array.from(this._students);
  }
  getSubjects() {
    return Array.from(this._subjects);
  }
  public addStudent(student: Student) {
    this._students.push(student);
  }
  addSubject(subj: Subject) {
    this._subjects.push(subj);
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
}
