function Restart(getValues, reRender, started, grid_final, score, highscore, piece_falling, piece_orientation, x_piece, y_piece) {

    started.current = false;

    grid_final.current = JSON.parse(JSON.stringify(Array(getValues.height).fill( Array(getValues.width).fill(0) )));

    if (score.current > highscore.current) {
        highscore.current = score.current;
    }
    
    score.current = 0;
    piece_falling.current = 0;
    piece_orientation.current = 0;
    x_piece.current = 3;
    y_piece.current = 0;

    reRender({render: true});
}

export default Restart;