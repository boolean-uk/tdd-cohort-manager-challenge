"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = __importDefault(require("../src/student/Student"));
describe('Student', () => {
    it('stores all variables from constructor', () => {
        const student = new Student_1.default('John', 'Doe', 'jdoe', 'jdoe@mail.com');
        expect(student.firstName).toBe('John');
        expect(student.lastName).toBe('Doe');
        expect(student.githubUsername).toBe('jdoe');
        expect(student.email).toBe('jdoe@mail.com');
    });
});
//# sourceMappingURL=Student.spec.js.map