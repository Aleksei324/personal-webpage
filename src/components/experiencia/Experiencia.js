import './Experiencia.css';
import ExperienciaSection from './ExperienciaSection.js';

import imagereact from '../../images/react.png';
import imagecss from '../../images/css.png';
import imagepy from '../../images/py.png';

function Experiencia() {
    return (
        <div>
            <br/>
            <section className='flex'>
                <div className='border'>
                    <ExperienciaSection title="Numfinity"
                    text="A module for Python 3 with which you can
                        create dynamically sized numbers; in other words,
                        increase their maximum decimal or digit capacity
                        to whatever is required."
                    link="https://github.com/Aleksei324/Numfinity"/>
                    <img className='iconGrow' src={imagepy} alt='Python icon' width='60' height='60'/>
                </div>

                <div className='border'>
                    <ExperienciaSection title="Numfinity"
                    text="A module for Python 3 with which you can
                        create dynamically sized numbers; in other words,
                        increase their maximum decimal or digit capacity
                        to whatever is required."
                    link="https://github.com/Aleksei324/Numfinity"/>
                    <img className='iconGrow' src={imagepy} alt='Python icon' width='60' height='60'/>
                </div>

                <div className='border'>
                    <ExperienciaSection title="Numfinity"
                    text="A module for Python 3 with which you can
                        create dynamically sized numbers; in other words,
                        increase their maximum decimal or digit capacity
                        to whatever is required."
                    link="https://github.com/Aleksei324/Numfinity"/>
                    <img className='iconGrow' src={imagepy} alt='Python icon' width='60' height='60'/>
                </div>
            </section>

            <section className='flex'>
                <div className="space"></div>

                <div className="border">
                    <ExperienciaSection title="This webpage!"
                    text="A webpage I did using React."
                    link="https://github.com/Aleksei324/personal-webpage"/>
                    <img className='iconGrow' src={imagereact} alt='React icon' width='60' height='60'/>
                    <img className='iconGrow' src={imagecss} alt='CSS icon' width='60' height='60'/>
                </div>

                <div className="space"></div>
            </section>

            <p>... and some more in <a className='blink' href='https://github.com/Aleksei324' title='Link to my personal Github.'>my Github.</a></p>
            <br/>
        </div>
    );
}

export default Experiencia;