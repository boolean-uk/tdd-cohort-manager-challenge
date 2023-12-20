import Cohort from '../src/cohort.js'

describe('Cohort:', () => {
  beforeEach(() => {
    Cohort.resetId()
  })

  describe('new instance -', () => {
    it('valid name input & capacity input', () => {
      const cohort = new Cohort('Potato', 16)

      const expected = {
        name: 'Potato',
        cohortId: 1,
        capacity: 16
      }

      expect(cohort.details).toEqual(expected)
    })

    it('valid name input & no capacity input', () => {
      const cohort = new Cohort('Potato')

      const expected = {
        name: 'Potato',
        cohortId: 1,
        capacity: 24
      }

      expect(cohort.details).toEqual(expected)
    })

    it('valid name input & capacity input not Number', () => {
      const inputs = ['seven', '7', { 1: 1 }, [1]]

      inputs.forEach((input) => {
        const callback = () => new Cohort('Potato', input)

        expect(callback).toThrowError('capacity input must be Number')
      })
    })
  })
})
