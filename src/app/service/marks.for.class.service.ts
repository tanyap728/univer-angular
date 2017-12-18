import {Injectable} from "@angular/core";
import {MarksForStudent} from "../models/marksForStudent";
import {UUID} from "angular2-uuid";

@Injectable()
export class MarksForClassService {
  private studentsMarks: MarksForStudent[] = [];
  constructor() {
    this.studentsMarks.push();
  }
  // TODO rewrite this
  getMark(student: string, lesson: UUID, subjectId: UUID): number {
    // console.log(student, lesson, subject);
    for(let mark of this.studentsMarks) {
      if(mark.getLesson() === lesson && mark.getStudent() === student && subject===mark.getSubject() ) {
        return mark.getMark();
      }
    }
  }

  markSave(mark, student, lesson, subject){
    console.log(mark, student, lesson);
     this.studentsMarks.push(new MarksForStudent(mark, student, lesson, subject));
  }

}
