const Student = require("../../src/student")
const Cohort = require("../../src/cohort")

describe("Cohort", () => {
  let cohort
  beforeEach(() => {
    cohort = new Cohort()
  })

  it("add a new student", () => {
    //setup
    const expected = new Student("A.1", "omar", "Alsyouf", "alsyoufomar", "omaralsoyouf@gmail.com")
    const expected2 = [expected]
    //execute
    const result = cohort.addStudent(1, "omar", "Alsyouf", "alsyoufomar", "omaralsoyouf@gmail.com")
    const result2 = cohort.students
    //verify
    expect(result).toEqual(expected)
    expect(result2).toEqual(expected2)

  })

  it("get studesnt by id", () => {
    //setup
    const expected = new Student("A.1", "omar", "Alsyouf", "alsyoufomar", "omaralsoyouf@gmail.com")
    //execute
    cohort.addStudent(1, "omar", "Alsyouf", "alsyoufomar", "omaralsoyouf@gmail.com")
    cohort.addStudent(1, "Ali", "Alsyouf", "alsyoufali", "alialsyouf@gmail.com")
    const result = cohort.getStudentById("A.1")
    //verify
    expect(result).toEqual(expected)
  })

})