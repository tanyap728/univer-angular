import {Injectable} from "@angular/core";

@Injectable()
export class SubjectClassService {
  private subjectByClass = [{className: '10A', subjectList: ['матеша', 'химия']}];

  getSubjectsByClassName(clName): string[] {
    for( let classL of this.subjectByClass) {
      if(classL.className === clName) {
        return classL.subjectList;
      }else {
        return [];
      }
    }
  }
  addSubjectByClass (subject: string, className: string) {
    for( let classL of this.subjectByClass) {
      if(classL.className === className) {
        return classL.subjectList.push(subject);
      } else {
        this.subjectByClass.push({className: className, subjectList: [subject]});
      }

    }
  }
}
