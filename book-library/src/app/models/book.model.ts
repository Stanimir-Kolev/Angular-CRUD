export class Book {
    id: number;
    title: string;
    authors: Array<Author>;
    publishYear: number;
    genres: Array<Genre>;
}

export class Author {
    name: string;
}

export class Genre {
    name: string;
}
