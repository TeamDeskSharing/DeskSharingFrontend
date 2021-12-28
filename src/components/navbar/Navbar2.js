import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button, LangButton } from '../../globalStyles';
import { Context } from '../Wrapper'
import { FormattedMessage } from 'react-intl'
import tableIcon from "./icon.png"

import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavItemBtn,
    NavLinks,
    NavBtnLink
} from './Navbar2.elements';

function Navbar2() {

    const context = useContext(Context)


    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);


    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={closeMobileMenu}>
                            <img style={{height:40, width:40}}src={tableIcon} alt="Desksharing Logo" />

                            DESKSHARING APP
                            <img style={{height:40, width:40}}src={tableIcon} alt="Desksharing Logo" />

                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/home' onClick={closeMobileMenu}>

                                    <FormattedMessage
                                        id="navbar.home">

                                    </FormattedMessage>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services' onClick={closeMobileMenu}>
                                    <FormattedMessage
                                        id="navbar.services">

                                    </FormattedMessage>
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products' onClick={closeMobileMenu}>
                                    <FormattedMessage
                                        id="navbar.products">

                                    </FormattedMessage>
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to='/login'>
                                        <Button primary>
{/*                                   <FormattedMessage
                                         id="navbar.login" >

                                        </FormattedMessage> */}
                                        Login
                                        
                                        </Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/sign-up'>
                                        <Button onClick={closeMobileMenu} fontBig primary>
   {/*                                          <FormattedMessage
                                                id="navbar.login">

                                            </FormattedMessage> */}
                                            Login
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>



                            <LangButton value={context.locale = "de-DE"} onClick={context.selectLang}>🇩🇪</LangButton>
                            <LangButton value={context.locale = "en-US"} onClick={context.selectLang}>🇺🇸</LangButton>
                            <LangButton value={context.locale = "es-MX"} onClick={context.selectLang}>🇪🇸</LangButton>
                            <LangButton value={context.locale = "ru-RU"} onClick={context.selectLang}>🇷🇺</LangButton>





                  

                        </NavMenu>{/*  */}
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>


    );
}

export default Navbar2;

