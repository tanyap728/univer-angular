import {UUID} from "angular2-uuid";
import {Student} from "./student.model";
import {Subject} from "./subject.model";

export class Class {
  private _students: Student[];
  private _subjects: Subject[];
  constructor(private id: UUID,
              private name: string) {
    this._subjects = [];
    this._students = [];
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
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
}
