import { BodyText, Caption, CaptionSmall, HeaderOne, HeaderTwo } from '@botbrews/typography';
import styled from 'styled-components';
import { StyledDivider } from './HomePage.styled';

const Container = styled.div`
    padding: 50px;
    width: 90%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 100px;
    overflow: hidden;
    background:transparent;
    border: 5px solid #302b63;
    border-radius: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        padding: 10px;
    }
`;

const TextContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 80%;
    font-family: 'Playfair Display', serif;
    color: ${({ theme }) => {
        return theme.colors.raven.raven80
    }}; 

    @media (max-width: 768px) {
        flex: 1 1 auto;
        margin-bottom: 20px;
    }
`;

const StyledHeader = styled(HeaderOne)`
    margin: 0px;
    color: ${({ theme }) => {
        return theme.colors.raven.raven100
    }};
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  text-align: center;

img {
    width: 50%; /* Ensures all images take the full width of the card */
    height: 120px; /* Sets a fixed height */
    object-fit: cover;
    margin: auto;
    border-radius: 10px; /* Optional: to make images fit nicely with the card's border-radius */
  }

`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'Playfair Display', serif;
`;

const StyledCaption = styled(Caption)`
    color: ${({ theme }) => {
        return theme.colors.raven.raven60
    }};
`;


const StyledCaptionSmall = styled(CaptionSmall)`
    color: ${({ theme }) => {
        return theme.colors.raven.raven80
    }};
`;

const UspCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    margin: 50px 0px;
    background:transparent;
`


function WhyUsUsp() {
    return (
        <Container>
            <TextContainer>
                <StyledCaption>We are cutting-edge AI technology meets creative content creation. Our mission is to craft unique, engaging content that captivates and inspires audiences across various platforms, from podcasts to social media and beyond.
                </StyledCaption>
            </TextContainer>
            <StyledDivider />
            <UspCardContainer>
                <Card>
                    <img src='/images/innovative.jpg' />
                    <Title>Innovative AI</Title>
                    <CaptionSmall>Experience the power of AI in creating captivating content.
                    </CaptionSmall>
                </Card>
                <Card >
                    <img src='/images/social_media.jpg' />
                    <Title>Diverse Content</Title>
                    <CaptionSmall>From thought-provoking podcasts to dynamic social media posts.</CaptionSmall>
                </Card>
                <Card>
                    <img src='/images/quality.jpg' />
                    <Title>Quality and Consistency</Title>
                    <CaptionSmall>Exciting content ideas are always brewing. Stay connected!</CaptionSmall>
                </Card>
            </UspCardContainer>

        </Container>
    );
}

export default WhyUsUsp;
