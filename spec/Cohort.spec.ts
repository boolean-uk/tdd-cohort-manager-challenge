import Cohort from "../src/cohort/Cohort";
import Manager from "../src/Manager";
import Student from "../src/student/Student";

describe("Cohort", () => {
  let cohort: Cohort;
  const manager = Manager.getInstance();

  beforeEach(() => {
    manager.reset();
    cohort = manager.addCohort('Cohort 1')
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

  it('returns students as instances', () => {
    const student = new Student(0, "Jane", "Doe", "jdoe", "jdoe@mail.com");
    manager.registerStudent("Jane", "Doe", "jdoe", "jdoe@mail.com");
    cohort.addStudent(student);
    expect(cohort.getStudents()).toEqual([student]);
  })
});
