var pgnRules = require("./pgn-rules");
var pgnParser = require("./pgnParser");

var pgn = `
[Event "Live Chess"]
[Site "Chess.com"]
[Date "2018.09.05"]
[White "Foreverk"]
[Black "tkihira"]
[Result "0-1"]
[ECO "B00"]
[WhiteElo "1876"]
[BlackElo "1865"]
[TimeControl "180"]
[EndTime "6:43:56 PDT"]
[Termination "tkihira won by resignation"]
[CurrentPosition "6k1/3pbppp/p3p3/1p2P3/3P1P2/qP2B3/b2NQKPP/8 w - - 3 23"]

1.e4 {[%clk 0:02:59]} a6 {[%clk 0:02:59]} 2.d4 {[%clk 0:02:58]} b5 {[%clk 0:02:59]} 3.f4 {[%clk 0:02:56]} Bb7 {[%clk 0:02:59]} 4.Bd3 {[%clk 0:02:55]} Nf6 {[%clk 0:02:59]} 5.Qe2 {[%clk 0:02:53]} e6 {[%clk 0:02:58]} 6.Nf3 {[%clk 0:02:52]} c5 {[%clk 0:02:57]} 7.c3 {[%clk 0:02:50]} Nc6 {[%clk 0:02:57]} 8.O-O {[%clk 0:02:49]} cxd4 {[%clk 0:02:56]} 9.cxd4 {[%clk 0:02:48]} Nb4 {[%clk 0:02:56]} 10.e5 {[%clk 0:02:41]} Nxd3 {[%clk 0:02:54]} 11.Qxd3 {[%clk 0:02:40]} Nd5 {[%clk 0:02:53]} 12.Nc3 {[%clk 0:02:38]} Rc8 {[%clk 0:02:51]} 13.Nxd5 {[%clk 0:02:36]} Bxd5 {[%clk 0:02:51]} 14.Be3 {[%clk 0:02:35]} Be7 {[%clk 0:02:46]} 15.Rac1 {[%clk 0:02:34]} O-O {[%clk 0:02:44]} 16.Rxc8 {[%clk 0:02:32]} Qxc8 {[%clk 0:02:43]} 17.Rc1 {[%clk 0:02:31]} Qb7 {[%clk 0:02:40]} 18.Qe2 {[%clk 0:02:25]} Bxa2 {[%clk 0:02:37]} 19.Nd2 {[%clk 0:02:11]} Rc8 {[%clk 0:02:33]} 20.Rxc8+ {[%clk 0:02:09]} Qxc8 {[%clk 0:02:33]} 21.b3 {[%clk 0:02:03]} Qc1+ {[%clk 0:02:20]} 22.Kf2 {[%clk 0:02:01]} Qa3 {[%clk 0:02:14]}  0-1
`;
var pgn = `
[Event "Live Chess"]
[Site "Chess.com"]
[Date "2018.09.05"]
[White "Foreverk"]
[Black "tkihira"]
[Result "0-1"]
[ECO "B00"]
[WhiteElo "1876"]
[BlackElo "1865"]
[TimeControl "180"]
[EndTime "6:43:56 PDT"]
[Termination "tkihira won by resignation"]
[CurrentPosition "6k1/3pbppp/p3p3/1p2P3/3P1P2/qP2B3/b2NQKPP/8 w - - 3 23"]

1.e4 {[%clk 0:02:59]} a6 {[%clk 0:02:59]} 2.d4 {[%clk 0:02:58]} b5 {[%clk 0:02:59]} 3.f4 {[%clk 0:02:56]} Bb7 {[%clk 0:02:59]} 4.Bd3 {[%clk 0:02:55]} Nf6 {[%clk 0:02:59]} 5.Qe2 {[%clk 0:02:53]} e6 {[%clk 0:02:58]} 6.Nf3 {[%clk 0:02:52]} c5 {[%clk 0:02:57]} 7.c3 {[%clk 0:02:50]} Nc6 {[%clk 0:02:57]} 8.O-O {[%clk 0:02:49]} cxd4 {[%clk 0:02:56]} 9.cxd4 {[%clk 0:02:48]} Nb4 {[%clk 0:02:56]} 10.e5 {[%clk 0:02:41]} Nxd3 {[%clk 0:02:54]} 11.Qxd3 {[%clk 0:02:40]} Nd5 {[%clk 0:02:53]} 12.Nc3 {[%clk 0:02:38]} Rc8 {[%clk 0:02:51]} 13.Nxd5 {[%clk 0:02:36]} Bxd5 {[%clk 0:02:51]} 14.Be3 {[%clk 0:02:35]} Be7 {[%clk 0:02:46]} 15.Rac1 {[%clk 0:02:34]} O-O {[%clk 0:02:44]} 16.Rxc8 {[%clk 0:02:32]} Qxc8 {[%clk 0:02:43]} 17.Rc1 {[%clk 0:02:31]} Qb7 {[%clk 0:02:40]} 18.Qe2 {[%clk 0:02:25]} Bxa2 {[%clk 0:02:37]} 19.Nd2 {[%clk 0:02:11]} Rc8 {[%clk 0:02:33]} 20.Rxc8+ {[%clk 0:02:09]} Qxc8 {[%clk 0:02:33]} 21.b3 {[%clk 0:02:03]} Qc1+ {[%clk 0:02:20]} 22.Kf2 {[%clk 0:02:01]} Qa3 {[%clk 0:02:14]}  0-1
`;
//console.log(pgnRules.parse(pgn));
console.log(pgnParser.parse(pgn));
