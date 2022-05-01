import Restart from './Restart.js';

function CheckPiece(getValues, reRender, temp, started, grid_final, piece_falling, piece_orientation, piecesList, highscore, score, x_piece, y_piece) {
    /**
     * Checks and create one if there is no playable piece,
     * or checks if the piece is able to fall, if not then
     * it convert the piece in obstacles
     */
    console.log('CheckPiece')

    /** If there is no playable piece... */
    if (piece_falling.current === 0) {
        let piece = piecesList.current.pop();

        switch (piece) {
            case 1:
                /** 
                 * NN NN MM MM NN NN NN NN
                 * NN NN MM MM NN NN NN NN
                 * 
                 * I piece
                 */
                if (temp[0][2] === 0 && temp[0][3] === 0 && temp[0][4] === 0 && temp[0][5] === 0) {

                    score.current += 1;
                    piece_falling.current = piece;
                    piece_orientation.current = 0;
                    x_piece.current = 3;
                    y_piece.current = 0;

                }
                else {
                    Restart(getValues, reRender, started, grid_final, score, highscore, piece_falling, piece_orientation, x_piece, y_piece);
                    return Array(getValues.height).fill( Array(getValues.width).fill(0) );
                }
                break;

            case 2:
                /**
                 * NN NN MM MM NN NN
                 * NN NN MM MM NN NN
                 *       NN NN
                 *       NN NN
                 * 
                 * T piece
                 */
                if (temp[0][2] === 0 && temp[0][3] === 0 && temp[0][4] === 0 &&
                                        temp[1][3] === 0) {

                    score.current += 1;
                    piece_falling.current = piece;
                    piece_orientation.current = 0;
                    x_piece.current = 3;
                    y_piece.current = 0;

                }
                else {
                    Restart(getValues, reRender, started, grid_final, score, highscore, piece_falling, piece_orientation, x_piece, y_piece);
                    return Array(getValues.height).fill( Array(getValues.width).fill(0) );
                }
                break;

            case 3:
                /**
                 * MM MM NN NN
                 * MM MM NN NN
                 * NN NN NN NN
                 * NN NN NN NN
                 * 
                 * Square piece
                 */
                if (temp[0][3] === 0 && temp[0][4] === 0 &&
                    temp[1][3] === 0 && temp[1][4] === 0) {

                    score.current += 1;
                    piece_falling.current = piece;
                    piece_orientation.current = 0;
                    x_piece.current = 3;
                    y_piece.current = 0;

                }
                else {
                    Restart(getValues, reRender, started, grid_final, score, highscore, piece_falling, piece_orientation, x_piece, y_piece);
                    return Array(getValues.height).fill( Array(getValues.width).fill(0) );
                }
                break;

            case 4:
                /**
                 * NN NN MM MM NN NN
                 * NN NN MM MM NN NN
                 * NN NN
                 * NN NN
                 * 
                 * L piece
                 */
                if (temp[0][2] === 0 && temp[0][3] === 0 && temp[0][4] === 0 &&
                    temp[1][2] === 0) {

                    score.current += 1;
                    piece_falling.current = piece;
                    piece_orientation.current = 0;
                    x_piece.current = 3;
                    y_piece.current = 0;
                }
                else {
                    Restart(getValues, reRender, started, grid_final, score, highscore, piece_falling, piece_orientation, x_piece, y_piece);
                    return Array(getValues.height).fill( Array(getValues.width).fill(0) );
                }
                break;
        }
    }
    /** If there is no more array lines below the piece... */
    else if (y_piece.current + 1 > getValues.height - 1) {
        switch (piece_falling.current) {
            case 1:
                /* I piece */
                switch (piece_orientation.current) {
                    case 0:
                    case 2:
                        temp[y_piece.current][x_piece.current-1] = 1;
                        temp[y_piece.current][x_piece.current] = 1;
                        temp[y_piece.current][x_piece.current+1] = 1;
                        temp[y_piece.current][x_piece.current+2] = 1;
                        break;
                }
                break;

            case 2:
                /* T piece */
                switch (piece_orientation.current) {
                    case 2:
                        temp[y_piece.current][x_piece.current-1] = 1;
                        temp[y_piece.current][x_piece.current] = 1;
                        temp[y_piece.current][x_piece.current+1] = 1;
                        temp[y_piece.current-1][x_piece.current] = 1;
                        break;
                }
                break;

            case 4:
                /* L piece */
                switch (piece_orientation.current) {
                    case 2:
                        temp[y_piece.current][x_piece.current-1] = 1;
                        temp[y_piece.current][x_piece.current] = 1;
                        temp[y_piece.current][x_piece.current+1] = 1;
                        temp[y_piece.current-1][x_piece.current+1] = 1;
                        break;
                }
                break;
        }
        piece_falling.current = 0;
        piece_orientation.current = 0;
        x_piece.current = 3;
        y_piece.current = 0;
    }
    else if (y_piece.current + 2 > getValues.height - 1) {
        switch (piece_falling.current) {
            case 2:
                /* T piece */
                switch (piece_orientation.current) {
                    case 0:
                        temp[y_piece.current][x_piece.current-1] = 1;
                        temp[y_piece.current][x_piece.current] = 1;
                        temp[y_piece.current][x_piece.current+1] = 1;
                        temp[y_piece.current+1][x_piece.current] = 1;

                        piece_falling.current = 0;
                        piece_orientation.current = 0;
                        x_piece.current = 3;
                        y_piece.current = 0;
                        break;

                    case 1:
                        temp[y_piece.current][x_piece.current-1] = 1;
                        temp[y_piece.current][x_piece.current] = 1;
                        temp[y_piece.current-1][x_piece.current] = 1;
                        temp[y_piece.current+1][x_piece.current] = 1;

                        piece_falling.current = 0;
                        piece_orientation.current = 0;
                        x_piece.current = 3;
                        y_piece.current = 0;
                        break;

                    case 3:
                        temp[y_piece.current][x_piece.current+1] = 1;
                        temp[y_piece.current][x_piece.current] = 1;
                        temp[y_piece.current-1][x_piece.current] = 1;
                        temp[y_piece.current+1][x_piece.current] = 1;

                        piece_falling.current = 0;
                        piece_orientation.current = 0;
                        x_piece.current = 3;
                        y_piece.current = 0;
                        break;
                }
                break;

            case 3:
                /* Square piece */
                temp[y_piece.current][x_piece.current] = 1;
                temp[y_piece.current][x_piece.current+1] = 1;
                temp[y_piece.current+1][x_piece.current] = 1;
                temp[y_piece.current+1][x_piece.current+1] = 1;

                piece_falling.current = 0;
                piece_orientation.current = 0;
                x_piece.current = 3;
                y_piece.current = 0;
                break;

            case 4:
                /* L piece */
                switch (piece_orientation.current) {
                    case 0:
                        temp[y_piece.current][x_piece.current-1] = 1;
                        temp[y_piece.current][x_piece.current] = 1;
                        temp[y_piece.current][x_piece.current+1] = 1;
                        temp[y_piece.current+1][x_piece.current-1] = 1;

                        piece_falling.current = 0;
                        piece_orientation.current = 0;
                        x_piece.current = 3;
                        y_piece.current = 0;
                        break;

                    case 1:
                        temp[y_piece.current-1][x_piece.current] = 1;
                        temp[y_piece.current][x_piece.current] = 1;
                        temp[y_piece.current+1][x_piece.current] = 1;
                        temp[y_piece.current-1][x_piece.current-1] = 1;

                        piece_falling.current = 0;
                        piece_orientation.current = 0;
                        x_piece.current = 3;
                        y_piece.current = 0;
                        break;
                    
                    case 3:
                        temp[y_piece.current-1][x_piece.current] = 1;
                        temp[y_piece.current][x_piece.current] = 1;
                        temp[y_piece.current+1][x_piece.current] = 1;
                        temp[y_piece.current+1][x_piece.current+1] = 1;

                        piece_falling.current = 0;
                        piece_orientation.current = 0;
                        x_piece.current = 3;
                        y_piece.current = 0;
                        break;
                }
                break;
        }
    }
    else if (y_piece.current + 3 > getValues.height - 1) {
        switch (piece_falling.current) {
            case 1:
                /* I piece */
                switch (piece_orientation.current) {
                    case 1:
                    case 3:
                        temp[y_piece.current-1][x_piece.current] = 1;
                        temp[y_piece.current][x_piece.current] = 1;
                        temp[y_piece.current+1][x_piece.current] = 1;
                        temp[y_piece.current+2][x_piece.current] = 1;

                        piece_falling.current = 0;
                        piece_orientation.current = 0;
                        x_piece.current = 3;
                        y_piece.current = 0;
                        break;
                }
                break;
        }
    }

    /* Checks if the piece can go down one line */
    if (piece_falling.current !== 0) {
        switch (piece_falling.current) {
            case 1:
                /* I piece */
                switch (piece_orientation.current) {
                    case 0:
                    case 2:
                        /* If there is space below the piece... */
                        if (temp[y_piece.current+1][x_piece.current-1] === 0 && 
                            temp[y_piece.current+1][x_piece.current] === 0 && 
                            temp[y_piece.current+1][x_piece.current+1] === 0 && 
                            temp[y_piece.current+1][x_piece.current+2] === 0) {
                            
                            y_piece.current += 1;
                        }
                        /* If there is an obstruction below the piece... */
                        else {
                            temp[y_piece.current][x_piece.current-1] = 1;
                            temp[y_piece.current][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current+1] = 1;
                            temp[y_piece.current][x_piece.current+2] = 1;

                            piece_falling.current = 0;
                            piece_orientation.current = 0;
                            x_piece.current = 3;
                            y_piece.current = 0;
                        }
                        break;

                    case 1:
                    case 3:
                        /* If there is space below the piece... */
                        if (temp[y_piece.current+3][x_piece.current] === 0) {
                            
                            y_piece.current += 1;
                        }
                        /* If there is an obstruction below the piece... */
                        else {
                            temp[y_piece.current-1][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current] = 1;
                            temp[y_piece.current+1][x_piece.current] = 1;
                            temp[y_piece.current+2][x_piece.current] = 1;

                            piece_falling.current = 0;
                            piece_orientation.current = 0;
                            x_piece.current = 3;
                            y_piece.current = 0;
                        }
                        break;
                }
                break;

            case 2:
                /* T piece */
                switch (piece_orientation.current) {
                    case 0:
                        /* If there is space below the piece... */
                        if (temp[y_piece.current+1][x_piece.current-1] === 0 && 
                            temp[y_piece.current+1][x_piece.current+1] === 0 && 
                            temp[y_piece.current+2][x_piece.current] === 0) {
                            
                            y_piece.current += 1;
                        }
                        /* If there is an obstruction below the piece... */
                        else {
                            temp[y_piece.current][x_piece.current-1] = 1;
                            temp[y_piece.current][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current+1] = 1;
                            temp[y_piece.current+1][x_piece.current] = 1;

                            piece_falling.current = 0;
                            piece_orientation.current = 0;
                            x_piece.current = 3;
                            y_piece.current = 0;
                        }
                        break;

                    case 1:
                        /* If there is space below the piece... */
                        if (temp[y_piece.current+2][x_piece.current] === 0 && 
                            temp[y_piece.current+1][x_piece.current-1] === 0) {
                            
                            y_piece.current += 1;
                        }
                        /* If there is an obstruction below the piece... */
                        else {
                            temp[y_piece.current-1][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current] = 1;
                            temp[y_piece.current+1][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current-1] = 1;

                            piece_falling.current = 0;
                            piece_orientation.current = 0;
                            x_piece.current = 3;
                            y_piece.current = 0;
                        }
                        break;

                    case 2:
                        /* If there is space below the piece... */
                        if (temp[y_piece.current+1][x_piece.current-1] === 0 && 
                            temp[y_piece.current+1][x_piece.current] === 0 && 
                            temp[y_piece.current+1][x_piece.current+1] === 0) {
                            
                            y_piece.current += 1;
                        }
                        /* If there is an obstruction below the piece... */
                        else {
                            temp[y_piece.current][x_piece.current-1] = 1;
                            temp[y_piece.current][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current+1] = 1;
                            temp[y_piece.current-1][x_piece.current] = 1;

                            piece_falling.current = 0;
                            piece_orientation.current = 0;
                            x_piece.current = 3;
                            y_piece.current = 0;
                        }
                        break;

                    case 3:
                        /* If there is space below the piece... */
                        if (temp[y_piece.current+2][x_piece.current] === 0 && 
                            temp[y_piece.current+1][x_piece.current+1] === 0) {
                            
                            y_piece.current += 1;
                        }
                        /* If there is an obstruction below the piece... */
                        else {
                            temp[y_piece.current-1][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current] = 1;
                            temp[y_piece.current+1][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current+1] = 1;

                            piece_falling.current = 0;
                            piece_orientation.current = 0;
                            x_piece.current = 3;
                            y_piece.current = 0;
                        }
                        break;
                }
                break;

            case 3:
                /* Square piece */
                /* If there is space below the piece... */
                if (temp[y_piece.current+2][x_piece.current] === 0 && 
                    temp[y_piece.current+2][x_piece.current+1] === 0) {
                    
                    y_piece.current += 1;
                }
                /* If there is an obstruction below the piece... */
                else {
                    temp[y_piece.current][x_piece.current] = 1;
                    temp[y_piece.current][x_piece.current+1] = 1;
                    temp[y_piece.current+1][x_piece.current] = 1;
                    temp[y_piece.current+1][x_piece.current+1] = 1;

                    piece_falling.current = 0;
                    piece_orientation.current = 0;
                    x_piece.current = 3;
                    y_piece.current = 0;
                }
                break;
            
            case 4:
                /* L piece */
                switch (piece_orientation.current) {
                    case 0:
                        /* If there is space below the piece... */
                        if (temp[y_piece.current+1][x_piece.current] === 0 && 
                            temp[y_piece.current+1][x_piece.current+1] === 0 && 
                            temp[y_piece.current+2][x_piece.current-1] === 0) {
                            
                            y_piece.current += 1;
                        }
                        /* If there is an obstruction below the piece... */
                        else {
                            temp[y_piece.current][x_piece.current-1] = 1;
                            temp[y_piece.current][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current+1] = 1;
                            temp[y_piece.current+1][x_piece.current-1] = 1;

                            piece_falling.current = 0;
                            piece_orientation.current = 0;
                            x_piece.current = 3;
                            y_piece.current = 0;
                        }
                        break;
                    case 1:
                        /* If there is space below the piece... */
                        if (temp[y_piece.current+2][x_piece.current] === 0 && 
                            temp[y_piece.current][x_piece.current-1] === 0) {
                            
                            y_piece.current += 1;
                        }
                        /* If there is an obstruction below the piece... */
                        else {
                            temp[y_piece.current-1][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current] = 1;
                            temp[y_piece.current+1][x_piece.current] = 1;
                            temp[y_piece.current-1][x_piece.current-1] = 1;

                            piece_falling.current = 0;
                            piece_orientation.current = 0;
                            x_piece.current = 3;
                            y_piece.current = 0;
                        }
                        break;

                    case 2:
                        /* If there is space below the piece... */
                        if (temp[y_piece.current+1][x_piece.current-1] === 0 && 
                            temp[y_piece.current+1][x_piece.current] === 0 && 
                            temp[y_piece.current+1][x_piece.current+1] === 0) {
                            
                            y_piece.current += 1;
                        }
                        /* If there is an obstruction below the piece... */
                        else {
                            temp[y_piece.current][x_piece.current-1] = 1;
                            temp[y_piece.current][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current+1] = 1;
                            temp[y_piece.current-1][x_piece.current+1] = 1;

                            piece_falling.current = 0;
                            piece_orientation.current = 0;
                            x_piece.current = 3;
                            y_piece.current = 0;
                        }
                        break;

                    case 3:
                        /* If there is space below the piece... */
                        if (temp[y_piece.current+2][x_piece.current] === 0 && 
                            temp[y_piece.current+2][x_piece.current+1] === 0) {
                            
                            y_piece.current += 1;
                        }
                        /* If there is an obstruction below the piece... */
                        else {
                            temp[y_piece.current-1][x_piece.current] = 1;
                            temp[y_piece.current][x_piece.current] = 1;
                            temp[y_piece.current+1][x_piece.current] = 1;
                            temp[y_piece.current+1][x_piece.current+1] = 1;

                            piece_falling.current = 0;
                            piece_orientation.current = 0;
                            x_piece.current = 3;
                            y_piece.current = 0;
                        }
                        break;
                }
                break;
        }
    }
    return temp;
}

export default CheckPiece;