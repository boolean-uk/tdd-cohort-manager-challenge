import { Branches, addBranch } from '../src/branch.js'

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
})
