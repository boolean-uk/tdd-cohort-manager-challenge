import Manager from "../src/Manager";
import Student from "../src/student/Student";
import ManagerUtils from "../src/utils/ManagerUtils";

describe("Manager", () => {
  const manager = Manager.getInstance();

  beforeEach(() => {
    manager.reset();
  });

  it("throws error on recreating a manager instance", () => {
    expect(() => {
      new Manager();
    }).toThrow();
  });

  it("stores all variables from constructor", () => {
    expect(manager.cohorts).toEqual([]);
    expect(manager.students).toEqual([]);
  });

  it("adds a new cohort", () => {
    manager.addCohort("Cohort 1");

    expect(manager.cohorts.length).toBe(1);
  });

  it("cannot create a cohort with the same name", () => {
    manager.addCohort("Cohort 1");
    expect(() => {
      manager.addCohort("Cohort 1");
    }).toThrow();
  });

  it("adds new student", () => {
    const studentExpected = new Student(
      0,
      "Jane",
      "Doe",
      "jdoe",
      "jdoe@mail.com"
    );

    const student = manager.registerStudent(
      "Jane",
      "Doe",
      "jdoe",
      "jdoe@mail.com"
    );

    expect(student).toEqual(studentExpected);
  });

  it("cannot create a student with the same github username / email", () => {
    manager.registerStudent("Jane", "Doe", "jdoe", "jdoe@mail.com");
    expect(() => {
      manager.registerStudent("Jane", "Doe", "jdoe", "different@mail.com");
    }).toThrow();
    expect(() => {
      manager.registerStudent("Jane", "Doe", "differentName", "jdoe@mail.com");
    }).toThrow();
  });

  it("finds a student with the options object", () => {
    const studentExpected = new Student(
      0,
      "Jane",
      "Doe",
      "jdoe",
      "jdoe@mail.com"
    );

    manager.registerStudent("Jane", "Doe", "jdoe", "jdoe@mail.com");

    const studentFound = ManagerUtils.findStudent({ id: 0 });
    const studentNotFound = ManagerUtils.findStudent({ id: 1 });
    expect(studentFound).toEqual(studentExpected);
    expect(studentNotFound).toEqual(undefined);
  });

  it("removes students", () => {
    const newStudent = manager.registerStudent(
      "Jane",
      "Doe",
      "jdoe",
      "jdoe@mail.com"
    );
    expect(manager.removeStudent({ id: newStudent.id })).toBeTrue(); // Removes student
    expect(() => manager.removeStudent({ id: newStudent.id })).toThrow(); // Student doesn't exist anymore
  });

  it("removes students from cohort before removing from manager", () => {
    const newStudent = manager.registerStudent(
      "Jane",
      "Doe",
      "jdoe",
      "jdoe@mail.com"
    );
    const cohort = manager.addCohort('Cohort 1')
    cohort.addStudent(newStudent); // Adding to cohort
    manager.removeStudent({ id: newStudent.id }) // Removing from manager
 
    expect(cohort.students.length).toBe(0); // Cohort should be empty
   
  });

  it('removes cohort', () => {
    const newCohort = manager.addCohort('Cohort 1')
    manager.removeCohort({ name: newCohort.name })
    expect(manager.cohorts.length).toBe(0);
  })
});
