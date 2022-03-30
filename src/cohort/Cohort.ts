import Student from "../student/Student";
import StudentSearchOptions from "../student/StudentSearchOptions";
import ManagerUtils from "../utils/ManagerUtils";

export default class Cohort {
  name: string;
  students: number[]; // Stores IDs instead of instances
  capacity = 24;

  constructor(name: string, students?: number[]) {
    this.name = name;
    this.students = students ?? [];
  }

  addStudent(options: StudentSearchOptions) : boolean {
    if(this.students.length >= this.capacity) throw new Error("Cohort is full");
    const student = ManagerUtils.findStudent(options) ;
    if(student === undefined) throw new Error("Student doesn't exist");
    if(ManagerUtils.findStudentCohort(options) !== undefined) throw new Error("Student already in another cohort");
    if (this.students.includes(student.id))
      throw new Error("Student already exists in cohort");
    else this.students.push(student.id);
    return true;
  }

  getStudents() : Student[] {
    return this.students.map(id => ManagerUtils.findStudent({ id })) as unknown as Student[];
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
