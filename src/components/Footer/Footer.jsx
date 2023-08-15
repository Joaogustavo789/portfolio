import { FooterStyled, ImageStyled } from './styles.jsx';
import GitHubLogo from '../../images/github.png';
import GmailLogo from '../../images/gmail.png';
import LinkedinLogo from '../../images/linkedin.png';
import InstagramLogo from '../../images/instagram.png';

function Footer() {
  const githubLogo = <ImageStyled src={ GitHubLogo } alt="Logo do GitHub" />
  const linkedinLogo = <ImageStyled src={ LinkedinLogo } alt="Logo do Linkedin" />
  const gmailLogo = <ImageStyled src={ GmailLogo } alt="Logo do Gmail" />
  const instagramLogo = <ImageStyled src={ InstagramLogo } alt="Logo do Instagram" />

  const linkToGitHub = 'https://github.com/Joaogustavo789';
  const linkToLinkedin = 'https://www.linkedin.com/in/joao-gustavo-mn/';
  const linkToGmail = '';
  const linkToInstagram = 'https://www.instagram.com/joaogustavomn/';

  return (
    <FooterStyled>
      <section>
        <p>GitHub</p>
        <a href={ linkToGitHub } target="_blank" rel="noopener noreferrer">{ githubLogo }</a>
      </section>
      <section>
        <p>Linkedin</p>
        <a className="Links" href={ linkToLinkedin } target="_blank" rel="noopener noreferrer">{ linkedinLogo }</a>
      </section>
      <section>
        <p>Email</p>
        <a className="Links" href={ linkToGmail } target="_blank" rel="noopener noreferrer">{ gmailLogo }</a>
      </section>
      <section>
        <p>Instagram</p>
        <a className="Links" href={ linkToInstagram } target="_blank" rel="noopener noreferrer">{ instagramLogo }</a>
      </section>
    </FooterStyled>
  )
}

export default Footer;
