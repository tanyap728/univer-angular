export class MarksForStudent {

  constructor(private mark: number,
              private student: string,
              private lesson: number,
              private subject:string) {

  }
  getMark(): number {
    return this.mark;
  }
  getStudent(): string {
    return this.student;
  }
  getLesson(): number {
    return this.lesson;
  }
  getSubject(): string {
    return this.subject;
  }
}
