import Cohort from "./cohort/Cohort";
import CohortSearchOptions from "./cohort/CohortSearchOptions";
import Student from "./student/Student";
import StudentSearchOptions from "./student/StudentSearchOptions";
import ManagerUtils from "./utils/ManagerUtils";

export default class Manager {
  private studentId = 0;

  cohorts: Cohort[];
  students: Student[];

  static instance: Manager;
  static getInstance() {
    return Manager.instance ?? new Manager();
  }

  constructor() {
    if (Manager.instance) {
      throw new Error("Cannot create more than one instance of Manager");
    }
    Manager.instance = this;
    this.cohorts = [];
    this.students = [];
  }

  addCohort(name: string): Cohort {
    if (ManagerUtils.findCohort({ name }))
      throw new Error("Cohort with the same name already exists");
    if(!name || name.length === 0) throw new Error("Cohort name cannot be empty");
    const cohort = new Cohort(name);
    this.cohorts.push(cohort);
    return cohort;
  }

  registerStudent(
    firstName: string,
    lastName: string,
    githubUsername: string,
    email: string
  ): Student {
    if (
      ManagerUtils.findStudent({ githubUsername }) ||
      ManagerUtils.findStudent({ email })
    )
      throw new Error(
        "Student with the same github username / email already exists"
      );
    const student = new Student(
      this.studentId,
      firstName,
      lastName,
      githubUsername,
      email
    );
    this.students.push(student);
    return student;
  }

  removeStudent(options: StudentSearchOptions): boolean {
    const student = ManagerUtils.findStudent(options);
    if (!student) throw new Error("Student not found");

    const cohort = ManagerUtils.findStudentCohort(options);
    if (cohort) cohort.removeStudent(options);

    const index = this.students.findIndex((s) => s.id === student.id);
    this.students.splice(index, 1);
    return true;
  }

  removeCohort(options: CohortSearchOptions): boolean {
    const cohort = ManagerUtils.findCohort(options);
    if (!cohort) throw new Error("Cohort not found");

    const index = this.cohorts.findIndex((c) => c.name === cohort.name);
    this.cohorts.splice(index, 1);
    return true;
  }

  reset() {
    this.cohorts = [];
    this.students = [];
    this.studentId = 0;
  }
}
