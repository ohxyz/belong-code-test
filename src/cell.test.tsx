import { Cell } from './cell';

it( 'has default boundary', () => {

    const c1 = new Cell( 0, 0 );
    expect( c1.b.rows ).toEqual( 0 );
    expect( c1.b.cols ).toEqual( 0 );
} );

it( 'has its neighbours wrapped to the other side', () => {

    const c1 = new Cell( 0, 0, {rows: 10, cols: 10} );
    const neighbours = c1.getNeighbours();

    const c2 = { x: 9, y: 9, b: {rows: 10, cols: 10} };
    const c3 = { x: 0, y: 9, b: {rows: 10, cols: 10} };
    const c4 = { x: 9, y: 0, b: {rows: 10, cols: 10} };

    expect( neighbours ).toContainEqual( c2 );
    expect( neighbours ).toContainEqual( c3 );
    expect( neighbours ).toContainEqual( c4 );
} )