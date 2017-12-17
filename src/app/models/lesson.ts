export class Lesson {

  constructor(private tiket: number,
              private theme: string,
              private subject: string,
              private dateLesson: Date) {
  }
  getTicket(): number {
    return this.tiket;
  }
  getTheme(): string {
   return this.theme;
  }
  getSubject(): string {
    return this.subject;
  }
  getDateLesson(): Date {
    return this.dateLesson;
  }

}
