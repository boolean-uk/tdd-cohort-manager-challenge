const Cohorts = require('../src/cohort.js')
describe('CoHORTS', () => {
  let cohortLi

  beforeEach(() => {
    cohortLi = new Cohorts()
  })
  describe('addCohort', () => {
    it('Add new cohort', () => {
      const expected = [{ 'Cohort 1': [] }]

      const result = cohortLi.addCohort('Cohort 1')

      expect(result).toEqual(expected)
    })
    it('Trying to create new Cohort, but name already exist', () => {
      const expected = 'Error: The name already exists'
      cohortLi.addCohort('Cohort 1')
      expect(() => cohortLi.addCohort('Cohort 1')).toThrowError(expected)
    })
    it('Name is empty string', () => {
      const expected = 'Error: Please provide a Cohort name'
      expect(() => cohortLi.addCohort('')).toThrowError(expected)
    })
    it('Cohort list is empty', () => {
      const expected = []
      const result = cohortLi.cohortList
      expect(result).toEqual(expected)
    })
  })
  describe('searchByName', () => {
    it('Search cohort by name', () => {
      const expected = { 'Cohort 1': [] }

      cohortLi.addCohort('Cohort 1')
      const result = cohortLi.searchByName('Cohort 1')
      expect(result).toEqual(expected)
    })
    it('Search for a cohort by its name, but name does not exist', () => {
      const expected = 'Error: Cohort name does not exist'

      cohortLi.addCohort('Cohort 2')
      expect(() => cohortLi.searchByName('Cohort 1')).toThrowError(expected)
    })
    it('Search for a cohort by its name, but Cohort list is empty', () => {
      const expected = 'ERROR: Cohort List is empty'
      expect(() => cohortLi.searchByName('Cohort 1')).toThrowError(expected)
    })
  })
  describe('removeByName', () => {
    it('Remove the cohort by name', () => {
      const expected = []

      cohortLi.addCohort('Cohort 1')
      const result = cohortLi.removeByName('Cohort 1')
      expect(result).toEqual(expected)
    })
    it('trying to remove the cohort but Cohort name does not exist', () => {
      const expected = 'Error: Cohort name does not exist'
      cohortLi.addCohort('Cohort 1')
      expect(() => cohortLi.removeByName('Cohort 4')).toThrowError(expected)
    })
    it('Trying to remove the cohort but Cohort list is empty', () => {
      const expected = 'ERROR: Cohort List is empty'
      expect(() => cohortLi.removeByName('Cohort 4')).toThrowError(expected)
    })
  })
  describe('addStudentToCohort', () => {
    it('Add a student to a specific cohort', () => {
      const expected = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Cena',
          gitHub: 'JohnCena',
          email: 'john@cena.com'
        }
      ]

      cohortLi.addCohort('Cohort 1')
      expect(
        cohortLi.addStudentToCohort(
          'Cohort 1',
          'John',
          'Cena',
          'JohnCena',
          'john@cena.com'
        )
      ).toEqual(expected)
    })
    it('Cohort student limit is 24', () => {
      cohortLi.addCohort('Cohort 1')
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John1',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John2',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John3',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John4',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John5',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John6',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John7',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John8',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John9',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John10',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John11',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John12',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John13',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John14',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John15',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John16',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John17',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John18',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John19',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John20',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John21',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John22',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John23',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John24',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      expect(() => {
        cohortLi.addStudentToCohort('Cohort 1', 'Johnx', 'Cena')
      }).toThrowError('Error: Cohort reached 24 students capacity')
    })
    it('Expect error message to be throw if student already exists in any of the cohorts', () => {
      cohortLi.addCohort('Cohort 1')
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'Max',
        'Verstappen',
        'maxie69',
        'max@max.com'
      )
      expect(() =>
        cohortLi.addStudentToCohort(
          'Cohort 1',
          'Max',
          'Verstappen',
          'maxie69',
          'max@max.com'
        )
      ).toThrowError('Error: Student already exists in another Cohort!')
    })
  })
  describe('removeStudentByName', () => {
    it('Remove a student from the cohort by cohortName and firstName and lastName', () => {
      const expected = {
        id: 1,
        firstName: 'John',
        lastName: 'Cena',
        gitHub: 'JohnCena',
        email: 'John@cena.com'
      }
      cohortLi.addCohort('Cohort 1')
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      expect(cohortLi.removeStudentByName('Cohort 1', 'John', 'Cena')).toEqual(
        expected
      )
    })
    it('Student does not exist', () => {
      cohortLi.addCohort('Cohort 1')
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      expect(() => {
        cohortLi.removeStudentByName('Cohort 1', 'Johnx', 'Cena')
      }).toThrowError('Error: Student does not exist!')
    })
    it('Cohort does not exist', () => {
      cohortLi.addCohort('Cohort 1')
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      expect(() => {
        cohortLi.removeStudentByName('Cohort 2', 'John', 'Cena')
      }).toThrowError('Error: Cohort does not exist!')
    })
  })
  describe('searchStudentById', () => {
    it('Search for a student by id', () => {
      const expected = {
        id: 1,
        firstName: 'John',
        lastName: 'Cena',
        gitHub: 'JohnCena',
        email: 'John@cena.com'
      }
      cohortLi.addCohort('Cohort 1')
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      expect(cohortLi.searchStudentById(1)).toEqual(expected)
    })
    it('Student Id does not exist', () => {
      cohortLi.addCohort('Cohort 1')
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      expect(() => {
        cohortLi.searchStudentById(2)
      }).toThrowError('Error: Id does not exist')
    })
  })
  describe('searchStudentByName', () => {
    it('Search for a student by its firstName and lastName', () => {
      const expected = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Cena',
          gitHub: 'JohnCena',
          email: 'John@cena.com'
        },
        {
          id: 2,
          firstName: 'John',
          lastName: 'Cena',
          gitHub: 'JohnCena',
          email: 'John@cena.com'
        }
      ]
      cohortLi.addCohort('Cohort 1')
      cohortLi.addCohort('Cohort 2')
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 2',
        'John',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      expect(cohortLi.searchStudentByName('John', 'Cena')).toEqual(expected)
    })
    it('No student matches this firstName and lastName', () => {
      cohortLi.addCohort('Cohort 1')
      cohortLi.addCohort('Cohort 2')
      cohortLi.addStudentToCohort(
        'Cohort 1',
        'John',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      cohortLi.addStudentToCohort(
        'Cohort 2',
        'John',
        'Cena',
        'JohnCena',
        'John@cena.com'
      )
      expect(() => {
        cohortLi.searchStudentByName('Bob', 'Burger')
      }).toThrowError('Error: No matching students found')
    })
  })
})
