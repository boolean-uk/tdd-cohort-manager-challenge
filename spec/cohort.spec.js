const Cohort = require("../src/cohort.js")
const Student = require("../src/student.js")


describe("Cohort", () => {
  let cohort

  beforeEach(() => {
    cohort = new Cohort("cohortTest")
  })

  
  it("New Cohort return name", () => {
    const expected = "cohortTest"
    const test = cohort.name
    expect(test).toEqual(expected)
  })

  it("check new cohort has empty array", () => {
    const expected =[]
    const test = cohort.students
    expect(test).toEqual(expected)
  })

  it("check name method - is correct", () => {
    const expected = true
    const test = cohort.checkCohortName("cohortTest")
    expect(test).toEqual(expected)
  })

  it("add student to cohort", () => {
    const expected = [new Student(1, "Jane", "Doe", "jdoe", "jdoe@gmail.com")]
    cohort.addStudentToCohort(1, "Jane", "Doe", "jdoe", "jdoe@gmail.com")
    const test = cohort.students
    expect(test).toEqual(expected)
  })

  it("remove student from cohort", () => {
    const expected = []
    cohort.addStudentToCohort(1, "Jane", "Doe", "jdoe", "jdoe@gmail.com")
    cohort.removeStudentFromCohort(1)
    const test = cohort.students
    expect(test).toEqual(expected)
  })

})