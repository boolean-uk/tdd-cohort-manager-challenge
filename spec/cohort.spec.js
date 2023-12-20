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

    it('name input not String', () => {
      const inputs = [7, { seven: 'seven' }, ['seven']]

      inputs.forEach((input) => {
        const callback = () => new Cohort(input, 16)

        expect(callback).toThrowError('name input must be String')
      })
    })

    it('name input length must be greater than 0', () => {
      const callback = () => new Cohort('', 16)

      expect(callback).toThrowError('name input must not be blank')
    })

    it('id incrementing on each new instance', () => {
      const inputs = ['One', 'Two', 'Three', 'Four']

      inputs.forEach((input, index) => {
        const cohort = new Cohort(input, 16)

        const expected = index + 1

        expect(cohort.id).toEqual(expected)
      })
    })
  })

  describe('setCapacity -', () => {
    let cohort
    beforeEach(() => {
      cohort = new Cohort('Kappa City', 16)
    })

    it('valid number input', () => {
      cohort.setCapacity(32)

      expect(cohort.capacity).toBe(32)
    })
  })
})
