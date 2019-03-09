import React, { Component } from "react";
import API from "../../utils/API";

export class RecommendationComment extends Component {


    state = {
        receiver: '',
        message: '',
        article : ''

    }

    constructor(props) {
        super(props);
        this.state.article = props.article;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit(event) {
        API.createRecommendation({
            sender : "1",
            receiver : this.state.receiver,
            message : this.state.message,
            title : this.state.article.title,
            url : this.state.article.url
        }).then(function(res){
            console.log(res);
        })
        event.preventDefault();

    }
    render() {
        return (
            <div className="recommendContainer">

                {
                    this.props.commentsVisible ?
                        <form onSubmit={this.handleSubmit} id="usrform">
                            Send To: <textarea type="text" name="receiver" value={this.state.receiver} onChange={this.handleChange}></textarea>
                            <div>
                                <div>
                                    <label> Make a Comment!</label>
                                </div>
                                <div>
                                    <textarea name="message" value={this.state.message} onChange={this.handleChange} lass="comments" rows="12" cols="50" form="usrform">
                                    </textarea>
                                </div>
                            </div>
                            <input type="submit"></input>
                        </form>

                        : null
                }

            </div>
        );
    }
}


