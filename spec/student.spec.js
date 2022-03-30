const Student = require('../src/student.js')

describe('Student class', () => {
    beforeEach( () => {
        student = new Student(1, 'John', 'Doe', 'johnnycode', 'johndoe@email.com')
    })

    it('should store the correct id', () => {
        expect(student.id).toEqual(1)
    })

    it('should store the correct first name', () => {
        expect(student.firstName).toEqual('John')
    })

    it('should store the correct last name', () => {
        expect(student.lastName).toEqual('Doe')
    })

    it('should store the correct github username', () => {
        expect(student.gitHub).toEqual('johnnycode')
    })

    it('should store the correct email', () => {
        expect(student.email).toEqual('johndoe@email.com')
    })
})