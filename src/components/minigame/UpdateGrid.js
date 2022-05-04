import RenderPiece from './RenderPiece.js';
import CheckPiece from './CheckPiece.js';
import RemovePlayablePiece from './RemovePlayablePiece.js';
import RemoveLine from './RemoveLine.js';

function UpdateGrid(getValues, started, grid_final, piece_falling, piece_orientation, piecesList, highscore, score, x_piece, y_piece, gameOver) {
    /**
    * Update the html grid to show
    * the pieces and obstacles
    */

    /* Makes a temporary copy of the grid array */
    let temp_grid = JSON.parse(JSON.stringify(grid_final.current));

    /* Removes number 2 from the array */
    temp_grid = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, JSON.parse(JSON.stringify(temp_grid)) )));

    /* All the new obstacles and new empty zones are updated in the visible html grid */
    grid_final.current = JSON.parse(JSON.stringify(CheckPiece(
        getValues, temp_grid, started, piece_falling, piece_orientation, piecesList, highscore, score, x_piece, y_piece, gameOver
        )));

    RemoveLine(getValues, grid_final, score);

    RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
}

export default UpdateGrid;