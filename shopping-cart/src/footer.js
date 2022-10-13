import githublogo from './assets/GitHub-Mark-Light-64px.png'

function Footer () {
    return (
        <div className="footer-wrapper"> 
            <div className='content-wrapper'>
                    <div className="made-by">Made By Luke Jennings 2022
                    <a href='https://github.com/LukeJennings1'>
                    <img id = 'github-logo' src={githublogo} ></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;