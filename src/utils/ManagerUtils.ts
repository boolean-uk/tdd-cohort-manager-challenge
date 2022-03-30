import Cohort from "../cohort/Cohort";
import CohortSearchOptions from "../cohort/CohortSearchOptions";
import Manager from "../Manager";
import Student from "../student/Student";
import StudentSearchOptions from "../student/StudentSearchOptions";

/**
 * This class contains utility methods for the Manager class.
 * It shouldn't be instantiated
 */


/**
 * Function that finds a single student by the given options
 * @param options object with search options
 * @returns the first student in the array that matches the options
 */
export function findStudent(options: StudentSearchOptions) : Student | undefined {
    return Manager.instance.students.find(student => {
        return (!options.id || student.id === options.id) && 
            (!options.firstName ||  student.firstName === options.firstName ) &&
            (!options.lastName || student.lastName === options.lastName ) &&
            (!options.githubUsername  || student.githubUsername === options.githubUsername ) &&
            (!options.email || student.email === options.email );
    });
}
/**
 * Function that allows to find multiple students with the same credentials
 * @param options object with search options
 * @returns All students that match the options
 */
export function findStudents(options: StudentSearchOptions) : Student[] {
    return Manager.instance.students.filter(student => {
        return (options.id  === undefined || student.id === options.id) && 
            (!options.firstName ||  student.firstName === options.firstName) &&
            (!options.lastName  || student.lastName === options.lastName )
    });
}

/**
 * Function that finds a single cohort by the given options
 * @param options object with search options
 * @returns The cohort that matches the options
 */
export function findCohort(options: CohortSearchOptions) : Cohort | undefined {
    return Manager.instance.cohorts.find(cohort => {
        return (!options.name || cohort.name === options.name );
    });
}


export function findStudentCohort(options: StudentSearchOptions) : Cohort | undefined {
    const student = findStudent(options);
    if(!student) return undefined
    return Manager.instance.cohorts.find(cohort => {
        return cohort.students.includes(student.id);
    });
}


export default { findStudent, findStudents, findCohort, findStudentCohort }