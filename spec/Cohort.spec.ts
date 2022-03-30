import Cohort from "../src/cohort/Cohort";
import Student from "../src/student/Student";

describe("Cohort", () => {
  let cohort: Cohort;


  beforeEach(() => {
    cohort = new Cohort("Cohort 1", [1, 2, 3]);
  });

  it("stores all variables from constructor", () => {
    expect(cohort.name).toBe("Cohort 1");
    expect(cohort.students).toEqual([1, 2, 3]);
  });

  it('adds a new student', () => {
    const student = new Student(4, 'Jane', 'Doe', 'jdoe', 'jdoe@mail.com')
    cohort.addStudent(student);

    expect(cohort.students.includes(student.id)).toBeTrue();
  })

  it('aremoves a student', () => {
    const student = new Student(4, 'Jane', 'Doe', 'jdoe', 'jdoe@mail.com')
    cohort.addStudent(student);

    cohort.removeStudent({id: student.id});
  })
});
