const Student = require("../../src/student")
const Cohort = require("../../src/cohort")
const CohortManager = require("../../src/cohortManager")

describe("cohort manager", () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it("create a new cohort", () => {
    //setup
    const expected = new Cohort(`cohort 1`)
    const expected2 = [expected]
    //execute
    const result = cohortManager.createCohort(`cohort 1`)
    const result2 = cohortManager.cohorts
    //verify
    expect(result).toEqual(expected)
    expect(result2).toEqual(expected2)
  })

  it("cohorts cannot have the same name", () => {
    //setup
    const expected = "cohorts cannot have the same name"
    //execute
    cohortManager.createCohort(`cohort 1`)
    const result = cohortManager.createCohort(`cohort 1`)
    //verify
    expect(result).toEqual(expected)
  })

  it("cohort must have a name", () => {
    //setup
    const expected = "cohort must have a NAME!"
    //execute
    const result = cohortManager.createCohort()
    //verify
    expect(result).toEqual(expected)
  })

  it("get a cohort by name", () => {
    //setup
    const expected = new Cohort(`cohort 1`);
    //execute
    cohortManager.createCohort(`cohort 1`)
    const result = cohortManager.getCohortByName("cohort 1")
    //verify
    expect(result).toEqual(expected)
  })

  it("return error when looking for unexisting cohort", () => {
    //setup
    const expected = "cohort not found"
    //execute
    cohortManager.createCohort(`cohort 1`)
    const result = cohortManager.getCohortByName("cohort 5")
    //verify
    expect(result).toEqual(expected)
  })

  it("remove a cohort by its name", () => {
    //setup
    const expected = []
    //execute
    cohortManager.createCohort(`cohort 1`)
    cohortManager.removeCohortByName("cohort 1")
    const result = cohortManager.cohorts
    //verify
    expect(result).toEqual(expected)
  })

  it("return error for removing unexisting cohort", () => {
    //setup
    const expected = "cohort not found"
    //execute
    cohortManager.createCohort(`cohort 1`)
    const result = cohortManager.removeCohortByName("cohort 5")
    //verify
    expect(result).toEqual(expected)
  })

  it("add a student to a specific cohort", () => {
    //setup
    const cohort = new Cohort(`cohort 2`)
    cohort.addStudent(2, "Ali", "Alsyouf", "alsyoufali", "alialsyouf@gmail.com")
    //execute
    cohortManager.createCohort(`cohort 1`)
    cohortManager.createCohort(`cohort 2`)
    cohortManager.addStudentToCohort("cohort 2", "Ali", "Alsyouf", "alsyoufali", "alialsyouf@gmail.com")
    const result = cohortManager.cohorts[1]
    //verify
    expect(result).toEqual(cohort)
  })

  it("return error when adding a student to unexisting cohort", () => {
    //setup
    const expected = "cohort not found"
    //execute
    cohortManager.createCohort(`cohort 1`)
    const result = cohortManager.addStudentToCohort("cohort 2", "Ali", "Alsyouf", "alsyoufali", "alialsyouf@gmail.com")
    expect(result).toEqual(expected)
  })

  it("return error for adding a student more than once", () => {
    //setup
    const expected = "student exist already"
    //execute
    cohortManager.createCohort("cohort 1")
    cohortManager.createCohort("cohort 2")
    cohortManager.addStudentToCohort("cohort 2", "Ali", "Alsyouf", "alsyoufali", "alialsyouf@gmail.com")
    const result = cohortManager.addStudentToCohort("cohort 2", "Ali", "Alsyouf", "alsyoufali", "alialsyouf@gmail.com")
    //verify
    expect(result).toEqual(expected)
  })

  it("remove a student from a specific cohort by id", () => {
    //setup
    const expected = `A.2 has been removed`
    //execute
    cohortManager.createCohort(`cohort 1`)
    cohortManager.createCohort(`cohort 2`)
    cohortManager.addStudentToCohort("cohort 2", "Ali", "Alsyouf", "alsyoufali", "alialsyouf@gmail.com")

    const result = cohortManager.removeStudent("A.2")
    //verify
    expect(result).toEqual(expected)
  })

  it("return error for removing unexisting student", () => {
    //setup
    const expected = "student not found"
    //execute
    cohortManager.createCohort('cohort 1')
    cohortManager.createCohort('cohort 2')
    cohortManager.createCohort('cohort 3')
    cohortManager.addStudentToCohort("cohort 3", "Ali", "Alsyouf", "alsyoufali", "alialsyouf@gmail.com")
    const result = cohortManager.removeStudent("A.2")
    //verify
    expect(result).toEqual(expected)
  })

  it("get a student by id", () => {
    //setup
    const expected = new Student("A.2", "omar", "Alsyouf", "alsyoufomar", "omaralsoyouf@gmail.com")
    //execute
    cohortManager.createCohort(`cohort 1`)
    cohortManager.createCohort(`cohort 2`)
    cohortManager.addStudentToCohort("cohort 2", "omar", "Alsyouf", "alsyoufomar", "omaralsoyouf@gmail.com")
    const result = cohortManager.getStudentById("A.2")
    //verify
    expect(result).toEqual(expected)
  })

  it("return error if student was not found", () => {
    //setup
    const expected = "student not found"
    //execute
    cohortManager.createCohort('cohort 1')
    cohortManager.addStudentToCohort("cohort 1", "Ali", "Alsyouf", "alsyoufali", "alialsyouf@gmail.com")
    const result = cohortManager.getStudentById('B.1')
    //verify
    expect(result).toEqual(expected)
  })

  it("return error if the cohort capacity (24 students) was exceded", () => {
    //setup
    const expected = "cohort is full!"
    ///execute
    cohortManager.createCohort('cohort 1')
    for (let i = 0; i < 24; i++) {
      cohortManager.addStudentToCohort('cohort 1', `test ${i}`, `test ${i}`, `test ${i}`, `test ${i}`)
    }
    const result = cohortManager.addStudentToCohort("cohort 1", "Ali", "Alsyouf", "alsyoufali", "alialsyouf@gmail.com")
    //verify
    expect(result).toEqual(expected)

  })

  it("searcch for a student by his first and last name", () => {
    //setup
    const expected = new Student('A.1', 'Ali', 'Alsyouf', 'alsyoufali', 'gmail')
    //execute
    cohortManager.createCohort('cohort 1')
    cohortManager.createCohort('cohort 2')
    cohortManager.addStudentToCohort('cohort 1', 'Ali', 'Alsyouf', 'alsyoufali', 'gmail')
    const result = cohortManager.getStudentByFirstLastName('Ali Alsyouf')
    //verify
    expect(result).toEqual(expected)
  })

  it("search for unexisting fullname", () => {
    //setup 
    const expected = "student not found"
    //execute
    cohortManager.createCohort('cohort 1')
    cohortManager.createCohort('cohort 2')
    cohortManager.addStudentToCohort('cohort 1', 'Ali', 'Alsyouf', 'alsyoufali', 'gmail')
    const result = cohortManager.getStudentByFirstLastName('Ali Alsy')
    //verify
    expect(result).toEqual(expected)
  })
})