import {Injectable} from "@angular/core";

@Injectable()
export class ItemClassesService {
  private studentList = [{className: '10A', classStudents: ['петян', 'fedyan']},
                         {className: '11B', classStudents: ['gjhgf', 'gfh']}];

  getStudentsByClassName(clName) {
    for( let classL of this.studentList) {
      if(classL.className === clName) {
        return classL.classStudents;
      }
    }
  }
  addStudentOnClass(student, className): void {
    for( let classL of this.studentList) {
      if(classL.className === className) {
        classL.classStudents.push(student);
      }
    }
  }
}
