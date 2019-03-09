import React, { Component } from "react";
import API from "../../utils/API";
import { Article } from '../../components/Article';
import Jumbotron from "../../components/Jumbotron";
import { H1, H3 } from '../../components/Headings';
import { Container, Row, Col } from "../../components/Grid";
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import { RecommendationArticle } from "../../components/Recommendations";


export class RecommendationPanel extends Component {



    //function that queries API server and deletes articles


    render() {
        return (
            <Panel>

                <PanelHeading>
                    <H3>Make A Recommendation</H3>
                </PanelHeading>
                <PanelBody>
                    {this.props.savedArticles.length > 0 ?
                        (this.props.savedArticles.map((article, i) => (
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
        );
    };
};
