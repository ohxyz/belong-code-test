import { Board } from './board';
import { Cell } from './cell';

it( 'has correct state after breed', () => {

    const b = new Board( 5, 10 );

    const c1 = new Cell( 1, 2 );
    const c2 = new Cell( 3, 3 );
    const c3 = new Cell( 1, 3 );
    const c4 = new Cell( 1, 4 );

    b.addLiveCell( c1 );
    b.addLiveCell( c2 );
    b.addLiveCell( c3 );
    b.addLiveCell( c4 );

    console.log( b.initState );

    const s1 = b.breed( b.initState );

    console.log( s1 );

    const s2 = b.breed( s1 );

    console.log( s2 );

    const s3 = b.breed( s2 );

    console.log( s3 );
} )