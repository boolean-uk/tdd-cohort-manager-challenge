domain Model

| object        | properties                                                 | method           | input                                              | Output                                     |
| ------------- | ---------------------------------------------------------- | ---------------- | -------------------------------------------------- | ------------------------------------------ |
| cohort        | name @string, studentList @array                           | addStudent()     | cohort @obj, student @obj (inst.of.cohort/student) | (updated) studentList @array, or throw err |
|               |                                                            | removeStudent()  | cohort @obj, student @obj (inst.of.cohort/student) | (updated) studentList @array, or throw err |
|               |                                                            |                  |                                                    |                                            |
| cohortManager | cohortList @array                                          | searchByCohort() | cohort @obj (inst.of.cohort)                       | newCohortList @array                       |
|               |                                                            | removeCohort()   | cohort @obj (inst.of.cohort)                       | newCohortList @array                       |
|               |                                                            | createCohort()   | name @string                                       | cohort (inst.of.cohort)                    |
|               |                                                            |                  |                                                    |                                            |
| student       | studentID, firstName, lastName, gitUsername, email @string |                  |                                                    |                                            |
