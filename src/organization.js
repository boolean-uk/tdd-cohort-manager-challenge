import Branch from './branch.js'

class Organization {
  constructor(name) {
    this.name = name
    this.studentCounter = 0
    this.branches = []
  }

  addBranch(location) {
    if (!location || typeof location !== 'string') {
      throw new Error('invalid input')
    }

    if (!this.branches.find((branch) => branch.location === location)) {
      const newBranch = new Branch(location)
      this.branches.push(newBranch)
    }
    return this.branches
  }

  registerNewStudent() {
    this.studentCounter += 1
    return this.studentCounter
  }

  getStudentByID(id) {
    let foundStudent
    this.branches.forEach((branch) => {
      if (!foundStudent) {
        return branch.getStudentByID(id)
      }
    })
  }

  getStudentsByName(fullName) {
    const allMatches = []
    this.branches.forEach((branch) => {
      const branchMatches = branch.getStudentsByName(fullName)
      allMatches.push(...branchMatches)
    })

    return allMatches
  }
}

export { Organization }
