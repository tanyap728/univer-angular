import {
  Component, EventEmitter, Input, OnChanges,
  Output
} from '@angular/core';
import {Class} from '../models/class.model';
import {Subject} from '../models/subject.model';
import {UUID} from 'angular2-uuid';

@Component({
  selector: 'app-subject',
  templateUrl: 'subject.panel.component.html',
  styleUrls: ['subject.panel.component.css']
})
export class SubjectPanelComponent implements OnChanges {
  @Input() currentClass: Class;
  @Output()selectSubject: EventEmitter<Subject> = new EventEmitter<Subject>();
  public openPanelSubject: boolean = true;
  public currentSubject: Subject;

  ngOnChanges() {
    if ( this.currentClass.getSubjects().length) {
      this.currentSubject = this.currentClass.getSubjects()[0];
      this.selectSubject.emit(this.currentClass.getSubjects()[0]);
    } else {
      this.currentSubject = null;
    }
  }


  clickOpenPanelSubject(): void {
    this.openPanelSubject = !this.openPanelSubject;
  }
  addSubjectByClass(subjectName: string): void {
    let sub = new Subject(UUID.UUID(), subjectName);
    this.currentClass.addSubject(sub);
    this.currentSubject = sub;
    this.clickOpenPanelSubject();
    this.selectSubject.emit(sub);
  }

  setSubject(subject: Subject) {
    this.currentSubject = subject;
    this.selectSubject.emit(subject);
  }



}
