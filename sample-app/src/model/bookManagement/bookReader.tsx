import Book  from './book'

interface BookReader {
    name: string,
    gender: string,
    age: Int32Array,
    books: Array<Book>
}

export default BookReader;
