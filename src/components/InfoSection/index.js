import React from 'react'
import { Column2, InfoContainer, InfoWrapper, Column1, TextWrapper, TopLine, Heading, Subtitle, InfoRow, Img, ImgWrap } from './infoelements'

const InfoSection = ({id, lightBG, lightText, lightTextDesc, topLine, headline, description, imgStart, img, alt, dark, primary, darkText}) => {
  return (
    <>
      <InfoContainer lightBG={lightBG} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
              <Column1>
              <TextWrapper>
                  <TopLine>
                      {topLine}
                  </TopLine>
                  <Heading lightText={lightText}>
                      {headline}
                  </Heading>
                  <Subtitle darkText={darkText}>
                      {description}
                  </Subtitle>
              </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt}/>
                </ImgWrap>
              </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection