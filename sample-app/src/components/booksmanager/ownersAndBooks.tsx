import React, { useState } from "react";
import { Container, Row, Col, Button, Label } from "reactstrap";
import BookCard from "./common/bookCard";
import { getAllUsers } from "../../redux/reducers/bookReadersManagementReducer";
import { useAppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import ReduxState from "../../model/reduxState";
import { labels, constants } from "../../common/constants";

function OwnersAndBooks() {

  const dispatch = useAppDispatch();
  const [hardCoverOnly, setIsHardCoverOnly] = useState(false);
  
  const storeData  = useSelector(
    (state : ReduxState) => state.bookReaderManagement
  );
  
  const getUsers = async () => {
    setIsHardCoverOnly(false);
    const resultAction = await dispatch(getAllUsers())
    if (getAllUsers.fulfilled.match(resultAction)) {
      console.log("Users fetched successfully");
    } else {
        console.log("Error fetching users");
    }
  }

  //retrieves all books from the store filtering on the gender of the owner and the type of the book
  const getOwnersBooks = (isMaleOwner : boolean, displayHardBooksOnly : boolean) => {
    const gender = isMaleOwner ? constants.male : constants.female
    const owners = storeData.bookReaders.filter(x=> x.gender === gender && x.books?.length > 0);
    const books = owners.flatMap(x=> x.books).sort((a, b)=> a.name > b.name ? 1 : -1);
    if(displayHardBooksOnly) {
        return books.filter(x=> x.type === constants.hardCover);
    } else {
        return books;
    }
  }
  
  const getHardcoverLinkText = (isHardCoverOnly:boolean) => {
    return !!!isHardCoverOnly ? labels.hardCoverOnly : labels.displayAllBooks;
  }

    return(
        <Container>
             { storeData.isLoading ? <Label>Loading...</Label> : (
            <div>
                { storeData.bookReaders.length === 0 ? <Row><Col>{labels.noBooksFound}</Col></Row> : 
                <Row>
                    <Col sm={0} md={2}></Col>
                    {/* use the BookCard component to display the books, passing the title for cleaner passing of texts */}
                    <Col sm={6} md={4}><BookCard title={hardCoverOnly ? labels.maleOwnerHardCoverBooksTitle : labels.maleOwnerTitle} books={ getOwnersBooks(true, hardCoverOnly)} ></BookCard></Col>  
                    <Col sm={6} md={4}><BookCard title={hardCoverOnly ? labels.femaleOwnerHardCoverBooksTitle : labels.femaleOwnerTitle} books={ getOwnersBooks(false, hardCoverOnly)} ></BookCard></Col>
                    <Col sm={0} md={2}></Col>
                </Row>
                }
                <Row>
                    <Col><hr/></Col>
                </Row>
                <Row>
                    <Col sm={6} md={6}></Col>
                    <Col sm={6} md={6}>
                        <Button className="btn btn-link" onClick={ () => setIsHardCoverOnly(!hardCoverOnly)} >{getHardcoverLinkText(hardCoverOnly)}</Button>
                        <Button className="btn btn-primary" value={"Get Books"} onClick={ () => getUsers() } >Get Books</Button>
                    </Col>
                </Row>
            </div>
             )}
        </Container>
    )
}

export default OwnersAndBooks;