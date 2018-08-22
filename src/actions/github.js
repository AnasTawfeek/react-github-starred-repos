import * as TYPES from '../constants/github'
import {GITHUB_REPOS, CREDENTIALS} from '../constants'

/**
 * Action Creators
 */
// Get the repos
export const getReposInProgress = () => ({
    type: TYPES.GET_REPOS_IN_PROGRESS
})
export const getReposSuccess = payload => ({
    type: TYPES.GET_REPOS_SUCCESS,
    payload
})
export const getReposFailure = error => ({
    type: TYPES.GET_REPOS_FAILURE,
    error
})

// Check if repo is starred by the current user
export const getStarStatusInProgress = () => ({
    type: TYPES.GET_STAR_STATUS_IN_PROGRESS
})
export const getStarStatusSuccess = repos => ({
    type: TYPES.GET_STAR_STATUS_SUCCESS,
    repos
})
export const getStarStatusFailure = error => ({
    type: TYPES.GET_STAR_STATUS_FAILURE,
    error
})

/**
 * Action Handlers
 */
export const getRepos = dispatch => async config => {
    dispatch(getReposInProgress());
    const reposResponse = await fetch(GITHUB_REPOS(config));
    // lets sleep to display the loader :D
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Hint: Changing this '200' will cause failure :3
    if (reposResponse.status !== 200) return dispatch(getReposFailure(reposResponse));
    const payload = await reposResponse.json();
    dispatch(getReposSuccess(payload));
}
