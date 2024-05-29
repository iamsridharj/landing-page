import { BodyTextBold } from "@botbrews/typography";
import { Description, ExploreProductsBtnWrapper, HeroDescription, HeroLogo, HomepageWrapper, StyledExploreProductsRedirect, SubDescription } from "./HomePage.styled";
import { Button } from "@botbrews/components";

function Homepage() {
    return (
        <HomepageWrapper>
            <HeroDescription>
                <Description>
                    Innovative Content Creation, Brewed by AI Excellence!
                </Description>
                <SubDescription>
                    Discover our unique AI-driven content across podcasts, social media, and more.
                </SubDescription>
                <ExploreProductsBtnWrapper>
                    <Button>
                        <BodyTextBold> Explore Our products</BodyTextBold>
                    </Button>
                </ExploreProductsBtnWrapper>


            </HeroDescription>
            <HeroLogo>
                <img src={"/images/botbrews-hero-logo.png"} />
            </HeroLogo>
        </HomepageWrapper>
    );
}

export default Homepage;