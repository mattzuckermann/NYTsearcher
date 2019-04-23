import React, { Component } from 'react';
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import { RecommendationArticle } from '../../components/Recommendations';

export class RecommendationPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel>
        <PanelHeading>
          <H3>Make A Recommendation</H3>
        </PanelHeading>
        <PanelBody>
          {this.props.savedArticles.length > 0 ? (
            this.props.savedArticles.map((article, i) => (
              <div>
                <RecommendationArticle
                  key={i}
                  title={article.title}
                  url={article.url}
                  summary={article.summary}
                  date={article.date}
                  type="Recommend"
                />
              </div>
            ))
          ) : (
            <H1>You have no saved articles.</H1>
          )}
        </PanelBody>
      </Panel>
    );
  }
}
