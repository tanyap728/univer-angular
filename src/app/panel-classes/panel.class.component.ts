import { Component } from '@angular/core';
import {ClassService} from "../service/class.service";
import {MatDialog} from "@angular/material";
import {AddLesson} from "../add.lesson/add.lesson";
import {SubjectClassService} from "../service/subject.class.service";

@Component({
  selector: 'app-panel-class',
  templateUrl: 'panel.class.component.html',
  styleUrls: ['panel.class.component.css']
})
export class PanelClassComponent {
  public openPanelSubject: boolean = true;
  public addPanelClass: boolean;
  private itemClick: string;
  private subject: string;
  public classes: Array<string>;
  constructor(private  classService: ClassService,
              private subjectClassService: SubjectClassService,
              public dialog: MatDialog){
    this.addPanelClass = false;
    this.classes = classService.massClass;
  }
  classClick(itemClass: string) {
    this.itemClick = itemClass;
  }
  getClassClick() {
    return this.itemClick;
  }
  getSubjectList(): string[] {
    return this.subjectClassService.getSubjectsByClassName(this.getClassClick());
  }
  openPanelClass(){
    this.addPanelClass = !this.addPanelClass;
  }
  addClass(className: string) {
    this.classService.addClass(className);
    this.openPanelClass();
  }
  clickOpenPanelSubject(): void {
    this.openPanelSubject = !this.openPanelSubject;
  }
  addSubjectByClass(subject: string): void {
    this.subjectClassService.addSubjectByClass(subject, this.getClassClick());
    this.clickOpenPanelSubject();
  }

  setSubject(subject: string) {
    this.subject = subject;
  }
  getSubject() {
    let sub: string[] = this.getSubjectList();
   return this.subject ? this.subject : sub[0];
  }
  openPopUp(): void {
    let dialogRef = this.dialog.open(AddLesson, {
      width: '250px',
      data: {
        className: this.getClassClick(),
        subject: this.getSubject()
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    // });
  }
}
