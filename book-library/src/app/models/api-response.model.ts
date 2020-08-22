import { Book } from './book.model';

export class ApiResponse {
    status: number;
    message: string;
    result: Array<Book>;
}
