import {Component} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Inject} from "@angular/core";
import {LessonServise} from "../service/lesson.servise";

@Component({
  selector: 'add-lesson',
  templateUrl: 'add.lesson.html',
})
export class AddLesson {

  theme: string;
  dateLesson: Date;
  subject: string;
  className: string;
  constructor(public dialogRef: MatDialogRef<AddLesson>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private lessonServise: LessonServise) {
    this.subject = this.data.subject;
    this.className = this.data.className;
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  setDateLesson(date) {
    console.log(new Date(date.value));
    this.dateLesson = new Date(date.value);
  }
  addLesson(theme: string) {
    console.log(new Date(this.dateLesson));
    this.lessonServise.addLessonByClass(theme, this.subject, this.dateLesson, this.className);
    this.onNoClick();
  }
}
