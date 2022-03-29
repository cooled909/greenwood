import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './serviceselements'
import Icon1 from '../../images/icon1.JPG'
import Icon2 from '../../images/icon2.JPG'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>
            Affiliates and other stuff you should definitely check out!
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}>
                </ServicesIcon>
                <ServicesH2>
                    [Input Club / whatever here]
                </ServicesH2>
                <ServicesP>
                    [Input what they do here]
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}>
                </ServicesIcon>
                <ServicesH2>
                    [Input Club / whatever here]
                </ServicesH2>
                <ServicesP>
                    [Input what they do here]
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services