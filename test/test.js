const assert = require('assert');
const pgnParser = require('../src/pgnParser');

describe('PGN parser test', () => {
    it('should read empty pgn', () => {
        const pgn = `
*
`;
        const ret = pgnParser.parse(pgn);
        assert(ret.game[0].result === "*");
    });
    it('should read header-only pgn', () => {
        const pgn = `
[Event "Live Chess"]
[Site "Chess.com"]
[Date "2018.09.05"]
[White "Foreverk"]
[Black "tkihira"]
[Result "*"]
[ECO "B00"]
[WhiteElo "1876"]
[BlackElo "1865"]
[TimeControl "180"]
[EndTime "6:43:56 PDT"]
[Termination "tkihira won by resignation"]
[CurrentPosition "6k1/3pbppp/p3p3/1p2P3/3P1P2/qP2B3/b2NQKPP/8 w - - 3 23"]
[TestKey "TestValue"]
`;
        const ret = pgnParser.parse(pgn);
        assert.equal(ret.headers["TestKey"], "TestValue");
        assert.equal(ret.headers["Black"], "tkihira");
    });
    it('should read simple pgn', () => {
        const pgn = `
[Event "Test Chess"]

1.e4 a6!? 2.d4 b5 3.Nf3 Bb7 4.Nc3? b4 5.Nd5 e6 6.Nxb4?? Bxb4+ 0-1 
`;
        const ret = pgnParser.parse(pgn);

        assert.equal(ret.game[1].nag[0], "$5");
    });
    it('should read branched pgn', () => {
        const pgn = `
[Event "Test Chess"]

1.e4 a6 2.d4 b5 3.Nf3 Bb7 4.Bd3 Nf6 5.Qe2 (5.Nd2 {is also playable. It continues} e6 6.O-O Be7 7.e5!? Nd5 8.Ne4 +/=) e6 6.O-O
*
`;
        const ret = pgnParser.parse(pgn);
        assert.equal(ret.game[8].variations[6].nag[0] ,'$14');
    });
});
