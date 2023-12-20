class Manager {
  constructor() {
    this.list = []
  }

  setList(cohort) {
    this.list.push(cohort)
    return this.list
  }
}
export { Manager }
