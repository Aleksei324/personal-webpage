function Restart(started, score, highscore, piece_falling, piece_orientation, x_piece, y_piece) {

    started.current = false;

    if (score.current > highscore.current) {
        highscore.current = score.current;
    }
    
    score.current = 0;
    piece_falling.current = 0;
    piece_orientation.current = 0;
    x_piece.current = 3;
    y_piece.current = 0;
}

export default Restart;