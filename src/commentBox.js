import React from 'react';

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.data = this.props.data
        this.buttonHandler = this.buttonHandler.bind(this)

        this.state = {
            likeCount: this.data.likes
        }
    }

    buttonHandler() {
        let likeCount = this.state.likeCount + 1
        this.setState({ likeCount })
    }
    render() {
        let replies = [];
        if (this.data !== undefined && this.data.replies.length > 0) {
            this.data.replies.map(function (item) {
                replies.push(<CommentBox data={item} />)
            })
        }


        return (
            <div className="commentBox">
                <div>{this.data.text}</div>
                <button type="button" className="btn btn-primary" onClick={this.buttonHandler}>Like</button>
                <span style={{ marginLeft: "1%" }}>{this.state.likeCount}</span>
                <div className="replies">{replies}</div>
            </div>
        )
    }
}