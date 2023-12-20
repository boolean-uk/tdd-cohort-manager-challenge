import { Branch, Branches, addBranch } from '../src/branch.js'

describe('Branch', () => {
  it('creation is possible', () => {
    const expected = addBranch("London")
    expect(Branches.length).toEqual(1)
    expect(Branches[0].location).toEqual('London')
    expect(Branches).toEqual(expected)
  })
})
