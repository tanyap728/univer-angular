import {Injectable} from "@angular/core";
import {MarksForStudent} from "../models/marksForStudent";
import {UUID} from "angular2-uuid";
import {LessonServise} from "./lesson.servise";
import {Lesson} from "../models/lesson";

@Injectable()
export class MarksForClassService {
  private studentsMarks: MarksForStudent[] = [];
  constructor(private lessonService: LessonServise ) {
    this.studentsMarks.push();
  }
  // TODO rewrite this
  getMark(studentId: string, lessonId: string): number {
    let res =  this.studentsMarks
      .find((studentMark) => {
        return  studentMark.getStudentId() === studentId && studentMark.getLessonId() === lessonId;
      });

    return  res ? res.getMark() : -1;
  }

  markSave(mark: number, studentId: string, lessonId: string, subjectId: string) {
    console.log(mark);
    let markForStud = new MarksForStudent(UUID.UUID(), mark, studentId , lessonId);
    this.studentsMarks.push(markForStud);
  }

}
