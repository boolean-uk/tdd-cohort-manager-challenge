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
})