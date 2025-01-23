import GitHubButton from 'react-github-btn'


const Footer = () => {
    return (
        <footer className="footer">


            <div className='copyright'>
                <p className='px'> If you found this useful, you can buy me a coffee ☕️ or give a follow ✨ </p>
                <GitHubButton href="https://github.com/raghavpatidar" data-color-scheme="no-preference: dark; light: light_high_contrast; dark: dark_high_contrast;" data-size="small" aria-label="Follow @raghavpatidar on GitHub">Follow </GitHubButton>

            </div>
            <div className='copyright'>
                <p className='px'> ©  Raghav Patidar.</p>
                <img src="https://visitor-badge.glitch.me/badge?page_id=cfladerraghav"></img>
            </div>
        </footer>
    )
}
export default Footer;