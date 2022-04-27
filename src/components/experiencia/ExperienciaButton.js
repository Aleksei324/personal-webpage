import './ExperienciaButton.css';

function ExperienciaButton(props) {
    return (
        <a target='_blank'
            rel="noreferrer"
            className='ExperienciaButton mar'
            href={props.link}
            title="Link to the project">
            View<br/>
            source<br/>
            code
        </a>
    );
}

export default ExperienciaButton;