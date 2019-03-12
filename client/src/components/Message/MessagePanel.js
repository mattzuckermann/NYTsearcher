
import { Container, Row, Col } from "../../components/Grid";
import React, { Component } from "react";
import API from "../../utils/API";
import { H1, H3 } from '../../components/Headings';
import { Panel, PanelHeading, PanelBody } from '../../components/Panel';
import {Message} from "./Message";

export class MessagePanel extends Component {

    state = {
        messages: []
    };

    //initial loading of saved articles
    componentWillMount() {
        this.loadMessages();
    };

    loadMessages = () => {
        API
            .getRecommendation("1")
            .then(results => {
                console.log(results);
                this.setState({ messages: results.data })
            })
    };



    render() {
        return (
            <Panel>
                <PanelHeading>
                    <H3>Your Messages</H3>
                </PanelHeading>
           
                <PanelBody>
                    {this.state.messages.length > 0 ?
                    
                        (this.state.messages.map((message,i) => 
                        
                            (<Message 
                                    key = {i} 
                                    title = {message.title}
                                    sender = {message.sender}
                                    message = {message.message}
                                    url = {message.url}
                                    />)
                        
                        ))
                    
                        : <H1>You have no messages.</H1>
                    }
                </PanelBody>
            </Panel>
        );
    };
};




