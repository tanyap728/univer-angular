import {Class} from "./class.model";
import {Lesson} from "./lesson";

export class LessonsByClass {
  private lessons: Lesson[];
  constructor(private theclass: Class) {
  this.lessons = [];
}
  public addLesson(lesson: Lesson) {
    this.lessons.push(lesson);
  }
  public getLessons() {
    return this.lessons;
  }
  public setClass(theclass: Class) {
    this.theclass = theclass;
  }
  public getClass() {
    return this.theclass;
  }
}
