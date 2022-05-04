function RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece) {
    /**
     * If there are actual playable pieces currently
     * active, paint it in the html grid
     */
    console.log('RenderPiece')

    switch (piece_falling.current) {
        case 0:
            break;

        case 1:
            /* I piece */
            switch (piece_orientation.current){
                case 0:
                case 2:
                    grid_final.current[y_piece.current][x_piece.current-1] = 2;
                    grid_final.current[y_piece.current][x_piece.current] = 2;
                    grid_final.current[y_piece.current][x_piece.current+1] = 2;
                    grid_final.current[y_piece.current][x_piece.current+2] = 2;
                    break;

                case 1:
                case 3:
                    grid_final.current[y_piece.current-1][x_piece.current] = 2;
                    grid_final.current[y_piece.current][x_piece.current] = 2;
                    grid_final.current[y_piece.current+1][x_piece.current] = 2;
                    grid_final.current[y_piece.current+2][x_piece.current] = 2;
                    break;
            }
            break;

        case 2:
            /* T piece */
            switch (piece_orientation.current) {
                case 0:
                    grid_final.current[y_piece.current][x_piece.current-1] = 2;
                    grid_final.current[y_piece.current][x_piece.current] = 2;
                    grid_final.current[y_piece.current][x_piece.current+1] = 2;
                    grid_final.current[y_piece.current+1][x_piece.current] = 2;
                    break;

                case 1:
                    grid_final.current[y_piece.current][x_piece.current-1] = 2;
                    grid_final.current[y_piece.current][x_piece.current] = 2;
                    grid_final.current[y_piece.current-1][x_piece.current] = 2;
                    grid_final.current[y_piece.current+1][x_piece.current] = 2;
                    break;

                case 2:
                    grid_final.current[y_piece.current][x_piece.current-1] = 2;
                    grid_final.current[y_piece.current][x_piece.current] = 2;
                    grid_final.current[y_piece.current][x_piece.current+1] = 2;
                    grid_final.current[y_piece.current-1][x_piece.current] = 2;
                    break;

                case 3:
                    grid_final.current[y_piece.current][x_piece.current+1] = 2;
                    grid_final.current[y_piece.current][x_piece.current] = 2;
                    grid_final.current[y_piece.current-1][x_piece.current] = 2;
                    grid_final.current[y_piece.current+1][x_piece.current] = 2;
                    break;
            }
            break;

        case 3:
            /* Square piece */
            grid_final.current[y_piece.current][x_piece.current] = 2;
            grid_final.current[y_piece.current][x_piece.current+1] = 2;
            grid_final.current[y_piece.current+1][x_piece.current] = 2;
            grid_final.current[y_piece.current+1][x_piece.current+1] = 2;
            break;

        case 4:
            /* L piece */
            switch (piece_orientation.current) {
                case 0:
                    grid_final.current[y_piece.current][x_piece.current-1] = 2;
                    grid_final.current[y_piece.current][x_piece.current] = 2;
                    grid_final.current[y_piece.current][x_piece.current+1] = 2;
                    grid_final.current[y_piece.current+1][x_piece.current-1] = 2;
                    break;

                case 1:
                    grid_final.current[y_piece.current-1][x_piece.current] = 2;
                    grid_final.current[y_piece.current][x_piece.current] = 2;
                    grid_final.current[y_piece.current+1][x_piece.current] = 2;
                    grid_final.current[y_piece.current-1][x_piece.current-1] = 2;
                    break;

                case 2:
                    grid_final.current[y_piece.current][x_piece.current-1] = 2;
                    grid_final.current[y_piece.current][x_piece.current] = 2;
                    grid_final.current[y_piece.current][x_piece.current+1] = 2;
                    grid_final.current[y_piece.current-1][x_piece.current+1] = 2;
                    break;

                case 3:
                    grid_final.current[y_piece.current-1][x_piece.current] = 2;
                    grid_final.current[y_piece.current][x_piece.current] = 2;
                    grid_final.current[y_piece.current+1][x_piece.current] = 2;
                    grid_final.current[y_piece.current+1][x_piece.current+1] = 2;
                    break;
            }
            break;
    }
}

export default RenderPiece;