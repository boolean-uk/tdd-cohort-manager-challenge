The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Throw errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email.

| Method                         | Input                | Data                                                  | Scenario                                                           | Output                                                                                |
|--------------------------------|----------------------|-------------------------------------------------------|--------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| createCohort(@String)          | cohortName @String   |                                                       | a cohort @Object will be created and added to cohortManager @Array | expect(createCohort(team1)).toEqual(team1: [])                                        |
| searchForCohort(@String)       | cohortName @String   |                                                       | search cohortManager array for the cohort with a matching name     | expect(searchForCohort(team1)).toEqual(team1: [])                                     |
| addStudent(@String, @String)   | cohortName @String,  | StudentID @Int, firstName @String, lastName @String,  | a student will be added to a specified cohort                      | expect(addStudent(team1, Norik)).toEqual(Norik: {})                                   |
|                                | studentName @String  | githubUsername @String, email @String                 |                                                                    |                                                                                       |
| removeCohort(@String)          | cohortName @String   |                                                       | a cohort will be deleted from cohortManager                        | expect(removeCohort(team1)).toEqual(team1: [])                                        |
|                                |                      |                                                       | cohort not found                                                   | expect(removeCohort(team1)).toThrowError('Error: Cohort not found!')                  |
| removeStudent(@String,@String) | cohortName @String,  |                                                       | a student will be removed from a specific cohort                   | expect(removeStudent(Norik)).toEqual(Norik: {})                                       |
|                                | studentName @String  |                                                       |                                                                    |                                                                                       |
|                                |                      |                                                       | student not found in Cohort                                        | expect(removeStudent(Norik)).toThrowError('Error: Student not found in this Cohort!') |
