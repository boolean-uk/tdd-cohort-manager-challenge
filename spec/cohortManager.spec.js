const { CohortManager } = require('../src/cohortManager')

describe('Cohort Manager', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  describe('addCohort', () => {
    it('with a cohort name', () => {
      // SETUP
      const expected = 'Cohort 1 created'

      // EXECUTE
      const result = cohortManager.addCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('already exists', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      const expected = 'Cohort 1 already exists'

      // EXECUTE
      const result = cohortManager.addCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('no name given', () => {
      // SETUP
      const expected = 'No cohort name specified'

      // EXECUTE
      const result = cohortManager.addCohort()

      // RESULT
      expect(result).toEqual(expected)
    })
  })

  describe('searchCohort', () => {
    it('by name', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      const expected = 'Cohort 1 found'

      // EXECUTE
      const result = cohortManager.searchCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('does not exist', () => {
      // SETUP
      const expected = 'Cohort 1 does not exist'

      // EXECUTE
      const result = cohortManager.searchCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })
  })

  describe('addStudent', () => {
    it('to a specific cohort', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      const expected = [
        {
          id: 1,
          forename: 'Joe',
          surname: 'Bloggs',
          github: 'joebloggs23',
          email: 'joebloggs23@gmail.com'
        }
      ]

      // EXECUTE
      const result = cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )

      //   RESULT
      expect(result).toEqual(expected)
    })

    it('to non existant cohort', () => {
      // SETUP
      const expected = 'Cohort 1 does not exist'

      // EXECUTE
      const result = cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )

      //   RESULT
      expect(result).toEqual(expected)
    })

    it('maximum capacity reached', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'John',
        'Doe',
        'johndoe123',
        'johndoe123@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Jane',
        'Smith',
        'janesmith456',
        'janesmith456@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'David',
        'Johnson',
        'davidjohnson789',
        'davidjohnson789@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Emily',
        'Williams',
        'emilywilliams101',
        'emilywilliams101@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Michael',
        'Brown',
        'michaelbrown202',
        'michaelbrown202@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Emma',
        'Taylor',
        'emmataylor303',
        'emmataylor303@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Daniel',
        'Anderson',
        'danielanderson404',
        'danielanderson404@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Olivia',
        'Clark',
        'oliviaclark505',
        'oliviaclark505@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Matthew',
        'Lewis',
        'matthewlewis606',
        'matthewlewis606@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Sophia',
        'Hall',
        'sophiahall707',
        'sophiahall707@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Andrew',
        'Young',
        'andrewyoung808',
        'andrewyoung808@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Isabella',
        'Wright',
        'isabellawright909',
        'isabellawright909@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'William',
        'Walker',
        'williamwalker010',
        'williamwalker010@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Mia',
        'Turner',
        'miaturner111',
        'miaturner111@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'James',
        'King',
        'jamesking212',
        'jamesking212@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Charlotte',
        'Green',
        'charlottegreen313',
        'charlottegreen313@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Benjamin',
        'Hill',
        'benjaminhill414',
        'benjaminhill414@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Ava',
        'Baker',
        'avabaker515',
        'avabaker515@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Daniel',
        'Phillips',
        'danielphillips616',
        'danielphillips616@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Sophie',
        'Campbell',
        'sophiecampbell717',
        'sophiecampbell717@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Joseph',
        'Mitchell',
        'josephmitchell818',
        'josephmitchell818@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Grace',
        'Roberts',
        'graceroberts919',
        'graceroberts919@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Henry',
        'Stewart',
        'henrystewart020',
        'henrystewart020@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 1',
        'Amelia',
        'Scott',
        'ameliascott121',
        'ameliascott121@gmail.com'
      )
      const expected = 'Maximum number of students reached for Cohort 1'

      // EXECUTE
      const result = cohortManager.addStudent(
        'Cohort 1',
        'Liam',
        'Miller',
        'liammiller222',
        'liammiller222@gmail.com'
      )

      // RESULT
      expect(result).toEqual(expected)
    })

    it('already exists in a cohort', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      cohortManager.addCohort('Cohort 2')
      cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )
      const expected = 'Joe Bloggs is already in Cohort 1'

      // EXECUTE
      const result = cohortManager.addStudent(
        'Cohort 2',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )

      // RESULT
      expect(result).toEqual(expected)
    })
  })

  describe('searchStudent', () => {
    it('by id', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      cohortManager.addCohort('Cohort 2')
      cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )
      cohortManager.addStudent(
        'Cohort 2',
        'John',
        'Smith',
        'johnsmith06',
        'johnsmith06@gmail.com'
      )
      const expected = {
        id: 2,
        forename: 'John',
        surname: 'Smith',
        github: 'johnsmith06',
        email: 'johnsmith06@gmail.com'
      }

      // EXECUTE
      const result = cohortManager.searchStudent(2)

      // RESULT
      expect(result).toEqual(expected)
    })

    it('does not exist', () => {
      // SETUP
      const expected = 'No student found for id 2'

      // EXECUTE
      const result = cohortManager.searchStudent(2)

      // RESULT
      expect(result).toEqual(expected)
    })
  })

  describe('removeCohort', () => {
    it('by cohort name', () => {
      //  SETUP
      cohortManager.addCohort('Cohort 1')
      const expected = 'Cohort 1 removed'

      // EXECUTE
      const result = cohortManager.removeCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('does not exist', () => {
      //  SETUP
      const expected = 'Cohort 1 does not exist'

      // EXECUTE
      const result = cohortManager.removeCohort('Cohort 1')

      // RESULT
      expect(result).toEqual(expected)
    })
  })

  describe('removeStudent', () => {
    it('from a specific cohort', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )
      const expected = 'Joe Bloggs removed from Cohort 1'

      // EXECUTE
      const result = cohortManager.removeStudent('Cohort 1', 'Joe Bloggs')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('from a cohort that does not exist', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )
      const expected = 'Cohort 2 does not exist'

      // EXECUTE
      const result = cohortManager.removeStudent('Cohort 2', 'Joe Bloggs')

      // RESULT
      expect(result).toEqual(expected)
    })

    it('that does not exist', () => {
      // SETUP
      cohortManager.addCohort('Cohort 1')
      cohortManager.addStudent(
        'Cohort 1',
        'Joe',
        'Bloggs',
        'joebloggs23',
        'joebloggs23@gmail.com'
      )
      const expected = 'John Smith is not a student of Cohort 1'

      // EXECUTE
      const result = cohortManager.removeStudent('Cohort 1', 'John Smith')

      // RESULT
      expect(result).toEqual(expected)
    })
  })
})
