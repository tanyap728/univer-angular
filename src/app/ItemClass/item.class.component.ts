
import {AfterContentChecked, Component, Input, OnInit} from "@angular/core";
import {LessonServise} from "../service/lesson.servise";
import {MarksForClassService} from "../service/marks.for.class.service";
import {Subject} from '../models/subject.model';
import {Class} from '../models/class.model';
import {UUID} from 'angular2-uuid';
import {Student} from '../models/student.model';
import {Lesson} from "../models/lesson";

@Component({
  selector: 'app-item-class',
  templateUrl: 'item.class.component.html',
  styleUrls: ['item.class.component.css']
})
export class ItemClassComponent implements AfterContentChecked {
  addStudent: boolean = false;
  itemTableL: string = '';
  itemTableS: string = '';
  @Input() classCurrent: Class;
  @Input() subject: Subject;

  lessons: Lesson[] = [];
  constructor(private lessonServise: LessonServise,
              private marksForClassService: MarksForClassService) {
  }
  ngAfterContentChecked() {
    this.lessons = this.lessonServise.getLessonByClassAndSubject(
      this.classCurrent.getId(),
      this.subject.getId());
  }
  getMark(studentId: string, lessonId: string): number {
   return this.marksForClassService.getMark(studentId, lessonId);
  }
  clickByTable(lesson, student) {
    this.itemTableL = lesson;
    this.itemTableS = student;
  }

  saveMark(mark, studentId, lessonId) {
     this.clickByTable('','');
     this.marksForClassService.markSave(mark, studentId, lessonId, this.subject.getId());
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
