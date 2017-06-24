import React from 'react'
import ReactDOM from 'react-dom'
import Constants from '../common/constants'
//import Constants from '../common/bloglist.json'
import InfiniteScroll from 'react-infinite-scroller/dist/InfiniteScroll';
import DetailedBlog from './detailedBlog';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.countItem = 0;
        this.clickedItemId;
        this.itemClickHandler = this.itemClickHandler.bind(this)
        this.state = {
            hasMoreItems: true,
            bloglist: Constants.bloglist[this.countItem],
            itemClicked: false
        }
    }

    itemClickHandler(event) {
        this.clickedItemId = event.target.getAttribute('id')
        this.setState({ itemClicked: true })

    }

    loadItems() {
        if (this.countItem !== undefined) {
            if (this.countItem > Constants.blogdetails.length)
                this.setState({ hasMoreItems: false })
            else {
                this.countItem = this.countItem + 1
                let bloglist = [...this.state.bloglist, ...Constants.bloglist[this.countItem]]

                this.setState({ hasMoreItems: true, bloglist })
            }
        }

    }


    render() {
        let constructList = []
        let self = this;
        this.state.bloglist.map(function (item, index) {
            constructList.push(<li key={index} className="bloglist">
                <h1 id={index} onClick={self.itemClickHandler} >{item.title}</h1>
                <p>{item.previewtext}</p>
                <p><em>{item.timeStamp}</em></p>
            </li>)
        })
        let items = <ul>{constructList}</ul>
        let renderComponent = this.state.itemClicked === true ?
            <DetailedBlog id={this.clickedItemId} />
            :
            (<InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
            >
                <div >
                    {items}
                </div>
            </InfiniteScroll>)
        return (
            <div>
                {renderComponent}
            </div>
        )
    }
}

