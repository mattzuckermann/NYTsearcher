import { Container, Row, Col } from "../../components/Grid";

import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import { RecommendationBook } from "../../components/Recommendations";

export default class Recommendation extends Component {

    state = {
        savedBooks: []
        //recommendedForYou : []
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
                this.setState({ savedBooks: results.data })
            })
    };



    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="sm-10" offset='sm-1'>
                        <Jumbotron>
                            <H1 className="text-center">Make A Recommendation</H1>
                            <hr style={{ width: '60%' }} />
                        </Jumbotron>
                        <Panel>
                            <PanelHeading>
                                <H3>Make A Recommendation</H3>
                            </PanelHeading>
                            <PanelBody>
                                {this.state.savedBooks.length > 0 ?
                                    (this.state.savedBooks.map((book, i) => (
                                        <div>
                                            <RecommendationBook
                                                key={i}
                                                title={book.title}
                                                url={book.url}
                                                summary={book.summary}
                                                date={book.date}
                                                type='Recommend'

                                            />

                                        </div>
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


