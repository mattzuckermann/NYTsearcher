import React, { Component } from 'react';
import { Panel, PanelHeading, PanelBody } from '../../Panel';
import { Form, Input, FormBtn, FormGroup, Label } from '../../Form';
import { H1, H3, H4 } from '../../Headings';
import 'react-tabs/style/react-tabs.css';

export class BookSearch extends Component {

    articleType = "articles";
    bookType = "books";

    state = {
        topic: '', //main search term
        sYear: '', //start year for search
        eYear: '', //end year for search
        page: '0' //page of search result
    };

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({ [name]: value });
    };

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
                        <FormBtn disabled={!this.state.topic} onClick={this.props.handleFormSubmit} type="info">
                            Submit
                  </FormBtn>
                    </Form>
                </PanelBody>
            </Panel>


        );
    }
}
