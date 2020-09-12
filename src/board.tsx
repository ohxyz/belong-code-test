import { Cell } from './cell';

class Board {

    rows: number;
    cols: number;
    state: Array<Array<number>>;

    constructor( rows: number, cols: number ) {

        this.rows = rows;
        this.cols = cols;
        this.state = [];
        this.init();
    }

    init(): Array<Array<number>> {

        const state = [];

        for ( let i = 0; i < this.rows; ++i ) {
            state.push( Array(this.cols).fill(0) );
        }

        this.state = state;

        return state;
    }

    makeCellAlive( x: number, y: number, alive: number = 1 ): Array<Array<number>> {

        const newState = JSON.parse( JSON.stringify(this.state) );

        newState[x][y] = alive;
        this.state = newState;

        return newState;
    }

    breed( state: Array<Array<number>> ): Array<Array<number>> {

        const newState = JSON.parse( JSON.stringify(this.state) );

        for ( let x = 0; x < this.rows; ++x ) {
            for ( let y = 0; y < this.cols; ++y ) {

                const cell = new Cell( x, y, { rows: this.rows, cols: this.cols } )
                const neighbours = cell.getNeighbours();
                let countOfAliveNb = 0;

                for ( let n = 0; n < neighbours.length; ++n ) {

                    const nb = neighbours[n];
                    
                    if ( state[nb.x][nb.y] === 1 ) {

                        countOfAliveNb++;
                    }
                }

                if ( state[x][y] === 1 && (countOfAliveNb === 2 || countOfAliveNb === 3) ) {

                    newState[x][y] = 1;
                }
                else if ( countOfAliveNb === 3 ) {

                    newState[x][y] = 1;
                }
                else {

                    newState[x][y] = 0;
                }
            }
        }

        this.state = newState;
        
        return newState;
    }
}

export { Board }