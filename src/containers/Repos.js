import {connect} from 'react-redux'
import Repos from '../components/Repos'
import {getRepos} from '../actions/github'

const mapStateToProps = state => ({
    totalCount: state.github.totalCount,
    hasMore: state.github.hasMore,
    items: state.github.items,
    error: state.github.error
})

const mapDispatchToProps = dispatch => ({
    getRepos: config => getRepos(dispatch)(config)
})

export default connect(mapStateToProps, mapDispatchToProps)(Repos);
