import './GameOverModalWindow.css';

function GameOverModalWindow(props) {

    const deactivateGameOver = () => {
        props.gameOver.current = false;
        props.reRender(true);
    }

    return (
        <div className={props.gameOver.current ? 'blackOverlayGameOver' : 'blackOverlayGameOver gameOverInactive'}>
            <div className="GameOverModalWindow">
                Game over<br/>
                <button className='buttonMini mar' onClick={deactivateGameOver}>OK</button>
            </div>
        </div>
    );
}

export default GameOverModalWindow;