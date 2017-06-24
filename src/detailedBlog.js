import React from 'react'
import Constants from '../common/constants'
import InfiniteScroll from 'react-infinite-scroller/dist/InfiniteScroll';
import CommentBox from './commentBox'
import Home from './home'

export default class DetailedBlog extends React.Component {

    constructor(props) {
        super(props)
        this.firstTime = false;
        this.blogDetails = Constants.blogdetails[this.props.id]
        this.countItem = 0;
        this.state = {
            scroll: false,
            hasMoreItems: true,
            firstTime: false,
            comments: this.blogDetails.comments[this.countItem],
            backButton : false
        }
        this.backButtonHandler = this.backButtonHandler.bind(this)
    }

    backButtonHandler(){
        this.setState({backButton :  true})
    }

    loadItems() {
        if (this.state.firstTime === false) {
            this.setState({ firstTime: true })
        }
        else {
            if (this.countItem > this.blogDetails.comments.length) {
                this.setState({ hasMoreItems: false })
            }

            else {
                this.countItem = this.countItem + 1
                let comments = [...this.state.comments, ...this.blogDetails.comments[this.countItem]]
                this.setState({ comments, scroll: true })
            }
        }


    }

    render() {
        let imgurl = `../images/${this.blogDetails.image}`
        let comments = [];
        this.state.comments.map(function (item, index) {
            comments.push(<CommentBox key={index} data={item} />)
        })
        let normalContent =
            (<div>
                <div className="row">
                    <div className="col-sm-10 col-md-10 col-lg-10"><h1>{this.blogDetails.title}</h1></div>
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <button type="button" className="btn btn-primary btn-lg"style={{marginTop : "1%"}} onClick={this.backButtonHandler}>Home Page</button>
                    </div>
                </div>
                <h2>{this.blogDetails.previewtext}</h2>
                <h4><em>{this.blogDetails.timeStamp}</em></h4>
                <img src={imgurl} alt={this.blogDetails.image} />
                <article>
                    <p>{this.blogDetails.article}</p>
                    <p>{this.blogDetails.article}</p>
                    <p>{this.blogDetails.article}</p>
                    <p>{this.blogDetails.article}</p>

                </article>
            </div>);
        let finalContent = normalContent;
        if (this.state.scroll === true)
            finalContent = (
                <div>
                    {normalContent}
                    {comments}
                </div>
            );

            let renderContent = (
                <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                initialLoad={false}
                threshold={0}
            >
                <div >
                    {finalContent}
                </div>
            </InfiniteScroll>
            )

            if(this.state.backButton === true)
                renderContent = <Home/>

        return (
            <div>
            {renderContent}
            </div>
        )
    }
}

