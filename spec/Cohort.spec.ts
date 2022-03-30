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

  it('cannot add a student that is already inside a cohort', () => {
    const student = new Student(0, "Jane", "Doe", "jdoe", "jdoe@mail.com");
    manager.registerStudent("Jane", "Doe", "jdoe", "jdoe@mail.com");
    cohort.addStudent(student);

    const cohort2 = manager.addCohort('Cohort 2');
    expect(() => {cohort2.addStudent(student)}).toThrow();
  })
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

  it('cohort has capacity', () => {
    const student = new Student(0, "Jane", "Doe", "jdoe", "jdoe@mail.com");
    manager.registerStudent("Jane", "Doe", "jdoe", "jdoe@mail.com");
    cohort.addStudent(student);
    cohort.capacity = 1;
    const student2 = manager.registerStudent('Jade', 'Doe', 'jadeo', 'jadeo@mail.com')
    expect(() => {cohort.addStudent(student2)}).toThrow();
   
  })
});
