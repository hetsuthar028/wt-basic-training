import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentService {
    addNewStudent(): string{
        return `John Doe added.`
    }

    editStudent(): string{
        return `John Doe's details edited.`;
    }

    deleteStudent(): string{
        return `John Doe's records deleted.`;
    }
    
    getAllStudents(): string[]{
        return ["Raj Singh", "Mohit Sharma", "Aditi Singh"];
    }

    // addNewStudent(studentName: string): string{
    //     return `${studentName.toUpperCase()} added.`
    // }

    // editStudent(studentName: string): string{
    //     return `${studentName.toUpperCase()}'s details edited.`;
    // }

    // deleteStudent(studentName: string): string{
    //     return `${studentName.toUpperCase()}'s records deleted.`;
    // }    
}