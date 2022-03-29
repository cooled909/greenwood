import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBG, VideoBG, HeroContent, HeroH1, HeroP } from './heroelements'

const HeroSection = () => {
  return (
    <HeroContainer id="home">
        <HeroBG>
            <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBG>
        <HeroContent>
            <HeroH1>
                Welcome to Greenwood Anime Society!
            </HeroH1>
            <HeroP>
                It ain't green if it ain't Greenwood
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection