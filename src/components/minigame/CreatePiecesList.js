function CreatePiecesList(piecesList) {
    /**
     * Create a new list with the next pieces
     * to use when the actual one is used/removed
     * 
     * There won't be repeated pieces in the list
     */
    
    /*
     * 1: I piece
     * 2: T piece
     * 3: Square piece
     * 4: L piece
     */

    let result = [];
    let rand_piece = Math.floor(Math.random() * 4) + 1;
    let rand = Math.floor(Math.random() * 2);
    let last_piece = 0;

    result.push(rand_piece);
    last_piece = rand_piece;

    while (result.length < 4) {

        switch (rand) {
            case 0:
                if (last_piece === 4) {
                    last_piece = 1;
                }
                else {
                    last_piece += 1;
                }
                result.push(last_piece);
                break;

            case 1:
                if (last_piece === 1) {
                    last_piece = 4;
                }
                else {
                    last_piece -= 1;
                }
                result.push(last_piece);
                break;
        }
    }

    piecesList.current = [...result];
}

export default CreatePiecesList;