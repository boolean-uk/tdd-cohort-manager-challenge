import Student from '../src/student/Student'

describe('Student', () => {
    it('stores all variables from constructor', () => { 
        const student = new Student('John', 'Doe', 'jdoe', 'jdoe@mail.com');
        expect(student.firstName).toBe('John');
        expect(student.lastName).toBe('Doe');
        expect(student.githubUsername).toBe('jdoe');
        expect(student.email).toBe('jdoe@mail.com');
    })
})