const Branches = []

const addBranch = (location) => {
  if (!location || typeof location !== 'string') {
    throw new Error('invalid input')
  }

  if (!Branches.find((branch) => branch.location === location)) {
    const newBranch = new Branch(location)
    Branches.push(newBranch)
  }
  return Branches
}

class Branch {
  constructor(location) {
    this.location = location
  }
}

export { Branches, addBranch, Branch }
