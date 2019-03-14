import React, { Component } from "react";
import API from "../../utils/API";
import { Book } from '../../components/Book'
import Jumbotron from "../../components/Jumbotron";
import { H1, H3 } from '../../components/Headings';
import { Container, Row, Col } from "../../components/Grid";
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'


export default class SavedBooks extends Component {
  state = {
    savedBooks: []//stores saved books in state for rendering
  };

  //initial loading of saved books
  componentWillMount() {
    this.loadBooks();
  };

  //function that queries the API server and retrieves saved books
  loadBooks = () => {
    API
      .getBooks()
      .then(results => {
        this.setState({savedBooks: results.data})
      })
  };

  //function that queries API server and deletes books
  deleteBook = id => {
    API
      .deleteBook(id)
      .then(results => {
        //once deleted, they are removed from the state and books are rendered
        let savedBooks = this.state.savedBooks.filter(book => book._id !== id)
        this.setState({savedBooks: savedBooks})
        this.loadBooks();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-10" offset='sm-1'>
            <Jumbotron>
              <H1 className="text-center">Saved NYT Top Seller Books</H1>
              <hr style={{width: '60%'}}/>
            </Jumbotron>
            <Panel>
              <PanelHeading>
                <H3>Saved Books</H3>
              </PanelHeading>
              <PanelBody>
                { this.state.savedBooks.length > 0 ?
                  (this.state.savedBooks.map((book, i) => (
                    <Book
                      key={i}
                      title={book.title}
                      author={book.author}
                      publisher={book.publisher}
                      description={book.description}
                      type='Delete'
                      onClick={() => this.deleteBook(book._id)}
                    />
                    )
                  )) : <H1>You have no saved books.</H1>
                }
              </PanelBody>
            </Panel>
          </Col>
        </Row>
      </Container>
    );
  };
};
