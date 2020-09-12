import { Board } from './board';

it( 'has correct state after breed', () => {

    const b = new Board( 5, 10 );

    b.makeCellAlive( 1, 2 );
    b.makeCellAlive( 3, 3 );
    b.makeCellAlive( 1, 3 );
    b.makeCellAlive( 1, 4 );

    console.log( b.state );

    const s1 = b.breed();

    console.log( s1 );

    const s2 = b.breed();

    console.log( s2 );

    const s3 = b.breed();

    console.log( s3 );
} )