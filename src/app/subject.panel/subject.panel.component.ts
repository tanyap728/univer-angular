import {Component, Input} from '@angular/core';
import {SubjectClassService} from '../service/subject.class.service';
import {MatDialog} from '@angular/material';
import {ClassService} from '../service/class.service';

@Component({
  selector: 'app-subject',
  templateUrl: 'subject.panel.component.html',
  styleUrls: ['subject.panel.component.css']
})
export class SubjectPanelComponent {
  @Input()
  public openPanelSubject: boolean = true;
  public addPanelClass: boolean;
  private itemClick: string;
  private subject: string;
  public classes: Array<string>;
  constructor(private subjectClassService: SubjectClassService) {
    this.addPanelClass = false;
  }
  getSubjectList(): string[] {
    return this.subjectClassService.getSubjectsByClassName(this.getClassClick());
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

}
