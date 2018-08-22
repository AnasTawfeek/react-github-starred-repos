import React  from 'react'
import './App.css'
import ReposContainer from './Repos'

export default () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Github Repositories Star Ranking</h1>
        </header>
        <p className="App-intro">
            <ReposContainer />
        </p>
    </div>
);
