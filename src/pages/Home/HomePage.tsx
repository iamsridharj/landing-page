import { motion } from "framer-motion"
import { BodyTextBold } from "@botbrews/typography";
import { Description, ExploreProductsBtnWrapper, HeroDescription, HeroLogo, HeroSectionWrapper, SubDescription, StyledDivider } from "./HomePage.styled";
import { Button } from "@botbrews/components";
import WhyUsUsp from "./WhyUs";
import ExploreProductBanner from "./ExploreProductBanner";

function Homepage() {
    return (
        <>
            <HeroSectionWrapper>
                <HeroDescription>
                    <Description>
                        Innovative Content Creation, Brewed by AI Excellence!
                    </Description>
                    <SubDescription>
                        Discover our unique AI-driven content across podcasts, social media, and more.
                    </SubDescription>
                    <ExploreProductsBtnWrapper>
                        <Button>
                            <BodyTextBold>EXPLORE OUR PRODUCTS FOR FREE</BodyTextBold>
                        </Button>
                    </ExploreProductsBtnWrapper>
                </HeroDescription>
                <HeroLogo>
                    <img src={"/images/botbrews-hero-logo.png"} />
                </HeroLogo>
            </HeroSectionWrapper>
            <WhyUsUsp />
            <ExploreProductBanner />
        </>

    );
}

export default Homepage;