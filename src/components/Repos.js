import React, {Component} from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import Repo from './Repo'
import './Repos.css'

export default class Repos extends Component {
    constructor(props) {
        super(props);
    }
    _handleGetRepos(page){
        const {getRepos} = this.props;
        const lastWeek = new Date();
        lastWeek.setDate (lastWeek.getDate() - 7);
        getRepos({
            q: `created:>${lastWeek.toISOString().slice(0, 10)}`,
            sort: 'stars',
            order: 'desc',
            page,
            per_page: 30
        })
    }
    render() {
        const {totalCount, hasMore, items, error} = this.props;
        return (
            <div className="repos">
                {
                    items.length > 0
                    && (
                        <div className="repos__header">
                            <div className="repos__header__total">Total: {totalCount}</div>
                            <div className="repos__header__listed">Listed: {items.length}</div>
                        </div>
                    )
                }
                {
                    error
                    ? <div className="repos__error">Oops, looks like something wrong happened, what about some refresh?</div>
                    : (

                        <InfiniteScroll
                            pageStart={0}
                            loadMore={page => this._handleGetRepos(page)}
                            hasMore={hasMore}
                            loader={<div className="repos__loader" key={0}><i class="fas fa-circle-notch fa-spin"></i></div>}
                            >
                            {
                                items.map(item => <Repo key={item.id} data={item} />)
                            }
                        </InfiniteScroll>
                    )
                }
            </div>
        )
    }
}
