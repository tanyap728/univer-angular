import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ClassService} from '../service/class.service';
import {Class} from '../models/class.model';
import {Subject} from '../models/subject.model';
import {UUID} from 'angular2-uuid';

@Component({
  selector: 'app-subject',
  templateUrl: 'subject.panel.component.html',
  styleUrls: ['subject.panel.component.css']
})
export class SubjectPanelComponent implements OnInit {
  @Input()currentClass: Class;
  @Output()selectSubject: EventEmitter<Subject> = new EventEmitter<Subject>();
  public openPanelSubject: boolean = true;
  public currentSubject: Subject;

  ngOnInit() {
   if ( this.currentClass.getSubjects().length) {
     this.currentSubject = this.currentClass.getSubjects()[0];
     this.selectSubject.emit(this.currentClass.getSubjects()[0]);
   }
  }

  clickOpenPanelSubject(): void {
    this.openPanelSubject = !this.openPanelSubject;
  }
  addSubjectByClass(subjectName: string): void {
    let sub = new Subject(UUID.UUID, subjectName);
    this.currentClass.addSubject(sub);
    this.currentSubject = sub;
    this.selectSubject.emit(sub);
    this.clickOpenPanelSubject();
  }

  setSubject(subject: Subject) {
    this.currentSubject = subject;
    this.selectSubject.emit(subject);
  }



}
