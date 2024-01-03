import { Organization } from '../src/organization.js'
import Branch from '../src/branch.js'

describe('Branch', () => {
  let myOrganization
  beforeAll(() => {
    myOrganization = new Organization('Boolean')
  })

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
    let myBranch

    beforeEach(() => {
      myBranch = new Branch('UK')
      myBranch.addCohort('#1')
    })

    it('returns true if cohort exists', () => {
      expect(myBranch.cohortExists('#1')).toBeTrue()
    })

    it('returns false if cohort does not exist', () => {
      expect(myBranch.cohortExists('#2')).toBeFalse()
    })
  })

  describe('search for cohort by name', () => {
    let myBranch

    beforeEach(() => {
      myBranch = new Branch('UK')
      myBranch.addCohort('#1')
    })

    it('works if cohort exists', () => {
      const foundCohort = myBranch.getCohortByName('#1')
      expect(foundCohort).toBeDefined()
    })

    it('does not if cohort does not exist', () => {
      expect(() => myBranch.getCohortByName('#2')).toThrowError('cohort of name #2 does not exist')
    })
  })

  describe('cohorts', () => {
    let myBranch
    beforeEach(() => {
      myBranch = new Branch('UK')
      myBranch.addCohort('#1')
    })

    describe('addition', () => {
      it('works if everything is fine', () => {
        expect(myBranch.cohorts.length).toEqual(1)
        expect(myBranch.cohorts[0].name).toEqual('#1')
      })

      it('of possible duplicates fails', () => {
        expect(myBranch.cohorts.length).toEqual(1)
        expect(() => myBranch.addCohort('#1')).toThrowError('already exists')
        expect(myBranch.cohorts.length).toEqual(1)
      })
    })

    describe('removal', () => {
      it('works if cohort exists', () => {
        myBranch.removeCohort('#1')
        expect(myBranch.cohorts.length).toEqual(0)
      })

      it('does not work if cohort does not exist', () => {
        expect(() => myBranch.removeCohort('#2')).toThrowError()
      })
    })
  })
})
