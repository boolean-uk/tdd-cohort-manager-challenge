import { Branch, myOrganization } from '../src/branch.js'
import Cohort from '../src/cohort.js'

describe('Branch', () => {
  describe('creation', () => {
    it('is possible with given string', () => {
      const expected = myOrganization.addBranch('London')
      expect(myOrganization.branches.length).toEqual(1)
      expect(myOrganization.branches[0].location).toEqual('London')
      expect(myOrganization.branches).toEqual(expected)
    })

    it('is not possible without name', () => {
      expect(myOrganization.addBranch).toThrowError('invalid input')
    })
  })

  describe('checking for cohorts', () => {
    let myCohort
    let mySecondCohort
    let myBranch

    beforeEach(() => {
      myBranch = new Branch('UK')
      myCohort = new Cohort('#1')
      mySecondCohort = new Cohort('#2')
      myBranch.addCohort(myCohort)
    })

    it('returns true if cohort exists', () => {
      expect(myBranch.cohortExists(myCohort)).toBeTrue()
    })

    it('returns true if cohort exists', () => {
      expect(myBranch.cohortExists(mySecondCohort)).toBeFalse()
    })
  })

  describe('addition and removal of cohorts', () => {
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

    it('adding a cohort that already exists', () => {
      myBranch.addCohort(myCohort)
      expect(myBranch.cohorts.length).toEqual(1)
      expect(() => myBranch.addCohort(myCohort)).toThrowError('already exists')
      expect(myBranch.cohorts.length).toEqual(1)
    })

    it('removing a cohort', () => {
      myBranch.addCohort(myCohort)
      myBranch.removeCohort(myCohort)
      expect(myBranch.cohorts.length).toEqual(0)
    })

    it('removing a cohort that does not exist', () => {
      expect(() => myBranch.removeCohort(myCohort)).toThrowError()
    })
  })
})
