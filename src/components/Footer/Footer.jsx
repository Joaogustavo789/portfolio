import { FooterStyled, ImageStyled } from './styles.jsx';
import CardLink from '../helpers/Cards/CardLink.jsx';
import GitHubLogo from '../../images/social/github.png';
import GmailLogo from '../../images/social/gmail.png';
import LinkedinLogo from '../../images/social/linkedin.png';
import InstagramLogo from '../../images/social/instagram.png';

function Footer() {
  const githubLogo = <ImageStyled src={ GitHubLogo } alt="Logo do GitHub" />
  const linkedinLogo = <ImageStyled src={ LinkedinLogo } alt="Logo do Linkedin" />
  const gmailLogo = <ImageStyled src={ GmailLogo } alt="Logo do Gmail" />
  const instagramLogo = <ImageStyled src={ InstagramLogo } alt="Logo do Instagram" />

  const linkToGitHub = 'https://github.com/Joaogustavo789';
  const linkToLinkedin = 'https://www.linkedin.com/in/joao-gustavo-mn/';
  const linkToGmail = 'mailto:jgustavomendonca@gmail.com';
  const linkToInstagram = 'https://www.instagram.com/joaogustavomn/';

  return (
    <FooterStyled>
      <CardLink
        text='Github'
        link={ linkToGitHub }
        image={ githubLogo }
      />
      <CardLink
        text='Linkedin'
        link={ linkToLinkedin }
        image={ linkedinLogo }
      />
      <CardLink
        text='Gmail'
        link={ linkToGmail }
        image={ gmailLogo }
      />
      <CardLink
        text='Instagram'
        link={ linkToInstagram }
        image={ instagramLogo }
      />
    </FooterStyled>
  )
}

export default Footer;
