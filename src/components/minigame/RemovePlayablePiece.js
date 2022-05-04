function RemovePlayablePiece(getValues, temp) {

    for (let i=0; i<getValues.height; i++) {
        if (temp[i].includes(2)) {
            for (let j=0; j<getValues.width; j++) {

                if (temp[i][j] === 2) {
                    temp[i][j] = 0;
                }

            }
        }
    }

    return temp;
}

export default RemovePlayablePiece;