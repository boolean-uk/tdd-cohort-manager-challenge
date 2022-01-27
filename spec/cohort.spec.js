/* eslint-disable new-cap */
/* eslint-disable no-undef */
const cohortManagerClass = require('../src/cohortManagerClass.js')

describe('cohortManager:', () => {
  let cohortManager

  beforeEach(() => {
    cohortManager = new cohortManagerClass()
  })

  it('create a cohort with cohort name', () => {
    // set up
    const expected = [
      {
        cohortName: 'Cohort1',
        students: []
      }
    ]

    // execute
    cohortManager.createCohort('Cohort1')

    const result = cohortManager.cohorts

    // verify
    expect(result).toEqual(expected)
  })

  // it("creating a second cohort (for removing later)", () => {
  //   // set up
  //   const expected = [{
  //       cohortName: "Cohort2",
  //       students: [],
  //       }]

  //   // execute
  //   cohortManager.createCohort("Cohort2")

  //   const result = cohortManager.cohorts

  //   // verify
  //   expect(result).toEqual(expected)
  //   })

  it('Search for a cohort by cohort name', () => {
    // set up
    const expected = { cohortName: 'Cohort1', students: [] }

    // execute
    cohortManager.createCohort('Cohort1')
    cohortManager.createCohort('Cohort2')
    cohortManager.createCohort('Cohort3')
    cohortManager.createCohort('Cohort4')

    const result = cohortManager.searchCohort('Cohort1')

    // verify
    expect(result).toEqual(expected)
  })



 it('Add student to a specific cohort', () => {
    // set up
    

    // execute
    cohortManager.createCohort('Cohort1')
    const student = {
      studentID: 1,
      firstName: "Eden",
      LastName: "Hazard",
      gitHubUsername: "Chelseasgreatest",
      email: "whydidIleave@gmail.com"
    }
    cohortManager.addStudentToCohort('Cohort1', student)

    const expected = [ student ] 
    

    const cohort = cohortManager.searchCohort('Cohort1')

    // verify
    expect(cohort.students).toEqual(expected)   //cohort is the object and student is an array inside the cohort object
  })


 



  it("Remove a cohort by cohort name", () => {
    
    //set up
    const cohort1 = cohortManager.createCohort("Cohort 1")
    cohortManager.createCohort("Cohort 2")
    const cohort3 = cohortManager.createCohort("Cohort 3")

    const result = cohortManager.removeCohort("Cohort 2")

    //execute
    const expected = [
      cohort1, 
      cohort3
    ]

    //verify
    expect(cohortManager.cohorts).toEqual(expected)  
  })





  it("Remove student from a specific cohort", () => {
    
    const student1 = {
      studentID: 1,
      firstName: "Eden",
      LastName: "Hazard",
      gitHubUsername: "Chelseasgreatest",
      email: "whydidIleave@gmail.com"
    }

    const student2 = {
      studentID :2,
      firstName : "Luis",
      lastName : "Suarez",
      githubUsername: "Liverpoolsgreatest",
      email : "whydoIbite@gmail.com"
    }

    cohortManager.createCohort("Cohort 1")
    cohortManager.addStudentToCohort("Cohort 1", student1)
    cohortManager.addStudentToCohort("Cohort 1", student2)

    expect(cohortManager.removeStudentFromCohort("Cohort 1", student1.studentID))

    const expected = [student2]

    const cohort = cohortManager.searchCohort("Cohort 1")

    expect(cohort.students).toEqual(expected)
  })


  it('Return error when cohort not found', () => {
    // set up
    const expected = 'Cohort not found'
  
    // execute
    cohortManager.createCohort('Cohort1')
    cohortManager.createCohort('Cohort2')
    cohortManager.createCohort('Cohort3')
    cohortManager.createCohort('Cohort4')
  
    const result = cohortManager.searchCohort('Cohort5')
  
    // verify
    expect(result).toEqual(expected)
  })
  



  it("Return error when student not found", () => {
    
    const student1 = {
      studentID: 1,
      firstName: "Eden",
      LastName: "Hazard",
      gitHubUsername: "Chelseasgreatest",
      email: "whydidIleave@gmail.com"
    }

    const student2 = {
      studentID :2,
      firstName : "Luis",
      lastName : "Suarez",
      githubUsername: "Liverpoolsgreatest",
      email : "whydoIbite@gmail.com"
    }

    cohortManager.createCohort("Cohort 1")
    cohortManager.addStudentToCohort("Cohort 1", student1)
    cohortManager.addStudentToCohort("Cohort 1", student2)

    const result = cohortManager.removeStudentFromCohort("Cohort 1", 3) 

    const expected = "student not found"

    expect(result).toEqual(expected)
  })




})






