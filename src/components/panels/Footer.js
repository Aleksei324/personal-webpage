import './Footer.css';

function Footer(){
    return (
        <footer className="Footer">
            <p>Camilo Franco Moya - 2022</p>
            <p>Images by <a target='_blank'
                            rel="noreferrer"
                            className='whiteLink'
                            href="https://unsplash.com/@sickle"
                            title='Link to the author'>Sergey Pesterev</a> and <a target='_blank'
                            rel="noreferrer"
                            className='whiteLink'
                            href="https://unsplash.com/@afgprogrammer"
                            title='Link to the author'>Mohammad Rahmani</a> on <a target='_blank'
                            rel="noreferrer"
                            className='whiteLink'
                            href="https://unsplash.com"
                            title='Unsplash webpage'>Unsplash</a></p>
            
            <p>Icons by <a target='_blank'
                            rel="noreferrer"
                            className='whiteLink'
                            href="https://www.flaticon.com/authors/freepik"
                            title="Link to the author">Freepik</a> on <a target='_blank'
                            rel="noreferrer"
                            className='whiteLink'
                            href="https://www.flaticon.com"
                            title="Flaticon webpage">Flaticon</a></p>
        </footer>
    );
}

export default Footer;