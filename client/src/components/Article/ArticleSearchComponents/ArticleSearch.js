import React, { Component } from 'react';
import { Panel, PanelHeading, PanelBody } from '../../../components/Panel';
import { Form, Input, FormBtn, FormGroup, Label } from '../../../components/Form';
import { H1, H3, H4 } from '../../../components/Headings';
import 'react-tabs/style/react-tabs.css';
import API from '../../../utils/API';
import { ConnectionBase } from 'mongoose';

export class ArticleSearch extends Component {


    state = {
        topic: '', //main search term
        sYear: '', //start year for search
        eYear: '', //end year for search
        page: '0', //page of search result
        results : []
    };


    handleFormSubmit = event => {

        event.preventDefault();
        let { topic, sYear, eYear } = this.state;
        
        let query = { topic, sYear, eYear };
        this.getArticles(query);
    };

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    };


    getArticles = query => {

        let { topic, sYear, eYear } = query
        let queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&page=${this.state.page}`
        let key = `&api-key=0kc43d2ELOWiqzQYxbWK24FwYJwHXyJk`;

        //removing spaces and building the query url conditionally
        //based on presence of optional search terms
        if (topic.indexOf(' ') >= 0) {
            topic = topic.replace(/\s/g, '+');
        }
        if (topic) {
            queryUrl += `&fq=${topic}`
        }
        if (sYear) {
            queryUrl += `&begin_date=${sYear}`
        }
        if (eYear) {
            queryUrl += `&end_date=${eYear}`
        }
        queryUrl += key;
        var self = this;
        //calling the API
        API
            .queryNYT(queryUrl)
            .then(results => {
                self.props.updateResults(self.props.parent,results,query);
            })
            .catch(err => console.log(err))
    }

    render() {
        return (

            <Panel>
                <PanelHeading>
                    <H3>Search</H3>
                </PanelHeading>
                <PanelBody>
                    <Form style={{ marginBottom: '30px' }}>
                        <FormGroup>
                            <Label htmlFor="topic">Enter a topic to search for:</Label>
                            <Input
                                onChange={this.handleInputChange}
                                name="topic"
                                value={this.state.topic}
                                placeholder="Topic"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="sYear">Enter a beginning date to search for (optional):</Label>
                            <Input
                                onChange={this.handleInputChange}
                                type="date"
                                name="sYear"
                                value={this.state.sYear}
                                placeholder="Start Year"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="eYear">Enter an end date to search for (optional):</Label>
                            <Input
                                onChange={this.handleInputChange}
                                type="date"
                                name="eYear"
                                value={this.state.eYear}
                                placeholder="End Year"
                            />
                        </FormGroup>
                        <FormBtn disabled={!this.state.topic} onClick={this.handleFormSubmit} type="info">
                            Submit
                  </FormBtn>
                    </Form>
                </PanelBody>
            </Panel>


        );
    }
}
