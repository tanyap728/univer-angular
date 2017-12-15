
import {AfterContentChecked, Component, Input, OnInit} from "@angular/core";
import {ItemClassesService} from "../service/item.classes.service";
import {LessonServise} from "../service/lesson.servise";
import {MarksForClassService} from "../service/marks.for.class.service";
import {SubjectClassService} from "../service/subject.class.service";

@Component({
  selector: 'app-item-class',
  templateUrl: 'item.class.component.html',
  styleUrls: ['item.class.component.css']
})
export class ItemClassComponent implements AfterContentChecked {
  addStudent: boolean = false;
  itemTableL: number = 0;
  itemTableS: string = '';
  @Input() className: string;
  @Input() subject: string;

  students : string[];
  lessons = [];
  constructor(private itemClassesService: ItemClassesService,
              private lessonServise: LessonServise,
              private marksForClassService: MarksForClassService) {
  }
  ngAfterContentChecked() {
    this.students = this.itemClassesService.getStudentsByClassName(this.className);
    this.lessons = this.lessonServise.getStudentsByClassName(this.className, this.subject);
  }
  getMark(student: string, lesson: number): number {
   return this.marksForClassService.getMarkByStudent(student, lesson, this.subject);
  }
  clickByTable(lesson, student) {
    console.log(lesson, student);
    this.itemTableL = lesson;
    this.itemTableS = student;
  }

  saveMark(mark, student, lesson) {
    this.clickByTable(0,'');
    this.marksForClassService.markSave(mark, student, lesson, this.subject);
  }
  clickByAddstydent() {
    this.addStudent = !this.addStudent;
  }
  addStydentOnClass(student: string) {
    this.itemClassesService.addStudentOnClass(student , this.className);
    this.clickByAddstydent();
  }
}
