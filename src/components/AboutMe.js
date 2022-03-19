import './AboutMe.css';
import imagecode from '../images/mohammad-rahmani-1bNQVGzuy0U-unsplash.jpg';

function AboutMe(){
    return (
        <section className="AboutMe">
            <img src={imagecode} alt='A computer with code and a cup' width='350' height='250'/>
            <div className='sidebyside'>
                <h3>About me</h3>
                Fifth semester student of computer engineering at <i>Universidad Autonoma de Occidente</i>,
                who received a platinum scholarship, with knowledge in software development with
                technologies such as <i>Python</i>, <i>Java</i>, <i>React</i> and <i>SQL.</i>
            </div>
            <div className='rside'>
                <h3>Contact</h3>
                <ul>
                    <li>
                        Github:
                        <a className='blink' href='https://github.com/Aleksei324' title='Link to my personal Github.'>Aleksei324</a>
                    </li>
                    <li>
                        LinkedIn:
                        <a className='blink' href='https://www.linkedin.com/in/aleksei324' title='Link to my personal LinkedIn.'>Aleksei324</a>
                    </li>
                    <li>
                        Email:
                        <a className='blink' href='#' title='My email.'>example@example</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default AboutMe;