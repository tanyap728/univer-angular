import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDatepickerIntl, MatListModule, MatNativeDateModule} from '@angular/material';
import { AppComponent } from './app.component';
import {PanelClassComponent} from './panel-classes/panel.class.component';
import {MatToolbarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {ClassService} from './service/class.service';
import {ItemClassComponent} from './ItemClass/item.class.component';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
import {LessonServise} from './service/lesson.servise';
import {MarksForClassService} from './service/marks.for.class.service';
import {MatButtonModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {AddLesson} from './add.lesson/add.lesson';
import {MatMenuModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {UserService} from './service/user.service';
import {AppRoutingModule} from './app-routing.module';
import {SubjectPanelComponent} from './subject.panel/subject.panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectPanelComponent,
    PanelClassComponent,
    ItemClassComponent,
    LoginComponent,
    AddLesson,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [
    MatDatepickerIntl,
    MarksForClassService,
    LessonServise,
    ClassService,
    UserService],
  bootstrap: [AppComponent],
  entryComponents: [AddLesson]
})
export class AppModule { }
