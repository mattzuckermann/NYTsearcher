
import { Container, Row, Col } from "../../components/Grid";
import React, { Component } from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import { RecommendationArticle } from "../../components/Recommendations";

export default class Message extends Component {

    state = {
        messages: []
    };

    //initial loading of saved articles
    componentWillMount() {
        this.loadMessages();
    };

    loadMessages = () => {
        API
            .getRecommendation()
            .then(results => {
                this.setState({ messages: results.data })
            })
    };



    render() {
        return (

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

        );
    };
};




