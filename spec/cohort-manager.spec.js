const CohortManager = require("../src/cohort-manager.js")
const Cohort = require("../src/cohort.js")
const Student = require("../src/student.js")


describe("CohortManager", () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  
  it("New Cohort list gives empty array", () => {
    const expected = []
    const test = cohortManager.cohorts
    expect(test).toEqual(expected)
  })

  it("Add new cohort", () => {
    const expected = [new Cohort("Cohort 1")]
    cohortManager.addCohort("Cohort 1")
    const test = cohortManager.cohorts
    expect(test).toEqual(expected)
  })

  it("Add cohort with same name - error message", () => {
    const expected = "There is already a cohort with the same name"
    cohortManager.addCohort("Same Name")
    const test = cohortManager.addCohort("Same Name")
    expect(test).toEqual(expected)
  })

  it("Remove cohort from manager", () => {
    const expected = [new Cohort("Cohort 2"), new Cohort("Cohort 3")]
    cohortManager.addCohort("Cohort 1")
    cohortManager.addCohort("Cohort 2")
    cohortManager.addCohort("Cohort 3")
    cohortManager.removeCohort("Cohort 1")
    const test = cohortManager.cohorts
    expect(test).toEqual(expected)
  })

  it("Try and remove cohort that doesn't exist", () => {
    const expected = "Cohort does not exist"
    const test = cohortManager.removeCohort("Cohort 1")
    expect(test).toEqual(expected)
  })

  it("Add student to cohort", () => {
    const expected = "Jane"
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    const test = cohortManager.cohorts[0].students[0].firstname
    expect(test).toEqual(expected)
  })

  it("Add student to cohort, but cohort does not exist", () => {
    const expected = "Cohort does not exist"
    cohortManager.addCohort("Cohort 1")
    const test = cohortManager.addStudent("Cohort 4","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    expect(test).toEqual(expected)
  })

  it("remove student from cohort", () => {
    const expected = []
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    cohortManager.removeStudent("Cohort 1", 1)
    const test = cohortManager.cohorts[0].students
    expect(test).toEqual(expected)
  })

  it("remove student from cohort, id not found", () => {
    const expected = "Student ID not found"
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    const test = cohortManager.removeStudent("Cohort 1", 2)
    expect(test).toEqual(expected)
  })

  it("remove student from cohort, cohort not found", () => {
    const expected = "Cohort does not exist"
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    const test = cohortManager.removeStudent("cohblort", 1)
    expect(test).toEqual(expected)
  })

  it("search for cohort, return cohort", () => {
    const expected = new Cohort("Cohort 2")
    cohortManager.addCohort("Cohort 1")
    cohortManager.addCohort("Cohort 2")
    const test = cohortManager.searchByCohort("Cohort 2")
    expect(test).toEqual(expected)
  })

  it("search for cohort, cohort not found", () => {
    const expected = "Cohort does not exist"
    cohortManager.addCohort("Cohort 1")
    cohortManager.addCohort("Cohort 2")
    const test = cohortManager.searchByCohort("Cohort 3")
    expect(test).toEqual(expected)
  })

  it("search student by ID, does exist", () => {
    const expected = new Student(2, "Janet", "Day", "jday", "jday@gmail.com")
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    cohortManager.addStudent("Cohort 1","Janet", "Day", "jday", "jday@gmail.com")
    const test = cohortManager.searchByID(2)
    expect(test).toEqual(expected)
  })

  it("search student by ID, does not exist", () => {
    const expected = "Student ID not found"
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    cohortManager.addStudent("Cohort 1","Janet", "Day", "jday", "jday@gmail.com")
    const test = cohortManager.searchByID(3)
    expect(test).toEqual(expected)
  })

it("if cohort is full, do not add any more", () => {
    const expected = "Cohort is full"
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","A", "Doe", "a", "a@gmail.com")
    cohortManager.addStudent("Cohort 1","B", "Doe", "b", "b@gmail.com")
    cohortManager.addStudent("Cohort 1","C", "Doe", "c", "c@gmail.com")
    cohortManager.addStudent("Cohort 1","D", "Doe", "d", "d@gmail.com")
    cohortManager.addStudent("Cohort 1","E", "Doe", "e", "e@gmail.com")
    cohortManager.addStudent("Cohort 1","F", "Doe", "f", "f@gmail.com")
    cohortManager.addStudent("Cohort 1","G", "Doe", "g", "g@gmail.com")
    cohortManager.addStudent("Cohort 1","H", "Doe", "h", "h@gmail.com")
    cohortManager.addStudent("Cohort 1","I", "Doe", "i", "i@gmail.com")
    cohortManager.addStudent("Cohort 1","J", "Doe", "j", "j@gmail.com")
    cohortManager.addStudent("Cohort 1","K", "Doe", "k", "k@gmail.com")
    cohortManager.addStudent("Cohort 1","L", "Doe", "l", "l@gmail.com")
    cohortManager.addStudent("Cohort 1","M", "Doe", "m", "m@gmail.com")
    cohortManager.addStudent("Cohort 1","N", "Doe", "n", "n@gmail.com")
    cohortManager.addStudent("Cohort 1","O", "Doe", "o", "o@gmail.com")
    cohortManager.addStudent("Cohort 1","P", "Doe", "p", "p@gmail.com")
    cohortManager.addStudent("Cohort 1","Q", "Doe", "q", "q@gmail.com")
    cohortManager.addStudent("Cohort 1","R", "Doe", "r", "r@gmail.com")
    cohortManager.addStudent("Cohort 1","S", "Doe", "s", "s@gmail.com")
    cohortManager.addStudent("Cohort 1","T", "Doe", "t", "t@gmail.com")
    cohortManager.addStudent("Cohort 1","U", "Doe", "u", "u@gmail.com")
    cohortManager.addStudent("Cohort 1","V", "Doe", "v", "v@gmail.com")
    cohortManager.addStudent("Cohort 1","W", "Doe", "w", "w@gmail.com")
    cohortManager.addStudent("Cohort 1","X", "Doe", "x", "x@gmail.com")
    const test = cohortManager.addStudent("Cohort 1","Y", "Doe", "y", "y@gmail.com")
    expect(test).toEqual(expected)
  })

  it("search student by first name  - one result", () => {
    const expected = [new Student(1,"Jane", "Doe", "jdoe", "jdoe@gmail.com")]
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    cohortManager.addStudent("Cohort 1","Janet", "Day", "jday", "jday@gmail.com")
    const test = cohortManager.searchStudentsByFirstname("Jane")
    expect(test).toEqual(expected)
  })

  it("search student by first name  - two results", () => {
    const expected = [new Student(1,"Jane", "Doe", "jdoe", "jdoe@gmail.com"), new Student(2,"Jane", "Day", "jday", "jday@gmail.com")]
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    cohortManager.addStudent("Cohort 1","Jane", "Day", "jday", "jday@gmail.com")
    const test = cohortManager.searchStudentsByFirstname("Jane")
    expect(test).toEqual(expected)
  })

  it("search student by first name  - no results", () => {
    const expected = []
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    cohortManager.addStudent("Cohort 1","Janet", "Day", "jday", "jday@gmail.com")
    const test = cohortManager.searchStudentsByFirstname("John")
    expect(test).toEqual(expected)
  })

  it("search student by last name  - one result", () => {
    const expected = [new Student(1,"Jane", "Doe", "jdoe", "jdoe@gmail.com")]
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    cohortManager.addStudent("Cohort 1","Janet", "Day", "jday", "jday@gmail.com")
    const test = cohortManager.searchStudentsByLastname("Doe")
    expect(test).toEqual(expected)
  })

  it("search student by last name  - two results", () => {
    const expected = [new Student(1,"Jane", "Doe", "jdoe", "jdoe@gmail.com"), new Student(2,"Janet", "Doe", "jday", "jday@gmail.com")]
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    cohortManager.addStudent("Cohort 1","Janet", "Doe", "jday", "jday@gmail.com")
    const test = cohortManager.searchStudentsByLastname("Doe")
    expect(test).toEqual(expected)
  })

  it("search student by last name  - no results", () => {
    const expected = []
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    cohortManager.addStudent("Cohort 1","Janet", "Day", "jday", "jday@gmail.com")
    const test = cohortManager.searchStudentsByLastname("Daisy")
    expect(test).toEqual(expected)
  })


})