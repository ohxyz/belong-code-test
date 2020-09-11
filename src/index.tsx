import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Cell } from './cell';
import { Board } from './board';

const board = new Board( 50, 50 );

const cells = [
    new Cell( 25, 25 ), 
    new Cell( 26, 26 ), 
    new Cell( 27, 26 ), 
    new Cell( 27, 25 ), 
    new Cell( 27, 24 ) 
];

cells.forEach( cell => {

    board.addLiveCell( cell )
} )

ReactDOM.render(
    <React.StrictMode>
        <App board={board} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
