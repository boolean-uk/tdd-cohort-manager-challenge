const CohortManager = require("../src/cohort_manager")

describe("cohort manager", () => {

    //TEST 1
  it("create a cohort with a cohort name", () => {
    // setup
    const manager = new CohortManager()
    const newCohort = "Cohort1"
    // execute
    const result = manager.createCohort(newCohort)
    // verify
    expect(result).toEqual(newCohort)
  })

    //TEST 2
  it("creates multiple cohorts with a cohort name", () => {
    // setup
    const manager = new CohortManager()
    const newCohort1 = "Cohort1"
    const newCohort2 = "Cohort2"
    const newCohort3 = "Cohort3"
    // execute
    manager.createCohort(newCohort1)
    manager.createCohort(newCohort2)
    manager.createCohort(newCohort3)
    // verify
    expect(manager.cohortList.length).toEqual(3)
  })

  //TEST 3
  it("search for cohort by cohort name", () => {
    // setup
    const manager = new CohortManager()
    const newCohort1 = "Cohort1"
    const newCohort2 = "Cohort2"
    const newCohort3 = "Cohort3"
    // execute
    manager.createCohort(newCohort1)
    manager.createCohort(newCohort2)
    manager.createCohort(newCohort3)
    result = manager.searchByCohortName("Cohort3")
    // verify
    expect(result).toEqual(newCohort3)
  })

  //TEST 4
  it("search for cohort by name - COHORT IS NOT ON THE LIST", () => {
    // setup
    const manager = new CohortManager()
    const newCohort1 = "Cohort1"
    const newCohort2 = "Cohort2"
    const newCohort3 = "Cohort3"
    const errorMessage = "COHORT NOT FOUND"
    // execute
    manager.createCohort(newCohort1)
    manager.createCohort(newCohort2)
    manager.createCohort(newCohort3)
    result = manager.searchByCohortName("Cohort Non-Existent")
    // verify
    expect(result).toEqual(errorMessage)
  })

  //TEST 5
  it("add student to a specific cohort", () => {
    // setup
    const manager = new CohortManager()
    const newCohort1 = "Cohort1"
    const newCohort2 = "Cohort2"
    const newCohort3 = "Cohort3"
    const updatedList = [ 'Cohort1', 'Cohort2', { firstName: 'David', lastName: 'Czuczor' } ]
    // execute
    manager.createCohort(newCohort1)
    manager.createCohort(newCohort2)
    manager.createCohort(newCohort3)
    result = manager.addStudent("Cohort3", "David", "Czuczor")
    // verify
    expect(result).toEqual(updatedList)
  })

  //TEST 6
  it("remove a cohort by cohort name", () => {
    // setup
    const manager = new CohortManager()
    const newCohort1 = "Cohort1"
    const newCohort2 = "Cohort2"
    const newCohort3 = "Cohort3"
    const updatedList = ["Cohort1", "Cohort3"]
    // execute
    manager.createCohort(newCohort1)
    manager.createCohort(newCohort2)
    manager.createCohort(newCohort3)
    result = manager.removeCohort("Cohort2")
    // verify
    expect(result).toEqual(updatedList)
  })

  //TEST 7
  it("remove a cohort by name - COHORT IS NOT VALID", () => {
    // setup
    const manager = new CohortManager()
    const newCohort1 = "Cohort1"
    const newCohort2 = "Cohort2"
    const newCohort3 = "Cohort3"
    const errorMessage = "NOT A VALID COHORT NAME"
    // execute
    manager.createCohort(newCohort1)
    manager.createCohort(newCohort2)
    manager.createCohort(newCohort3)
    result = manager.removeCohort("Non-Existent Cohort")
    // verify
    expect(result).toEqual(errorMessage)
  })

  // //TEST 8
  // fit("remove a student from a specific cohort", () => {
  //   // setup
  //   const manager = new CohortManager()
  //   const newCohort1 = "Cohort1"
  //   const newCohort2 = "Cohort2"
  //   const newCohort3 = "Cohort3"
  //   const updatedCohort = "i dont knoooooow"
  //   // execute
  //   manager.createCohort(newCohort1)
  //   manager.createCohort(newCohort2)
  //   manager.createCohort(newCohort3)
  //   manager.addStudent("Cohort1", "David", "Czuczor")
  //   manager.addStudent("Cohort2", "Mike", "Wazowski")
  //   manager.addStudent("Cohort2", "Mr.Removed", "Student")
  //   manager.addStudent("Cohort2", "Mrs.Removed2", "Student2")
  //   manager.addStudent("Cohort3", "James", "Sulley")
  //   result = manager.removeStudent("Cohort2", "Mr.Removed", "Student")
  //   // verify
  //   expect(result).toEqual(updatedCohort)
  // })



})