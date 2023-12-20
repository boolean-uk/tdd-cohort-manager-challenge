import { Branch } from "../src/branch.js"

describe('cohort', () =>  {
  beforeAll(() => {
    const myBranch = new Branch("UK")
  })

  describe('creation', () => {
    it('is possible with valid name input', () => {
      const myCohort = new Cohort("#11")
    })
  })
})