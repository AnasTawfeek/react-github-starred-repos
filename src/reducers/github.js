import * as TYPES from '../constants/github'

const initialState = {
    totalCount: null,
    hasMore: true,
    items: [],
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_REPOS_IN_PROGRESS: {
            return {...state, loading: true}
        }
        case TYPES.GET_REPOS_SUCCESS: {
            let {
                total_count: totalCount,
                complete_results: completeResults,
                items
            } = action.payload;
            return {
                ...state,
                loading: false,
                totalCount,
                hasMore: !completeResults,
                items: [
                    ...state.items,
                    ...items
                ]
            }
        }
        case TYPES.GET_REPOS_FAILURE: {
            let {error} = action;
            return {...state, loading: false, error}
        }
        default:
        return state
    }
}
