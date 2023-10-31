import Book from '../../../model/bookManagement/book';
import React from 'react';
import {Card, CardHeader, CardBody, CardText } from 'reactstrap'

function BookCard ({title, books} : {title: string, books: Array<Book>}) {
    return ( 
        <Card className='mt-4'>
            <CardHeader className='blue-header'>{title}</CardHeader>
            <CardBody>
                { books?.map((item,key) => {
                    return (
                        <div key={key}>
                            <CardText>{item.name}</CardText>
                        </div>
                    );
                })}
                <CardText></CardText>
            </CardBody>
        </Card>
            
    )
}

export default BookCard;