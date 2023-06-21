const CohortDetainment = require('../src/cohortManager.js')

describe('CohortDetainment', () => {
  let cd
  beforeEach(() => {
    cd = new CohortDetainment()
  })

  describe('createCohort()', () => {
    it('Expects a Cohort to be created', () => {
      const expected = { team1: [] }
      expect(cd.createCohort('team1')).toEqual(expected)
    })
    it('Expect an attempt to add a cohort where the name exists to return an error message', () => {
      const expected = 'Cohort already Exists!'
      cd.createCohort('team1')
      expect(() => cd.createCohort('team1')).toThrowError(expected)
    })
    it('Expect an error message to be throw if chosen name is an empty string', () => {
      const expected = 'Empty string is not valid!'
      expect(() => cd.createCohort('')).toThrowError(expected)
    })
  })

  describe('searchForCohort()', () => {
    it('Expects to find a specific Cohort by name', () => {
      const expected = { team1: [] }
      cd.createCohort('team1')
      expect(cd.searchForCohort('team1')).toEqual(expected)
    })
  })
  describe('addStudent()', () => {
    it('Expects a student to be added to a specified cohort', () => {
      const expected = {
        StudentID: 1,
        firstName: 'Noro',
        lastName: 'Jan',
        githubUsername: 'NoroAxper',
        email: 'classified'
      }
      cd.createCohort('team1')
      expect(cd.addStudent('team1', 'Noro', 'Jan')).toEqual(expected)
    })
    it('Expect an attempt to add 25th student in a cohort to throw an error', () => {
      const expected = 'Cohort capacity of 24 reached!'
      cd.createCohort('team1')
      for (let i = 0; i < 24; i++) {
        cd.addStudent('team1', `Noro${i}`, `Jan${i}`)
      }
      expect(() => cd.addStudent('team1', 'Noro25', 'Jan25')).toThrowError(
        expected
      )
    })
    it('Expect error message to be throw if student already exists in any of the cohorts', () => {
      const expected =
        'Student already Exists either in this or another cohort!'
      cd.createCohort('team1')
      cd.addStudent('team1', 'Noro', 'Jan')
      expect(() => cd.addStudent('team1', 'Noro', 'Jan')).toThrowError(expected)
    })
  })

  describe('removeCohort()', () => {
    it('Expects specified cohort to be deleted from the cohortManager', () => {
      const expected = { team1: [] }
      cd.createCohort('team1')
      expect(cd.removeCohort('team1')).toEqual(expected)
    })
    it('Expects error to be thrown if cohort not found', () => {
      const expected = 'Cohort Not Found!'
      expect(() => cd.removeCohort('team1')).toThrowError(expected)
    })
  })

  describe('removeStudent()', () => {
    it('Expects specified student to be removed from specified cohort', () => {
      const expected = {
        StudentID: 1,
        firstName: 'Noro',
        lastName: 'Jan',
        githubUsername: 'NoroAxper',
        email: 'classified'
      }
      cd.createCohort('team1')
      cd.addStudent('team1', 'Noro', 'Jan')
      expect(cd.removeStudent('team1', 'Noro', 'Jan')).toEqual(expected)
    })
    it('Expects error to be thrown if cohort not found', () => {
      const expected = 'Student Not Found!'
      cd.createCohort('team1')
      expect(() => cd.removeStudent('team1')).toThrowError(expected)
    })
  })

  describe('searchForStudent()', () => {
    it('Expects student with matching ID to be found', () => {
      const expected = {
        StudentID: 1,
        firstName: 'Noro',
        lastName: 'Jan',
        githubUsername: 'NoroAxper',
        email: 'classified'
      }
      cd.createCohort('team1')
      cd.addStudent('team1', 'Noro', 'Jan')
      expect(cd.searchForStudent(1)).toEqual(expected)
    })
  })

  describe('allStudentsNamed()', () => {
    it("Expect an array with all students who's first and last name match the search", () => {
      const expected = [
        {
          StudentID: 1,
          firstName: 'Noro',
          lastName: 'Jan',
          githubUsername: 'NoroAxper',
          email: 'classified'
        },
        {
          StudentID: 2,
          firstName: 'Bill',
          lastName: 'Jan',
          githubUsername: 'NoroAxper',
          email: 'classified'
        }
      ]
      cd.createCohort('team1')
      cd.addStudent('team1', 'Noro', 'Jan')
      cd.addStudent('team1', 'Bill', 'Jan')
      expect(cd.allStudentsNamed('Jan')).toEqual(expected)
    })
  })
})
