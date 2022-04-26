import './Experiencia.css';
import ExperienciaSection from './ExperienciaSection.js';

import imagereact from '../../images/react.png';
import imagecss from '../../images/css.png';
import imagepy from '../../images/py.png';
import imagesql from '../../images/sql.png';
import imagejava from '../../images/java.png';

function Experiencia() {
    return (
        <div>
            <br/>
            <section className='flex'>
                <div className='border'>
                    <ExperienciaSection title="Numfinity"
                    text="Work in progress project: A module for Python 3
                        with which you can create dynamically sized
                        numbers; in other words, increase their maximum
                        decimal or digit capacity to whatever is required."
                    link="https://github.com/Aleksei324/Numfinity"/>
                    <img className='iconGrow' src={imagepy} alt='Python icon' width='32' height='32'/>
                </div>

                <div className='border'>
                    <ExperienciaSection title="Betterzon"
                    text="Innovation prototype as a university project:
                        An Android application to communicate via chat
                        to construction professionals with people who
                        need their services, in addition to having a
                        section where you can check prices of
                        construction materials. It was built with Java
                        and a MySQL database."
                    link="https://github.com/Aleksei324/Betterzon"/>
                    <img className='iconGrow' src={imagejava} alt='Java icon' width='32' height='32'/>
                    <img className='iconGrow' src={imagesql} alt='SQL icon' width='32' height='32'/>
                </div>

            </section>

            <section className='flex'>
                <div className="space"></div>

                <div className="border">
                    <ExperienciaSection title="This webpage!"
                    text="Practice website that I built by myself
                        with my personal information, data about
                        some of my own projects and a mini-game.
                        It is built in React."
                    link="https://github.com/Aleksei324/personal-webpage"/>
                    <img className='iconGrow' src={imagereact} alt='React icon' width='32' height='32'/>
                    <img className='iconGrow' src={imagecss} alt='CSS icon' width='32' height='32'/>
                </div>

                <div className="space"></div>
            </section>

            <p>... and some more in <a target='_blank' rel="noreferrer" href='https://github.com/Aleksei324' title='Link to my personal Github.'>my Github.</a></p>
            <br/>
        </div>
    );
}

export default Experiencia;