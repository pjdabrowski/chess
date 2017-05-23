"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.chess = new Chess();
        this.chessboard = null;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.chessboard = ChessBoard('board', {
            draggable: true,
            dropOffBoard: 'trash',
            sparePieces: true
        });
    };
    AppComponent.prototype.start = function () {
        this.chessboard.start();
    };
    AppComponent.prototype.clear = function () {
        this.chessboard.clear();
    };
    AppComponent.prototype.play = function () {
        if (!this.chess.game_over()) {
            var moves = this.chess.moves();
            var move = moves[Math.floor(Math.random() * moves.length)];
            this.chess.move(move);
            this.chessboard.position(this.chess.fen());
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n<div id=\"board\" style=\"width: 400px\"></div>\n<input type=\"button\" id=\"startBtn\" value=\"Start\" (click)=\"start()\"/>\n<input type=\"button\" id=\"clearBtn\" value=\"Clear\" (click)=\"clear()\"/>\n<input type=\"button\" id=\"clearBtn\" value=\"Play randomly\" (click)=\"play()\"/>\n",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map