The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

- Search for student by student ID
- Cohorts have fixed capacity at 24 students. Adding students is not possible beyond the 24 limit.
- Cohorts can't have the same name, and can't exist without a name
- The same student can't exist in multiple cohorts.
- A student can't be removed from a cohort if it wasn't present in the first place.
- Search for students by name (first and last) and return all matching results

| Method                                | Input                               | Data                                                  | Scenario                                                           | Output                                                                                                               |
|---------------------------------------|-------------------------------------|-------------------------------------------------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| createCohort(@String)                 | cohortName @String                  |                                                       | a cohort @Object will be created and added to cohortManager @Array | expect(createCohort(team1)).toEqual(team1: [])                                                                       |
|                                       |                                     |                                                       | tried to add a cohort where the name already exists                | expect(createCohort(team1)).toThrowError('Error: Cohort already Exists')                                             |
|                                       |                                     |                                                       | tried to add empty string as a name                                | expect(createCohort('')).toThrowError('Error: Empty string is not valid')                                            |
| searchForCohort(@String)              | cohortName @String                  |                                                       | search cohortManager array for the cohort with a matching name     | expect(searchForCohort(team1)).toEqual(team1: [])                                                                    |
| addStudent(@String, @String, @String) | cohortName @String,                 | StudentID @Int, firstName @String, lastName @String,  | a student will be added to a specified cohort                      | expect(addStudent(team1, Norik, Jan)).toEqual(team1: [Norik])                                                        |
|                                       | studentName @String                 | githubUsername @String, email @String                 |                                                                    |                                                                                                                      |
|                                       |                                     |                                                       | attempt to add 25th student                                        | expect(addStudent(team1, Norik)).toThrowError('Error: Cohort capacity of 24 reached')                                |
|                                       |                                     |                                                       | attempted to add student that exists elsewhere                     | expect(addStudent(team1, Norik, Jan)).toThrowError('Error: Student already Exists either in this or another cohort') |
| removeCohort(@String)                 | cohortName @String                  |                                                       | a cohort will be deleted from cohortManager                        | expect(removeCohort(team1)).toEqual(team1: [])                                                                       |
|                                       |                                     |                                                       | cohort not found                                                   | expect(removeCohort(team1)).toThrowError('Error: Cohort not found!')                                                 |
| removeStudent(@String,@String)        | cohortName @String,                 |                                                       | a student will be removed from a specific cohort                   | expect(removeStudent(Norik)).toEqual(Norik)                                                                          |
|                                       | studentName @String                 |                                                       |                                                                    |                                                                                                                      |
|                                       |                                     |                                                       | student not found in Cohort                                        | expect(removeStudent(Norik)).toThrowError('Error: Student not found in this Cohort!')                                |
| searchForStudent(@Int)                | id @Int                             |                                                       | a student with matching ID will be found                           | expect(searchForStudent(@Int)).toEqual(Student @Object)                                                              |
| allStudentsNamed(@String, @String)    | firstName @String, lastName @String |                                                       | a couple of students found from different cohorts                  | expect(allStudentsNamed(firstName, lastName)).toEqual([{Student1}, {Student2}])                                      |
