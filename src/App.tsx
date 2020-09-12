import React, { useState } from 'react';
import { Board } from './board';

type AppProps = {

    board: Board
};

function App( {board}: AppProps ) {

    const [ layout, setLayout ] = useState( board.state );

    const rowStyle = {

        display: 'flex'
    };

    function handleNextGenClick() {

        setLayout( board.breed(layout) );
    }

    function handleResetClick() {

        setLayout( board.init() );
    }

    function handleCellClick( rowIndex: number, cellIndex: number ) {

        const aliveOrDead = board.state[rowIndex][cellIndex] ^ 1;

        setLayout( board.makeCellAlive( rowIndex, cellIndex, aliveOrDead ) );
    }

    return  <div className="app">
                <div className="board">
                {
                    layout.map( (rows, rowIndex) =>

                        <div key={rowIndex} style={rowStyle} >
                        {
                            rows.map( (cell, cellIndex) => {

                                const cellStyle = {
                                    width: '10px',
                                    height: '10px',
                                    border: '1px solid white',
                                    backgroundColor: 'white'
                                };

                                cellStyle.backgroundColor = cell ? '#0000ff80' : '#0000ff10';
                                return  <div key={`${rowIndex},${cellIndex}`} 
                                             style={ cellStyle }
                                             onClick={ () => handleCellClick(rowIndex, cellIndex) }
                                        >
                                        </div>
                            } )
                        }
                        </div>
                    )
                }
                </div>
                <button onClick={ handleNextGenClick }>Next Gen</button>
                <button onClick={ handleResetClick }>Reset</button>
            </div>
}

export default App;
