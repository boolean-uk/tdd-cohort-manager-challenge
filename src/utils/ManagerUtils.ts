import Cohort from "../cohort/Cohort";
import CohortSearchOptions from "../cohort/CohortSearchOptions";
import Manager from "../Manager";
import Student from "../student/Student";
import StudentSearchOptions from "../student/StudentSearchOptions";

export function findStudent(options: StudentSearchOptions) : Student | undefined {
    return Manager.instance.students.find(student => {
        return (options.id !== undefined ? student.id === options.id : true) && 
            (options.firstName !== undefined ?  student.firstName === options.firstName : true) &&
            (options.lastName !== undefined ? student.lastName === options.lastName : true) &&
            (options.githubUsername !== undefined ? student.githubUsername === options.githubUsername : true) &&
            (options.email !== undefined ? student.email === options.email : true);
    });
}

export function findCohort(options: CohortSearchOptions) : Cohort | undefined {
    return Manager.instance.cohorts.find(cohort => {
        return (options.name !== undefined ? cohort.name === options.name : true);
    });
}

export default { findStudent, findCohort }