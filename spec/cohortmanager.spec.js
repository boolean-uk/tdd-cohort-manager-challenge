const CohortManager = require('../src/cohort-manager.js')
const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

describe("cohort manager", () => {
it("add a cohort", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = [ new Cohort("cohortOne", 24) ]
    // execute
    const cohortOne = cohortManager.addCohort("cohortOne", 24)
    // verify
    expect(cohortOne).toEqual(expected)
    })

it("can't add a cohort that already exists", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = false
    // execute
    cohortManager.addCohort("cohortOne", 24)
    const cohortOne = cohortManager.addCohort("cohortOne", 24)
    // verify
    expect(cohortOne).toEqual(expected)
    })

it("search for a cohort by cohort name", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = new Cohort("cohortOne", 24)
    // execute
    cohortManager.addCohort("cohortThree", 24)
    cohortManager.addCohort("cohortTwo", 24)
    cohortManager.addCohort("cohortOne", 24)
    const result = cohortManager.searchByCohortName("cohortOne")
    // verify
    expect(result).toEqual(expected)
    })

it("search for a cohort that does not exist by cohort name", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = "This cohort does not exist"
    // execute
    cohortManager.addCohort("cohortThree", 24)
    cohortManager.addCohort("cohortTwo", 24)
    cohortManager.addCohort("cohortOne", 24)
    const result = cohortManager.searchByCohortName("cohortFour")
    // verify
    expect(result).toEqual(expected)
    })

it("add student to a specific cohort", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = new Student("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com", 1) 
    // execute
    cohortManager.addCohort("cohortOne", 2)
    const result = cohortManager.addStudentToCohort("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")
    // verify
    expect(result).toEqual(expected)
    })

it("add student to a cohort that does not exist", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = false 
    // execute
    cohortManager.addCohort("cohortOne", 2)
    const result = cohortManager.addStudentToCohort("cohortTwo", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")
    // verify
    expect(result).toEqual(expected)
    })

it("remove a cohort by cohort name", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = [new Cohort("cohortTwo", 2)]
    // execute
    cohortManager.addCohort("cohortOne", 2)
    cohortManager.addCohort("cohortTwo", 2)
    const result = cohortManager.removeCohort("cohortOne")
    // verify
    expect(result).toEqual(expected)
    })

it("remove a cohort that does not exist by cohort name", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = false
    // execute
    cohortManager.addCohort("cohortOne", 2)
    cohortManager.addCohort("cohortTwo", 2)
    const result = cohortManager.removeCohort("cohortThree")
    // verify
    expect(result).toEqual(expected)
    })

it("remove student from a specific cohort", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = [new Student("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com", 1)]
    // execute
    cohortManager.addCohort("cohortOne", 2)
    cohortManager.addStudentToCohort("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")
    cohortManager.addStudentToCohort("cohortOne", "Reece", "James", "reececodes", "reececodes@gmail.com")
    const result = cohortManager.removeStudentFromCohort("cohortOne", "reececodes@gmail.com")
    // verify
    expect(result).toEqual(expected)
    })

it("remove student from a cohort that does not exist", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = false
    // execute
    cohortManager.addCohort("cohortOne", 2)
    cohortManager.addStudentToCohort("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")
    cohortManager.addStudentToCohort("cohortOne", "Reece", "James", "reececodes", "reececodes@gmail.com")
    const result = cohortManager.removeStudentFromCohort("cohortThree", "reececodes@gmail.com")
    // verify
    expect(result).toEqual(expected)
    })
    
it("remove student that does not exist from a specific cohort", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = false
    // execute
    cohortManager.addCohort("cohortOne", 2)
    cohortManager.addStudentToCohort("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")
    cohortManager.addStudentToCohort("cohortOne", "Reece", "James", "reececodes", "reececodes@gmail.com")
    const result = cohortManager.removeStudentFromCohort("cohortOne", "mosalah@gmail.com")
    // verify
    expect(result).toEqual(expected)
    })

it("remove student that does not exist from a cohort that does not exist", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = false
    // execute
    cohortManager.addCohort("cohortOne", 2)
    cohortManager.addStudentToCohort("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")
    cohortManager.addStudentToCohort("cohortOne", "Reece", "James", "reececodes", "reececodes@gmail.com")
    const result = cohortManager.removeStudentFromCohort("cohortThree", "mosalah@gmail.com")
    // verify
    expect(result).toEqual(expected)
    })

it("Searches all cohorts for student by email", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = new Student("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com", 1)
    // execute
    cohortManager.addCohort("cohortOne", 2)
    cohortManager.addStudentToCohort("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")
    const result = cohortManager.searchByStudentEmail("kantecodes@gmail.com")
    // verify
    expect(result).toEqual(expected)
    })

it("Return errors if student email not found", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = "There are no students with the entered email"
    // execute
    cohortManager.addCohort("cohortOne", 2)
    cohortManager.addStudentToCohort("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")
    const result = cohortManager.searchByStudentEmail("mosalah@gmail.com")
    // verify
    expect(result).toEqual(expected)
    })

it("search for student by ID", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const expected = new Student("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com", 2)
    // execute
    cohortManager.addCohort("cohortOne", 2)
    cohortManager.addStudentToCohort("cohortOne", "Reece", "James", "reececodes", "reececodes@gmail.com")    
    cohortManager.addStudentToCohort("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")    
    const result = cohortManager.searchByStudentID(2)
    // verify
    expect(result).toEqual(expected)
    })

it("cohorts have fixed capacity at 2 students. Adding students is not possible beyond the 2 limit.", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const studentOne = new Student("cohortOne", "Reece", "James", "reececodes", "reececodes@gmail.com", 1)
    const studentTwo = new Student("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com", 2)
    const numberOfStudents = 2
    // execute
    cohortManager.addCohort("cohortOne", 2)
    const resultOne = cohortManager.addStudentToCohort("cohortOne", "Reece", "James", "reececodes", "reececodes@gmail.com")    
    const resultTwo = cohortManager.addStudentToCohort("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")
    const resultThree = cohortManager.searchByCohortName("cohortOne").studentsArray.length
    // verify
    expect(resultOne).toEqual(studentOne)
    expect(resultTwo).toEqual(studentTwo)
    expect(resultThree).toEqual(numberOfStudents)
    })

it("cohorts have fixed capacity at 2 students. Adding students is not possible beyond the 2 limit.", ()  => {
    // set up
    const cohortManager = new CohortManager()
    const studentOne = new Student("cohortOne", "Reece", "James", "reececodes", "reececodes@gmail.com", 1)
    const studentTwo = new Student("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com", 2)
    const result = false
    const maxNumberOfStudents = 2
    // execute
    cohortManager.addCohort("cohortOne", 2)
    const resultOne = cohortManager.addStudentToCohort("cohortOne", "Reece", "James", "reececodes", "reececodes@gmail.com")    
    const resultTwo = cohortManager.addStudentToCohort("cohortOne", "Ngolo", "Kante", "kantecodes", "kantecodes@gmail.com")
    const resultThree = cohortManager.addStudentToCohort("cohortOne", "Thiago", "Silva", "silvacodes", "silvacodes@gmail.com")
    const resultFour = cohortManager.searchByCohortName("cohortOne").studentsArray.length
    
    // verify
    expect(resultOne).toEqual(studentOne)
    expect(resultTwo).toEqual(studentTwo)
    expect(resultThree).toEqual(result)
    expect(resultFour).toEqual(maxNumberOfStudents)
    })

})