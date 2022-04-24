import './Panel.css';
import { Link } from 'react-router-dom';

function Panel(){
    return (
        <header className="Panel">
            <nav>
                <Link to='/' className='blink'>Main&nbsp;page</Link>
                <Link to='/experience' className='blink'>My&nbsp;experience</Link>
                <Link to='/education' className='blink'>My&nbsp;education</Link>
            </nav>
        </header>
    );
}

export default Panel;