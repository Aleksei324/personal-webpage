import { useCallback, useEffect, useRef } from 'react';
import './Minigame.css';
import Values from './Values.js';
import CreatePiecesList from './CreatePiecesList.js';
import UpdateGrid from './UpdateGrid.js';
import GameOverModalWindow from './GameOverModalWindow.js';
import MoveRight from './MoveRight.js';

function Minigame() {

    /* Grid: A matrix with 16 rows and 8 columns filled with zeroes. */
    const grid_final = useRef(JSON.parse(JSON.stringify(Array(16).fill( new Array(8).fill(0) ))) );
    const started = useRef(false);
    const piecesList = useRef([Math.floor(Math.random() * 4) + 1]);
    const highscore = useRef(0);
    const score = useRef(0);
    const piece_falling = useRef(0); /* Piece falling (0 means no piece) */
    const piece_orientation = useRef(0);
    const x_piece = useRef(3); /* X (Width index) coordinate of piece */
    const y_piece = useRef(0); /* Y (Height index) coordinate of piece */
    const gameOver = useRef(false); /* Activate or deactivate game over screen */
    const timers = useRef([]); /* Array with timers id */

    /*
     * 0: No piece in tile.
     * 1: Normal piece in tile.
     * 2: Playable piece.
    */

    /* Use setter method to force to re-render. */
    const [getValues, reRender] = Values(16,   /* Height (num of rows) */
                                        8,     /* Width (num of columns) */
                                        0.5,   /* Dificulty (Seconds to update grid) */
                                        true); /* Render */

    const StartNPause = () => {
        if (started.current) {
            started.current = false;
        }
        else {
            started.current = true;
            GameLoop();
        }
    }

    const GameLoop = () => {
        /** 
         * Keep a loop updating the next-pieces list
         * and rendering new frames of the game
         */
        console.log('GameLoop - - -')

        if (started.current) {
            if (piecesList.current.length < 1) {
                CreatePiecesList(piecesList);
            }

            UpdateGrid(
                getValues, started, grid_final, piece_falling, piece_orientation, piecesList, highscore, score, x_piece, y_piece, gameOver
                );

            reRender(true);
            timers.current.push( setTimeout(GameLoop, getValues.dificulty * 1000) );
        }
    }

    const KeyboardListener = useCallback((e) => {
        switch (e.key) {
            case 'ArrowLeft':
                break;

            case 'ArrowRight':
                MoveRight(getValues, reRender, grid_final, piece_falling, piece_orientation, x_piece, y_piece, started);
                break;

            case 'ArrowUp':
                break;
            
            default:
                return null;
        }
    }, [getValues, reRender]);

    /* Listen keyboard when subpage is loaded and stop listening when unloaded. */
    useEffect(() => {
        document.addEventListener('keydown', KeyboardListener);
        return () => {
            document.removeEventListener("keydown", KeyboardListener);
            if (!started.current) {
                for (let id of timers.current) {
                    clearTimeout(id);
                }
                timers.current = [];
            }
        }
    },[KeyboardListener]);

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <GameOverModalWindow gameOver={gameOver} reRender={reRender}/>
            <h1 className="titleSubpage">Minigame</h1>
            <button className='buttonMini mar' onClick={StartNPause}>Start &amp; pause</button>

            <div className='Minigame'>
                {grid_final.current.map(
                    (y_grid, i) => (y_grid.map(
                        (x_grid, j) => (<div key={'minigame-tile-'+i+'-'+j} className={grid_final.current[i][j]!==0 ? 'tileMini pieceTile' : 'tileMini'}></div>)
                    ))
                )}
            </div>

            <p className='scoreMini'><b>Highscore:</b> {highscore.current} | <b>Score:</b> {score.current}</p>
            <br/>

            <br/>
        </div>
    );
}

export default Minigame;