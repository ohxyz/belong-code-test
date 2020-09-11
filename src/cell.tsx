interface Boundary {

    rows: number,
    cols: number
};

class Cell {

    x: number;
    y: number;
    b: Boundary;
    
    constructor( x: number, y: number, boundary: Boundary = {rows:0, cols:0} ) {

        this.x = x;
        this.y = y;
        this.b = boundary;
    }

    getNeighbours(): Array<Cell> {

        return [

            new Cell( 
                ( this.x - 1 + this.b.rows ) % this.b.rows, 
                ( this.y - 1 + this.b.cols ) % this.b.cols,
                this.b
            ),
            new Cell( 
                ( this.x + this.b.rows ) % this.b.rows, 
                ( this.y - 1 + this.b.cols ) % this.b.cols,
                this.b
            ),
            new Cell( 
                ( this.x + 1 + this.b.rows ) % this.b.rows, 
                ( this.y - 1 + this.b.cols ) % this.b.cols,
                this.b
            ),
            new Cell( 
                ( this.x - 1 + this.b.rows ) % this.b.rows, 
                ( this.y + this.b.cols ) % this.b.cols,
                this.b
            ),
            new Cell( 
                ( this.x + 1 + this.b.rows ) % this.b.rows, 
                ( this.y + this.b.cols ) % this.b.cols,
                this.b
            ),
            new Cell( 
                ( this.x - 1 + this.b.rows ) % this.b.rows, 
                ( this.y + 1 + this.b.cols ) % this.b.cols,
                this.b
            ),
            new Cell( 
                ( this.x + this.b.rows ) % this.b.rows, 
                ( this.y + 1 + this.b.cols ) % this.b.cols,
                this.b
            ),
            new Cell( 
                ( this.x + 1 + this.b.rows ) % this.b.rows, 
                ( this.y + 1 + this.b.cols ) % this.b.cols,
                this.b
            )
        ]
    }
}

export { Cell }