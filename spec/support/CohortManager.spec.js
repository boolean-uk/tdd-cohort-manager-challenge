import Cohort from "../.././src/CohortManager.js"

describe ("Cohort Manager", () => {
    let CohortManager

    beforeEach(() => {
        CohortManager = new Cohort()
    })

    it("Create a cohort with a cohort name", () => {
        CohortManager.createCohortName("Cohort11")
        const result = CohortManager.cohortList[0].name
        expect(result).toEqual("Cohort11")

    })
    
})