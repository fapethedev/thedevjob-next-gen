'use client';

import React from "react";
import {FaGithub, FaLinkedinIn, FaUpwork, FaWhatsapp} from "react-icons/fa6";
import {PiGearDuotone} from "react-icons/pi";
import {useMediaQuery} from "usehooks-ts";


const ContactLogoCloud = () => {
    const isOnDesktop = useMediaQuery('(min-width: 768px)')

    return (
        <>
            <FaLinkedinIn size={isOnDesktop ? 48 : 24}/>
            <FaUpwork size={isOnDesktop ? 48 : 24}/>
            <PiGearDuotone size={isOnDesktop ? 48 : 24}/>
            <FaGithub size={isOnDesktop ? 48 : 24}/>
            <FaWhatsapp size={isOnDesktop ? 48 : 24}/>
        </>
    );
}

export {ContactLogoCloud};

