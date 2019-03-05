import { Container, Row, Col } from "../../components/Grid";

import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import { RecommendationArticle } from "../../components/Recommendations";

export default class Recommendation extends Component {

    state = {
        savedArticles: []
        //recommendedForYou : []
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
                                        <div>
                                            <RecommendationArticle
                                                key={i}
                                                title={article.title}
                                                url={article.url}
                                                summary={article.summary}
                                                date={article.date}
                                                type='Recommend'

                                            />

                                        </div>
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


