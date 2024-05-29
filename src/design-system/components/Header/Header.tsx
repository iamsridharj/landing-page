import React from 'react';
import { HeaderContainer, Logo, Nav, NavList, NavItem } from './Header.styled';

export const Header = () => {
    return (
        <HeaderContainer>
            <Logo>
                Bot<span>Brews</span>
            </Logo>
            <Nav>
                <NavList>
                    <NavItem>
                        <a href="#our-products" aria-label="Our Products">Our Products</a>
                    </NavItem>
                    <NavItem>
                        <a href="#about-us" aria-label="About Us">About Us</a>
                    </NavItem>
                </NavList>
            </Nav>
        </HeaderContainer>
    );
};

