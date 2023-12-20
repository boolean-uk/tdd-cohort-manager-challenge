import { Branch } from "../src/branch.js"
import Cohort from "../src/cohort.js"

describe('cohort', () =>  {
  beforeAll(() => {
    const myBranch = new Branch("UK")
  })

  describe('creation', () => {
    it('is possible with valid name input', () => {
      const myCohort = new Cohort("#11")
      expect(myCohort.name).toEqual("#11")
      expect(myCohort.students).toEqual([])
    })
  })
})