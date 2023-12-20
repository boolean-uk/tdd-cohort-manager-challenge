import { Branch, Branches, addBranch } from '../src/branch.js'
import Cohort from '../src/cohort.js'

describe('Branch', () => {
  describe('creation', () => {
    it('is possible with given string', () => {
      const expected = addBranch('London')
      expect(Branches.length).toEqual(1)
      expect(Branches[0].location).toEqual('London')
      expect(Branches).toEqual(expected)
    })

    it('is not possible without name', () => {
      expect(addBranch).toThrowError('invalid input')
    })
  })

  describe(' addition and removal of cohorts', () => {
    let myCohort
    let myBranch

    beforeEach(() => {
      myCohort = new Cohort('#2')
      myBranch = new Branch('UK')
    })

    it('adding a cohort', () => {
      myBranch.addCohort(myCohort)
      expect(myBranch.cohorts.length).toEqual(1)
      expect(myBranch.cohorts[0]).toEqual(myCohort)
    })

    it('removing a cohort', () => {
      myBranch.addCohort(myCohort)
      myBranch.removeCohort(myCohort)
      expect(myBranch.cohorts.length).toEqual(0)
    })
  })
})
