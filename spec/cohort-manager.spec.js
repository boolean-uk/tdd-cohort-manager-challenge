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
    const expected = 'There is already a cohort with the same name'
    cohortManager.addCohort("Same Name")
    expect(function() {cohortManager.addCohort("Same Name")}).toThrowError(expected)
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
    expect(function() {cohortManager.removeCohort("Cohort 1")}).toThrowError(expected)
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
    expect(function() {cohortManager.addStudent("Cohort 4","Jane", "Doe", "jdoe", "jdoe@gmail.com")}).toThrowError(expected)
  })

  it("Add student to cohort, student already exists in database", () => {
    const expected = "This student already part of a cohort"
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    expect(function() {cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")}).toThrowError(expected)
  })

  it("if cohort is full, do not add any more", () => {
    const expected = "Cohort is full"
    cohortManager.addCohort("Cohort 1")
    for(let i = 1; i < 25; i++) {
      cohortManager.addStudent("Cohort 1","firstname", "lastname", i, i + "@gmail.com")
    }
    expect(function() {cohortManager.addStudent("Cohort 1","Y", "Doe", "y", "y@gmail.com")}).toThrowError(expected)
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
    expect(function() {cohortManager.removeStudent("Cohort 1", 2)}).toThrowError(expected)
  })

  it("remove student from cohort, cohort not found", () => {
    const expected = "Cohort does not exist"
    cohortManager.addCohort("Cohort 1")
    cohortManager.addStudent("Cohort 1","Jane", "Doe", "jdoe", "jdoe@gmail.com")
    expect(function() {cohortManager.removeStudent("cohblort", 1)}).toThrowError(expected)
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