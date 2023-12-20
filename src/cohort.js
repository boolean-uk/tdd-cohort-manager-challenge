// DELETE THIS FILE AFTER YOU HAVE MADE YOUR FIRST COMMIT WHICH CONTAINS YOUR OWN TESTS AND CODE
export default class Cohort {
  constructor(name, capacity) {
    this.name = name
    this.capacity = capacity
    this.id = Cohort.nextId()
  }

  get details() {
    return {
      cohortId: this.id,
      name: this.name,
      capacity: this.capacity
    }
  }

  static nextId() {
    if (!this.lastId) this.lastId = 0
    return ++this.lastId
  }
}
