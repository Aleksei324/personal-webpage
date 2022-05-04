function RemoveLine(getValues, grid_final, score) {
    for (let i=0; i<getValues.height; i++) {
        if ( !(grid_final.current[i].includes(0)) ) {
            grid_final.current.splice(i, 1);
            grid_final.current.splice(0, 0, JSON.parse(JSON.stringify( Array(8).fill(0) )) );
            score.current += 10;
        }
    }
}

export default RemoveLine;