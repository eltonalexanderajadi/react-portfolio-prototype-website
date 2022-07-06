import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Instagram } from '@mui/icons-material';

const HeaderSocials = () => {
  return (
    <div className='header__socials'> 
        <a href = "https://linkedin.com" target="_blank"> <LinkedInIcon /> </a>
        <a href = "https://github.com" target="_blank"> <GitHubIcon /> </a>
        <a href = "https://dribble.com" target="_blank"> <Instagram /> </a>
    </div>
  )
}

export default HeaderSocials