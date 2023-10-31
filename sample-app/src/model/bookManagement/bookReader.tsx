import Book  from './book'

interface BookReader {
    name: string,
    gender: string,
    age: number,
    books: Array<Book>
}

export default BookReader;
