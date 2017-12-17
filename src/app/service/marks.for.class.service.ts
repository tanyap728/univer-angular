import {Injectable} from "@angular/core";
import {MarksForStudent} from "../models/marksForStudent";

@Injectable()
export class MarksForClassService {
  private studentsMarks : MarksForStudent[] = [
    new MarksForStudent(9, 'петян', 4, 'матеша')
  ];
  getMarkByStudent(student: string, lesson: number, subject: string): number {
    // console.log(student, lesson, subject);
    for(let mark of this.studentsMarks) {
      if(mark.getLesson() ===lesson && mark.getStudent() === student && subject===mark.getSubject() ) {
        return mark.getMark();
      }
    }
  }

  markSave(mark, student, lesson, subject){
    console.log(mark, student, lesson);
     this.studentsMarks.push(new MarksForStudent(mark, student, lesson, subject));
  }

}
