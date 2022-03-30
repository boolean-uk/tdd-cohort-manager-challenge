import Student from "../student/Student";
import StudentSearchOptions from "../student/StudentSearchOptions";

export default class Cohort {
  name: string;
  students: number[]; // Stores IDs instead of instances

  constructor(name: string, students?: number[]) {
    this.name = name;
    this.students = students ?? [];
  }

  addStudent(student: Student) : boolean {
    if (this.students.includes(student.id))
      throw new Error("Student already exists in cohort");
    else this.students.push(student.id);
    return true;
  }

  removeStudent(options: StudentSearchOptions) : boolean {
    return true;
  }
}
