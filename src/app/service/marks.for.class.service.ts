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
  getMark(studentId: string, lessonId: Lesson) {
    let res =  this.studentsMarks
      .filter(studentMark => studentMark.getStudentId() === studentId)
      .filter(studentMark => studentMark.getLesson().getId() === lessonId);
    return res ? res : null;
  }

  markSave(mark: number, studentId: string, lessonId: string, subjectId: UUID) {
    console.log(mark);
    let markForStud = new MarksForStudent(UUID.UUID(), mark, studentId , this.lessonService.getLessonById(lessonId), subjectId);
     this.studentsMarks.push(markForStud);
  }

}
