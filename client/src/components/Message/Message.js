
import { Container, Row, Col } from "../../components/Grid";
import React, { Component } from "react";
import API from "../../utils/API";
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import { RecommendationArticle } from "../../components/Recommendations";

export class Message extends Component {



    render() {
        return (
            <PanelBody  className="bg-dark list-group-item list-group-item-action flex-column align-items-start active">
              <div>
                 {this.props.sender} has recommended you read <a href = {this.props.url}> {this.props.title}  </a> with the following comments

                 <div>
                     {this.props.message}
                 </div>

              </div>
            </PanelBody>

        );
    };
};




