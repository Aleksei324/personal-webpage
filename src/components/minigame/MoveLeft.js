import RemovePlayablePiece from "./RemovePlayablePiece.js";
import RenderPiece from "./RenderPiece";

function MoveLeft(getValues, reRender, grid_final, piece_falling, piece_orientation, x_piece, y_piece, started) {

    if (piece_falling.current !== 0 && x_piece.current > 0 && started.current) {

        /* Makes a temporary copy of the grid array */
        let temp = JSON.parse(JSON.stringify(grid_final.current));

        switch (piece_falling.current) {
            case 1:
                /* I piece */
                switch (piece_orientation.current) {
                    case 0:
                    case 2:
                        /* If the side is empty... */
                        if (temp[y_piece.current][x_piece.current-2] === 0) {

                            x_piece.current -= 1;
                            grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                            RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                            reRender(true);
                        }
                        break;

                    case 1:
                    case 3:
                        /* If the side is empty... */
                        if (temp[y_piece.current-1][x_piece.current-1] === 0 && 
                            temp[y_piece.current][x_piece.current-1] === 0 && 
                            temp[y_piece.current+1][x_piece.current-1] === 0 && 
                            temp[y_piece.current+2][x_piece.current-1] === 0) {

                            x_piece.current -= 1;
                            grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                            RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                            reRender(true);
                        }
                        break;
                }
                break;

            case 2:
                /* T piece */
                switch (piece_orientation.current) {
                    case 0:
                        /* If the side is empty... */
                        if (temp[y_piece.current][x_piece.current-2] === 0 && 
                            temp[y_piece.current+1][x_piece.current-1] === 0) {

                            x_piece.current -= 1;
                            grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                            RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                            reRender(true);
                        }
                        break;

                    case 1:
                        /* If the side is empty... */
                        if (temp[y_piece.current-1][x_piece.current-1] === 0 && 
                            temp[y_piece.current][x_piece.current-2] === 0 && 
                            temp[y_piece.current+1][x_piece.current-1] === 0) {

                            x_piece.current -= 1;
                            grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                            RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                            reRender(true);
                        }
                        break;

                    case 2:
                        /* If the side is empty... */
                        if (temp[y_piece.current][x_piece.current-2] === 0 && 
                            temp[y_piece.current-1][x_piece.current-1] === 0) {

                            x_piece.current -= 1;
                            grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                            RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                            reRender(true);
                        }
                        break;

                    case 3:
                        /* If the side is empty... */
                        if (temp[y_piece.current-1][x_piece.current-1] === 0 && 
                            temp[y_piece.current][x_piece.current-1] === 0 && 
                            temp[y_piece.current+1][x_piece.current-1] === 0) {

                            x_piece.current -= 1;
                            grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                            RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                            reRender(true);
                        }
                        break;
                }
                break;

            case 3:
                /* Square piece */
                /* If the side is empty... */
                if (temp[y_piece.current][x_piece.current-1] === 0 && 
                    temp[y_piece.current+1][x_piece.current-1] === 0) {

                    x_piece.current -= 1;
                    grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                    RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                    reRender(true);
                }
                break;

            case 4:
                /* L piece */
                switch (piece_orientation.current) {
                    case 0:
                        /* If the side is empty... */
                        if (temp[y_piece.current][x_piece.current-2] === 0 && 
                            temp[y_piece.current+1][x_piece.current-2] === 0) {

                            x_piece.current -= 1;
                            grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                            RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                            reRender(true);
                        }
                        break;

                    case 1:
                        /* If the side is empty... */
                        if (temp[y_piece.current-1][x_piece.current-2] === 0 && 
                            temp[y_piece.current][x_piece.current-1] === 0 && 
                            temp[y_piece.current+1][x_piece.current-1] === 0) {

                            x_piece.current -= 1;
                            grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                            RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                            reRender(true);
                        }
                        break;

                    case 2:
                        /* If the side is empty... */
                        if (temp[y_piece.current][x_piece.current-2] === 0 && 
                            temp[y_piece.current-1][x_piece.current] === 0) {

                            x_piece.current -= 1;
                            grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                            RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                            reRender(true);
                        }
                        break;

                    case 3:
                        /* If the side is empty... */
                        if (temp[y_piece.current-1][x_piece.current-1] === 0 && 
                            temp[y_piece.current][x_piece.current-1] === 0 && 
                            temp[y_piece.current+1][x_piece.current-1] === 0) {

                            x_piece.current -= 1;
                            grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
                            RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
                            reRender(true);
                        }
                        break;
                }
                break;
        }
    }
}

export default MoveLeft;