import './ExperienciaSection.css';

function ExperienciaSection(props) {
    return (
        <div className='flex'>

            <div className='sideBySide'>
                <h1>{props.title}</h1>
                <p className='textExp'>{props.text}</p>
            </div>
            
            <a target='_blank' rel="noreferrer" className='ExperienciaButton' href={props.link} title="Link to the project">
                View<br/>
                source<br/>
                code
            </a>
        </div>
    );
}

export default ExperienciaSection;