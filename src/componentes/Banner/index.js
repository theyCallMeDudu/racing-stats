import styled from 'styled-components'
import { banners } from './banners'

const BannerContainer = styled.div`
    width: 100%;
    height: ${props => props.altura || '200px'};
    background-image: ${props => props.backgroundImage};
    text-align: center;
    display: flex;
    justify-content:center;
    align-items: center;
`

const BannerTitle = styled.h2`
    color: #FFF;
    text-transform: uppercase;
`

function Banner({titulo}) {
    return (
        <div>
            { banners.map( (banner) => (
                <BannerContainer
                    key={banner.id} 
                    backgroundImage={banner.backgroundImage}>
                    <BannerTitle>{banner.title}</BannerTitle>
                </BannerContainer>
            ) ) }
        </div>
    )
}

export default Banner