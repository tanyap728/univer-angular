import {Component} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Inject} from "@angular/core";
import {LessonServise} from "../service/lesson.servise";
import {Class} from '../models/class.model';
import {Subject} from '../models/subject.model';
import {UUID} from 'angular2-uuid';
import {Lesson} from '../models/lesson';

@Component({
  selector: 'add-lesson',
  templateUrl: 'add.lesson.html',
})
export class AddLesson {
  dateLesson: Date;
  subject: Subject;
  classCurrent: Class;
  constructor(public dialogRef: MatDialogRef<AddLesson>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private lessonServise: LessonServise) {
    this.subject = this.data.subject;
    this.classCurrent = this.data.classCurrent;
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  setDateLesson(date) {
    console.log(new Date(date.value));
    this.dateLesson = new Date(date.value);
  }
  addLesson(topic: string) {
    this.lessonServise.addLessonByClass(this.classCurrent, topic, this.subject, new Date());
    this.onNoClick();
  }
}
