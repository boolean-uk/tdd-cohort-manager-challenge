import Student from '../src/student/Student'

describe('Student', () => {
    let student: Student;
    beforeEach(() => {
        student = new Student('John', 'Doe', 'jdoe', 'jdoe@mail.com');
    })
    it('stores all variables from constructor', () => { 
       
        expect(student.firstName).toBe('John');
        expect(student.lastName).toBe('Doe');
        expect(student.githubUsername).toBe('jdoe');
        expect(student.email).toBe('jdoe@mail.com');
    })

})