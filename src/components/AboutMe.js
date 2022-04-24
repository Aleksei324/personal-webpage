import './AboutMe.css';
import imagecode from '../images/mohammad-rahmani-1bNQVGzuy0U-unsplash.jpg';

function AboutMe(){
    return (
        <section className="AboutMe">
            <img src={imagecode} alt='A computer with code and a cup' width='350' height='250'/>
            <div className='sidebyside'>
                <h3>About me</h3>

                <p>Welcome to my webpage, I'm just a guy who likes to develop software and webpages, play games and play bass a little;
                I like to tinker with <i>Linux</i> and open source in general, and I'm changing distros a lot.
                I would like to collaborate on open source projects.</p>

                <p>My favourite language right now is <i>Python</i>. Currently using <i>Visual Studio Codium</i>.
                Feel free to contact me if you want to talk, collaborate or correct me on something.</p>

                <p><b>I have knowledge in software development with technologies such as:</b></p>
                
                <i>
                <ul>
                    <li className='oneLine'>Python</li>
                    <li className='oneLine'>Java</li>
                    <li className='oneLine'>React</li>
                    <li className='oneLine'>SQL</li>
                </ul>
                </i>

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
                </ul>
            </div>
        </section>
    );
}

export default AboutMe;