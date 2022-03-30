import Manager from '../src/Manager';
import Student from '../src/student/Student'
import ManagerUtils from '../src/utils/ManagerUtils';

describe('Student', () => {
    let student: Student;
    const manager = Manager.getInstance();
    

    beforeEach(() => {
        student = new Student(0, 'John', 'Doe', 'jdoe', 'jdoe@mail.com');
        manager.reset();
        manager.registerStudent('John', 'Doe', 'jdoe', 'jdoe@mail.com')
    })

    it('stores all variables from constructor', () => { 
        expect(student.id).toBe(0);
        expect(student.firstName).toBe('John');
        expect(student.lastName).toBe('Doe');
        expect(student.githubUsername).toBe('jdoe');
        expect(student.email).toBe('jdoe@mail.com');
    })

    it('finds student by options object', () => {
        expect(ManagerUtils.findStudent({id: 0})).toEqual(student);
        expect(ManagerUtils.findStudent({firstName: 'John'})).toEqual(student);
        expect(ManagerUtils.findStudent({lastName: 'Doe'})).toEqual(student);
        expect(ManagerUtils.findStudent({githubUsername: 'jdoe'})).toEqual(student);
        expect(ManagerUtils.findStudent({email: 'jdoe@mail.com'})).toEqual(student);
    })

})