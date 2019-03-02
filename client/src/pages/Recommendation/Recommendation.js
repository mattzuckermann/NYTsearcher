import React, { Component } from "react";
import API from "../../utils/API";
import { Article } from '../../components/Article'
import Jumbotron from "../../components/Jumbotron";
import { H1, H3 } from '../../components/Headings';
import { Container, Row, Col } from "../../components/Grid";
import { Panel, PanelHeading, PanelBody } from '../../components/Panel'


export default class SavedArticles extends Component {
    state = {
        savedArticles: []//stores saved articles in state for rendering
    };

    //initial loading of saved articles
    componentWillMount() {
        this.loadArticles();
    };

    //function that queries the API server and retrieves saved articles
    loadArticles = () => {
        API
            .getArticles()
            .then(results => {
                this.setState({ savedArticles: results.data })
            })
    };

    //function that queries API server and deletes articles
    recommendArticle = id => {
        API.getUser("1").then(user1 => {
            API.getUser("2").then(user2 => {
                var message = "this is a test message";
                console.log("user1 : " + user1.data);
                console.log("user2 ; " + user2.data);
                API.createRecommendation({ sender: user1.data, receiver: user2.data, message: message }).then(results => {
                    console.log(results);
                }).catch(err => console.log("message delivery failed"));
            }).catch(err => console.log("receiver does not exist"));
        }).catch(err => console.log("sender does not exist"));
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
                                {this.state.savedArticles.length > 0 ?
                                    (this.state.savedArticles.map((article, i) => (
                                        <Article
                                            key={i}
                                            title={article.title}
                                            url={article.url}
                                            summary={article.summary}
                                            date={article.date}
                                            type='Recommend'
                                            onClick={() => this.recommendArticle(article._id)}
                                        />
                                    )
                                    )) : <H1>You have no saved articles.</H1>
                                }
                            </PanelBody>
                        </Panel>
                    </Col>
                </Row>
            </Container>
        );
    };
};
