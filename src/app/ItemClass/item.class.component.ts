
import {AfterContentChecked, Component, Input, OnInit} from "@angular/core";
import {ItemClassesService} from "../service/item.classes.service";
import {LessonServise} from "../service/lesson.servise";
import {MarksForClassService} from "../service/marks.for.class.service";
import {Subject} from '../models/subject.model';
import {Class} from '../models/class.model';
import {UUID} from 'angular2-uuid';
import {Student} from '../models/student.model';

@Component({
  selector: 'app-item-class',
  templateUrl: 'item.class.component.html',
  styleUrls: ['item.class.component.css']
})
export class ItemClassComponent implements OnInit {
  addStudent: boolean = false;
  itemTableL: number = 0;
  itemTableS: string = '';
  @Input() classCurrent: Class;
  @Input() subject: Subject;

  lessons = [];
  constructor(private itemClassesService: ItemClassesService,
              private lessonServise: LessonServise,
              private marksForClassService: MarksForClassService) {
  }
  ngOnInit() {
    console.log(this.classCurrent);
    console.log(this.subject);
    // this.lessons = this.lessonServise.getStudentsByClassName(this.className, this.subject);
  }
  getMark(student: string, lesson: number): number {
   return 6; //this.marksForClassService.getMarkByStudent(student, lesson, this.subject);
  }
  clickByTable(lesson, student) {
    console.log(lesson, student);
    this.itemTableL = lesson;
    this.itemTableS = student;
  }

  saveMark(mark, student, lesson) {
    // this.clickByTable(0,'');
    // this.marksForClassService.markSave(mark, student, lesson, this.subject);
  }
  clickByAddstydent() {
    this.addStudent = !this.addStudent;
  }
  addStydentOnClass(student: string) {
    this.classCurrent.addStudent(new Student(UUID.UUID(), student));
    // this.itemClassesService.addStudentOnClass(student , this.className);
    this.clickByAddstydent();
  }
}
