import {AfterContentChecked, Component} from '@angular/core';
import {ClassService} from "../service/class.service";
import {MatDialog} from "@angular/material";
import {AddLesson} from "../add.lesson/add.lesson";
import {Class} from '../models/class.model';
import {UUID} from 'angular2-uuid';
import {Subject} from '../models/subject.model';

@Component({
  selector: 'app-panel-class',
  templateUrl: 'panel.class.component.html',
  styleUrls: ['panel.class.component.css']
})
export class PanelClassComponent implements AfterContentChecked {
  public addPanelClass: boolean;
  public itemClick: Class;
  private subject: Subject;
  public classes: Class[];
  constructor(private  classService: ClassService,
              public dialog: MatDialog) {
    this.addPanelClass = false;
  }
  ngAfterContentChecked() {
    this.classes = this.classService.getClassList();
  }

  setSubject(subj: Subject) {

    this.subject = subj;
  }
  classClick(itemClass: Class) {
    this.itemClick = itemClass;
  }
  getClassClick(): Class {
    return this.itemClick ? this.itemClick : this.classes[0];
  }
  getSubject() {
    return this.subject;
  }
  openPanelClass() {
    this.addPanelClass = !this.addPanelClass;
  }
  addClass(className: string) {
    this.classService.addClass(new Class(UUID.UUID(), className, [], []));
    this.openPanelClass();
  }


  openPopUp(): void {
    let dialogRef = this.dialog.open(AddLesson, {
      width: '250px',
      data: {
        classCurrent: this.getClassClick(),
        subject: this.subject
      }
    });
  }
}
