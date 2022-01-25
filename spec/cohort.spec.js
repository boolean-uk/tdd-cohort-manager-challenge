const Student = require("../src/student.js");
const Cohort = require("../src/cohort.js");

describe("Student tests", () => {
  let cohort;

  beforeEach(() => {
    cohort = new Cohort();
  });

  it("create a student list", () => {
    // set up
    const expected = [];
    // execute
    const result = cohort.createList();
    // verify
    expect(result).toEqual(expected);
  });
  
  it("Add student to a specific cohort", () => {
    // set up
    const expected = new Student(
      "ID1",
      "Monkey D.",
      "Luffy",
      "@DLuffy",
      "PirateDLuffy@gmail.com"
    );
    // execute
    const result = cohort.addStudent(
      "ID1",
      "Monkey D.",
      "Luffy",
      "@DLuffy",
      "PirateDLuffy@gmail.com"
    );
    // verify
    expect(result).toEqual(expected);
  });
  
  it("Remove student from a specific cohort", () => {
    // set up
    const expected = [
      new Student(
        "ID1",
        "Monkey D.",
        "Luffy",
        "@DLuffy",
        "PirateDLuffy@gmail.com"
      ),
      new Student(
        "ID2",
        "Naruto",
        "Uzumaki",
        "@Naruto",
        "NinjaNaruto@gmail.com"
      ),
    ];
    // execute
    cohort.addStudent(
      "ID1",
      "Monkey D.",
      "Luffy",
      "@DLuffy",
      "PirateDLuffy@gmail.com"
    );
    cohort.addStudent(
      "ID2",
      "Naruto",
      "Uzumaki",
      "@Naruto",
      "NinjaNaruto@gmail.com"
    );
    cohort.addStudent(
      "ID3",
      "Ichigo",
      "Kurosaki",
      "@Ichigo",
      "SoulReaperIchigo@gmail.com"
    );
    expect(cohort.studentList.length).toEqual(3);
    const result = cohort.removeStudent("ID3");
    // verify
    expect(result.length).toEqual(2);
    expect(result[0].studentID).toEqual(expected[0].studentID);
    expect(result[1].studentID).toEqual(expected[1].studentID);
  });
  
  it("Search for a student by ID", () => {
    //setup
    const expected = new Student(
      "ID1",
      "Monkey D.",
      "Luffy",
      "@DLuffy",
      "PirateDLuffy@gmail.com"
    );
    //execute
    cohort.addStudent(
      "ID1",
      "Monkey D.",
      "Luffy",
      "@DLuffy",
      "PirateDLuffy@gmail.com"
    );
    cohort.addStudent(
      "ID2",
      "Naruto",
      "Uzumaki",
      "@Naruto",
      "NinjaNaruto@gmail.com"
    );
    cohort.addStudent(
      "ID3",
      "Ichigo",
      "Kurosaki",
      "@Ichigo",
      "SoulReaperIchigo@gmail.com"
    );
    const result = cohort.searchStudent("ID1");
    //verfity
    expect(result).toEqual(expected);
  });
  it("Return errors if student not found", () => {
    // set up
    const expected = "ERROR: student not found";
    // execute
    cohort.addStudent(
      "ID1",
      "Monkey D.",
      "Luffy",
      "@DLuffy",
      "PirateDLuffy@gmail.com"
    );
    cohort.addStudent(
      "ID2",
      "Naruto",
      "Uzumaki",
      "@Naruto",
      "NinjaNaruto@gmail.com"
    );
    cohort.addStudent(
      "ID3",
      "Ichigo",
      "Kurosaki",
      "@Ichigo",
      "SoulReaperIchigo@gmail.com"
    );
    const result = cohort.searchStudent("ID31");
    // verify
    expect(result).toEqual(expected);
  });
});
