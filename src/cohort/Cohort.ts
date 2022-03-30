import Student from "../student/Student";
import StudentSearchOptions from "../student/StudentSearchOptions";
import ManagerUtils from "../utils/ManagerUtils";

export default class Cohort {
  name: string;
  students: number[]; // Stores IDs instead of instances

  constructor(name: string, students?: number[]) {
    this.name = name;
    this.students = students ?? [];
  }

  addStudent(student: Student) : boolean {
    if(ManagerUtils.findStudent({id: student.id}) === undefined) throw new Error("Student doesn't exist");
    if (this.students.includes(student.id))
      throw new Error("Student already exists in cohort");
    else this.students.push(student.id);
    return true;
  }

  removeStudent(options: StudentSearchOptions) : boolean {
    const student = ManagerUtils.findStudent(options);
    if(student) {
      if(this.students.includes(student.id))
        {
          this.students.splice(this.students.indexOf(student.id), 1);
          return true;
        }
      else throw new Error("Student not found in cohort");
    } else throw new Error("Student not found");
  }
}
