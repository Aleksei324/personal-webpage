import RenderPiece from './RenderPiece.js';
import CheckPiece from './CheckPiece.js';

function UpdateGrid(getValues, reRender, started, grid_final, piece_falling, piece_orientation, piecesList, highscore, score, x_piece, y_piece) {
    /**
    * Update the html grid to show
    * the pieces and obstacles
    */
    console.log('UpdateGrid')

    /* Makes a temporary copy of the grid array */
    let temp_grid = JSON.parse(JSON.stringify(grid_final.current));

    /* Removes number 2 from the array */
    for (let i=0; i<getValues.height; i++) {
        if (temp_grid[i].includes(2)) {
            for (let j=0; j<getValues.width; j++) {

                if (temp_grid[i][j] === 2) {
                    temp_grid[i][j] = 0;
                }

            }
        }
    }

    /* All the new obstacles and new empty zones are updated in the visible html grid */
    grid_final.current = JSON.parse(JSON.stringify(CheckPiece(
        getValues, reRender, temp_grid, started, grid_final, piece_falling, piece_orientation, piecesList, highscore, score, x_piece, y_piece
        )));
    
    RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
    reRender({render: true});
}

export default UpdateGrid;