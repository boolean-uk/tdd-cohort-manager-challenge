export default class Cohort {
  constructor(name, capacity = 24) {
    if (typeof capacity !== 'number') {
      throw new Error('capacity input must be Number')
    }

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

  static resetId() {
    this.lastId = 0
  }
}
