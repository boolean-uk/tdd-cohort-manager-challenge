import Manager from '../src/Manager';
import Student from '../src/student/Student'
import ManagerUtils from '../src/utils/ManagerUtils';

describe('Student', () => {
    let student: Student;
    const manager = Manager.getInstance();
    

    beforeEach(() => {
        student = new Student(0, 'Jane', 'Doe', 'jdoe', 'jdoe@mail.com');
        manager.reset();
        manager.registerStudent('Jane', 'Doe', 'jdoe', 'jdoe@mail.com')
    })

    it('stores all variables from constructor', () => { 
        expect(student.id).toBe(0);
        expect(student.firstName).toBe('Jane');
        expect(student.lastName).toBe('Doe');
        expect(student.githubUsername).toBe('jdoe');
        expect(student.email).toBe('jdoe@mail.com');
    })

    it('finds student by options object', () => {
        expect(ManagerUtils.findStudent({id: 0})).toEqual(student);
        expect(ManagerUtils.findStudent({firstName: 'Jane'})).toEqual(student);
        expect(ManagerUtils.findStudent({lastName: 'Doe'})).toEqual(student);
        expect(ManagerUtils.findStudent({githubUsername: 'jdoe'})).toEqual(student);
        expect(ManagerUtils.findStudent({email: 'jdoe@mail.com'})).toEqual(student);
    })

    it('finds multiple students with the same name', () => {
        manager.registerStudent('Jane', 'Janett', 'jjanett', 'jjanett@mail.com')

        expect(ManagerUtils.findStudents({firstName: 'Jane'}).length).toBe(2)
    }) 

})