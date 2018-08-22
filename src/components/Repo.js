import React from 'react'
import './Repo.css'

export default ({
    data: {
        full_name,
        html_url,
        stargazers_count,
        forks_count,
        owner: {
            avatar_url,
            login,
            html_url: owner_url
        }}
}) => (
    <div className="repo">
        <div className="repo__stats">
            <div className="repo__stats__stars">
                <i class="fas fa-star"></i> {stargazers_count}
            </div>
            <div className="repo__stats__forks">
                <i class="fas fa-code-branch"></i> {forks_count}
            </div>
        </div>
        <div className="repo__name">
            <a href={html_url} target="_blank">{full_name}</a>
        </div>
        <div className="repo__owner">
            <a href={owner_url}>
                By: <img src={avatar_url} alt={login}/> {login}
            </a>
        </div>
    </div>
)
