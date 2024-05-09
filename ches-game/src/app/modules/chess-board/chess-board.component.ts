import { Component } from "@angular/core";
import { Color, FENChar, pieceImagePaths } from "../../chess-logic/models";
import { ChessBoard } from "../../chess-logic/chess-board";
import { NgClass, NgFor, NgIf } from "@angular/common";

@Component({
  selector: "app-chess-board",
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: "./chess-board.component.html",
  styleUrl: "./chess-board.component.css",
})
export class ChessBoardComponent {
  public pieceImagesPaths = pieceImagePaths;

  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.chessBoardView;
  public get playerColor(): Color {
    return this.chessBoard.playerColor;
  }

  public isSquareDark(x: number, y: number): boolean {
    return ChessBoard.isSquareDark(x, y)
  }
}
