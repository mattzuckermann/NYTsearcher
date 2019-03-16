import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import { Container, Row, Col } from '../../components/Grid';
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import API from '../../utils/API';
import axios from 'axios';
import { RecommendationArticle } from "../../components/Recommendations";
import { MessagePanel } from "../../components/Message"
import { RecommendationPanel } from "./RecommendationPanel";

export default class Recommendation extends Component {
  state = {
    savedArticles: []
  };

  componentWillMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    var user = localStorage.getItem("user");
    console.log(user);
    API.getArticlesU(user).then(results => {
      this.setState({ savedArticles: results.data });
    });
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
            <MessagePanel />


          </Col>
        </Row>
      </Container>
    );
  };
};

  //function that queries the API server and retrieves saved articles
/* loadArticles = () => {
   API.getArticles().then(results => {
     this.setState({ savedArticles: results.data });
   });
 };

 render() {
   return (
     <Container fluid>
       <Row>
         <Col size="sm-10" offset="sm-1">
           <Jumbotron>
             <H1 className="text-center">Make A Recommendation</H1>
             <hr style={{ width: '60%' }} />
           </Jumbotron>
           <Panel>
             <PanelHeading>
               <H3>Make A Recommendation</H3>
             </PanelHeading>
             <PanelBody>
               {this.state.savedArticles.length > 0 ? (
                 this.state.savedArticles.map((article, i) => (
                   <RecommendationArticle
                     key={i}
                     title={article.title}
                     url={article.url}
                     summary={article.summary}
                     date={article.date}
                     type="Recommend"
                   />
                 ))
               ) : (
                 <H1>You have no saved articles.</H1>
               )}
             </PanelBody>
           </Panel>
         </Col>
       </Row>
     </Container>
   );
 }
}*/
