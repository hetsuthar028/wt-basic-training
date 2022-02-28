import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentService {
    addNewStudent(studentName: string): string{
        return `${studentName.toUpperCase()} added.`
    }

    editStudent(studentName: string): string{
        return `${studentName.toUpperCase()}'s details edited.`;
    }

    deleteStudent(studentName: string): string{
        return `${studentName.toUpperCase()}'s records deleted.`;
    }

    getAllStudents(): string[]{
        return ["Raj Singh", "Mohit Sharma", "Aditi Singh"];
    }
}