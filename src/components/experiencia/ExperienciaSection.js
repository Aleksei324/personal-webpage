import './ExperienciaSection.css';

function ExperienciaSection(props) {
    return (
        <div className='flex ExperienciaSection'>

            <div className='sideBySide'>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
            
            <a className='ExperienciaButton' href={props.link} title="Link to the project">
                View<br/>
                source<br/>
                code
            </a>
        </div>
    );
}

export default ExperienciaSection;