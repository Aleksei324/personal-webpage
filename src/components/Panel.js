import './Panel.css';

function Panel(){
    return (
        <header className="Panel">
            <nav>
                <a className='blink' href='#' title=''>Main&nbsp;page</a>
                <a className='blink' href='#'>My&nbsp;experience</a>
                <a className='blink' href='#'>My&nbsp;education</a>
            </nav>
        </header>
    );
}

export default Panel;