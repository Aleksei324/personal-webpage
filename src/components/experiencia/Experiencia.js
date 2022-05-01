import './Experiencia.css';
import ExperienciaButton from './ExperienciaButton.js';

import imagereact from '../../images/react.png';
import imagecss from '../../images/css.png';
import imagepy from '../../images/py.png';
import imagesql from '../../images/sql.png';
import imagejava from '../../images/java.png';

function Experiencia() {
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h1 className='titleSubpage'>Some projects</h1>
            <section className='Experiencia flex'>
                
                <div className='border flex'>
                    <div className='mar'>
                        <h1>Numfinity</h1>
                        <p><i>Work in progress project:</i> A module
                        for <i>Python 3</i> with which you can create dynamically
                        sized numbers; in other words, increase their maximum
                        decimal or digit capacity to whatever is required.</p>
                        <img className='iconGrow' src={imagepy} alt='Python icon' title='Python 3' width='32' height='32'/>
                    </div>
                    <ExperienciaButton link="https://github.com/Aleksei324/Numfinity"/>
                </div>

                <div className='border flex'>
                    <div className='mar'>
                        <h1>Betterzon</h1>
                        <p><i>Innovation prototype as a university
                        project:</i> An <i>Android</i> application
                        to communicate via chat to construction
                        professionals with people who need their
                        services, in addition to having a section
                        where you can check prices of construction
                        materials. It was built with <i>Java</i> and
                        a <i>MySQL</i> database.</p>
                        <img className='iconGrow' src={imagejava} alt='Java icon' title='Java 8' width='32' height='32'/>
                        <img className='iconGrow' src={imagesql} alt='SQL icon' title='MySQL' width='32' height='32'/>
                    </div>
                    <ExperienciaButton link="https://github.com/Aleksei324/Betterzon"/>
                </div>

                <div className="border flex">
                    <div className='mar'>
                        <h1>This webpage!</h1>
                        <p>Practice website that I built by myself
                        with my personal information, data about
                        some of my own projects and a mini-game.
                        It is built in <i>React</i>.</p>
                        <img className='iconGrow' src={imagereact} alt='React icon' title='React' width='32' height='32'/>
                        <img className='iconGrow' src={imagecss} alt='CSS icon' title='CSS 3' width='32' height='32'/>
                    </div>
                    <ExperienciaButton link="https://github.com/Aleksei324/personal-webpage"/>
                </div>

            </section>

            <br/>
            <p>... and some more in <a target='_blank' rel="noreferrer" href='https://github.com/Aleksei324' title='Link to my personal Github.'>my Github.</a></p>
            <br/>
            
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>
            <br/><br/>
            
        </div>
    );
}

export default Experiencia;