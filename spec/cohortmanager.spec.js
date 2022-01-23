const CohortManager= require("../src/cohortmanager")
const Cohort = require("../src/cohort")
describe("cohortManager", () => {
    let manager
  
    beforeEach(() => {
        manager = new CohortManager();
    });

    //Test 1
    it("create a new cohort", () => {
        const expected = ['CohortOtter'] 
      
        manager.createCohort("CohortOtter")
        let create = manager.cohorts
        expect(create).toEqual(expected)
    })
})