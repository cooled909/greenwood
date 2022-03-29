import React from 'react'
import {FaFacebook, FaDiscord} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './footerelements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
          <FooterLinksContainer>
              <FooterLinksWrapper>
                  <FooterLinkItems>
                      <FooterLinkTitle>Our Socials!</FooterLinkTitle>
                          <FooterLink to="/">
                              HighlanderLink
                          </FooterLink>
                          <FooterLink to="/">
                              Instagram
                          </FooterLink>
                  </FooterLinkItems>
                  <FooterLinkItems>
                      <FooterLinkTitle>uhhhhhhhhh more stuff</FooterLinkTitle>
                          <a href="https://highlanderlink.ucr.edu/organization/greenwood">
                              HighlanderLink
                          </a>
                          <FooterLink to="/">
                              Instagram
                          </FooterLink>
                  </FooterLinkItems>
              </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
              <SocialMediaWrap>
                  <SocialLogo to="/">
                      Gweenwood
                  </SocialLogo>
                  <SocialIcons>
                      <SocialIconLink href="/www.instagram.com" target="_blank" aria-label="Instagram">
                          <FaFacebook/>
                      </SocialIconLink>
                      <SocialIconLink href="/" target="_blank" aria-label="Discord">
                          <FaDiscord/>
                      </SocialIconLink>
                  </SocialIcons>
              </SocialMediaWrap>
          </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer