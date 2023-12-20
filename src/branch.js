const Branches = []

const addBranch = (location) => {
  if (!Branches.find(branch => branch.location === location)) {
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
