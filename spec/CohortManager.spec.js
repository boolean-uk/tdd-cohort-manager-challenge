const Cohortmanager = require("../src/Cohortmanager.js");

describe("Cohortmanager", () => {
    let cohortmanager
  
    beforeEach(() => {
        cohortmanager = new Cohortmanager()
    })
  
    it("created and without any input", () => {
      // set up
      const expected = {
        studentList: [],
        cohortList: []
      }

      expect(cohortmanager.studentList).toEqual([])
      expect(cohortmanager.cohortList).toEqual([]);
    })
})