import {UUID} from "angular2-uuid";
import {Student} from "./student.model";
import {Subject} from "./subject.model";

export class Class {

  constructor(private id: string,
              private name: string,
              private _students: Student[],
              private _subjects: Subject[]
  ) {
    this._students = [];
    this._subjects = [];
  }
  getStudents() {
    return this._students;
  }
  getSubjects() {
    return this._subjects;
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
