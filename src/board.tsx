import { Cell } from './cell';

class Board {

    rows: number;
    cols: number;
    initState: Array<Array<number>>;

    constructor( rows: number, cols: number ) {

        this.rows = rows;
        this.cols = cols;
        this.initState = this.init();
    }

    init(): Array<Array<number>> {

        const state = [];

        for ( let i = 0; i < this.rows; ++i ) {
            state.push( Array(this.cols).fill(0) );
        }

        return state;
    }

    addLiveCell( cell: Cell ): void {

        this.initState[cell.x][cell.y] = 1;
    }

    breed( state: Array<Array<number>> ): Array<Array<number>> {

        const newState = this.init();

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
        
        return newState;
    }
}

export { Board }