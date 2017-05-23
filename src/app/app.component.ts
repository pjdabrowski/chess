import {AfterViewInit, Component} from '@angular/core';

declare var Chess: any;
declare var ChessBoard: any;

@Component({
  selector: 'my-app',
  template: `
<div id="board" style="width: 400px"></div>
<input type="button" id="startBtn" value="Start" (click)="start()"/>
<input type="button" id="clearBtn" value="Clear" (click)="clear()"/>
<input type="button" id="clearBtn" value="Play randomly" (click)="play()"/>
`,
})
export class AppComponent implements AfterViewInit {
  chess = new Chess();
  chessboard: any = null;

  ngAfterViewInit() {
    this.chessboard = ChessBoard('board', {
      draggable: true,
      dropOffBoard: 'trash',
      sparePieces: true
    });
  }

  start(): void {
    this.chessboard.start();
  }

  clear(): void {
    this.chessboard.clear();
  }

  play() {
    if (!this.chess.game_over()) {

        let moves = this.chess.moves();
        let move = moves[Math.floor(Math.random() * moves.length)];
        this.chess.move(move);
        this.chessboard.position(this.chess.fen());
    }
  }
}
