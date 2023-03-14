import RemovePlayablePiece from "./RemovePlayablePiece.js";
import RenderPiece from "./RenderPiece";

function Rotate(getValues, reRender, piece_falling, piece_orientation, grid_final, x_piece, y_piece, started) {

	if (piece_falling.current !== 0 && started.current) {

		/* Makes a temporary copy of the grid array */
		let temp = JSON.parse(JSON.stringify(grid_final.current));

		switch (piece_falling.current) {
			case 1:
				/* I piece */
				switch (piece_orientation.current) {
					case 0:
					case 2:
						/* Rotate to 1 - 3 if there is space... */
						if (y_piece.current-1 >= 0 && y_piece.current+2 <= getValues.height - 1) {

							if (temp[y_piece.current-1][x_piece.current] !== 1 &&
									temp[y_piece.current][x_piece.current] !== 1 &&
									temp[y_piece.current+1][x_piece.current] !== 1 &&
									temp[y_piece.current+2][x_piece.current] !== 1) {

								piece_orientation.current = 1;

								grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
								RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
								reRender(true);
							}
						}
						break;

					case 1:
					case 3:
						/* Rotate to 0 - 2 if there is space... */
						if (x_piece.current-1 >= 0 && x_piece.current+2 <= getValues.width - 1) {

							if (temp[y_piece.current][x_piece.current-1] !== 1 &&
									temp[y_piece.current][x_piece.current] !== 1 &&
									temp[y_piece.current][x_piece.current+1] !== 1 &&
									temp[y_piece.current][x_piece.current+2] !== 1) {

								piece_orientation.current = 0;

								grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
								RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
								reRender(true);
							}
						}
						break;

					default:
						break;
				}
				break;

			case 2:
				/* T piece */
				switch (piece_orientation.current) {
					case 0:
						/* Rotate to 1 if there is space... */
						if (y_piece.current-1 >= 0) {

							if (temp[y_piece.current][x_piece.current-1] !== 1 &&
									temp[y_piece.current][x_piece.current] !== 1 &&
									temp[y_piece.current-1][x_piece.current] !== 1 &&
									temp[y_piece.current+1][x_piece.current] !== 1) {

								piece_orientation.current = 1;

								grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
								RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
								reRender(true);
							}
						}
						break;

					case 1:
						/* Rotate to 2 if there is space... */
						if (x_piece.current+1 <= getValues.width - 1) {

							if (temp[y_piece.current][x_piece.current-1] !== 1 &&
									temp[y_piece.current][x_piece.current] !== 1 &&
									temp[y_piece.current][x_piece.current+1] !== 1 &&
									temp[y_piece.current-1][x_piece.current] !== 1) {

								piece_orientation.current = 2;

								grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
								RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
								reRender(true);
							}
						}
						break;

					case 2:
						/* Rotate to 3 if there is space... */
						if (y_piece.current+1 <= getValues.height - 1) {

							if (temp[y_piece.current][x_piece.current+1] !== 1 &&
									temp[y_piece.current][x_piece.current] !== 1 &&
									temp[y_piece.current-1][x_piece.current] !== 1 &&
									temp[y_piece.current+1][x_piece.current] !== 1) {

								piece_orientation.current = 3;

								grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
								RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
								reRender(true);
							}
						}
						break;

					case 3:
						/* Rotate to 0 if there is space... */
						if (x_piece.current-1 >= 0) {

							if (temp[y_piece.current][x_piece.current-1] !== 1 &&
									temp[y_piece.current][x_piece.current] !== 1 &&
									temp[y_piece.current][x_piece.current+1] !== 1 &&
									temp[y_piece.current+1][x_piece.current] !== 1) {

								piece_orientation.current = 0;

								grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
								RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
								reRender(true);
							}
						}
						break;

					default:
						break;
				}
				break;

			case 3:
				/* Square piece */
				break;

			case 4:
				/* L piece */
				switch (piece_orientation.current) {
					case 0:
						/* Rotate to 1 if there is space... */
						if (y_piece.current-1 >= 0) {

							if (temp[y_piece.current-1][x_piece.current] !== 1 &&
									temp[y_piece.current][x_piece.current] !== 1 &&
									temp[y_piece.current+1][x_piece.current] !== 1 &&
									temp[y_piece.current-1][x_piece.current-1] !== 1) {

								piece_orientation.current = 1;

								grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
								RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
								reRender(true);
							}
						}
						break;

					case 1:
						/* Rotate to 2 if there is space... */
						if (x_piece.current+1 <= getValues.width - 1) {

							if (temp[y_piece.current][x_piece.current-1] !== 1 &&
									temp[y_piece.current][x_piece.current] !== 1 &&
									temp[y_piece.current][x_piece.current+1] !== 1 &&
									temp[y_piece.current-1][x_piece.current+1] !== 1) {

								piece_orientation.current = 2;

								grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
								RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
								reRender(true);
							}
						}
						break;

					case 2:
						/* Rotate to 3 if there is space... */
						if (y_piece.current+1 <= getValues.height - 1) {

							if (temp[y_piece.current-1][x_piece.current] !== 1 &&
									temp[y_piece.current][x_piece.current] !== 1 &&
									temp[y_piece.current+1][x_piece.current] !== 1 &&
									temp[y_piece.current+1][x_piece.current+1] !== 1) {

								piece_orientation.current = 3;

								grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
								RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
								reRender(true);
							}
						}
						break;

					case 3:
						/* Rotate to 0 if there is space... */
						if (x_piece.current-1 >= 0) {

							if (temp[y_piece.current][x_piece.current-1] !== 1 &&
									temp[y_piece.current][x_piece.current] !== 1 &&
									temp[y_piece.current][x_piece.current+1] !== 1 &&
									temp[y_piece.current+1][x_piece.current-1] !== 1) {

								piece_orientation.current = 0;

								grid_final.current = JSON.parse(JSON.stringify(RemovePlayablePiece(getValues, temp)));
								RenderPiece(piece_falling, piece_orientation, grid_final, x_piece, y_piece);
								reRender(true);
							}
						}
						break;

					default:
						break;
				}
				break;

			default:
				break;
		}
	}
}

export default Rotate;
