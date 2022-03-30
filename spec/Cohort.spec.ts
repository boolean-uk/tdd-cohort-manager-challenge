import Cohort from "../src/cohort/Cohort";
import Manager from "../src/Manager";
import Student from "../src/student/Student";

describe("Cohort", () => {
  let cohort: Cohort;
  const manager = Manager.getInstance();

  beforeEach(() => {
    cohort = new Cohort("Cohort 1");
    manager.reset();
  });

  it("stores all variables from constructor", () => {
    expect(cohort.name).toBe("Cohort 1");
    expect(cohort.students).toEqual([]);
  });

  it("adds a new student", () => {
    const student = new Student(0, "Jane", "Doe", "jdoe", "jdoe@mail.com");
    manager.registerStudent("Jane", "Doe", "jdoe", "jdoe@mail.com");
    cohort.addStudent(student);
    expect(cohort.students.includes(student.id)).toBeTrue();
  });

  it("removes a student", () => {
    const student = new Student(0, "Jane", "Doe", "jdoe", "jdoe@mail.com");
    manager.registerStudent("Jane", "Doe", "jdoe", "jdoe@mail.com");
    cohort.addStudent(student);
    expect(cohort.removeStudent({ id: student.id })).toBeTrue();
  });
});
