import React from 'react';
import List from "../list/List.jsx";
import ResourceLinks from "../resourceLinks/ResourceLinks.jsx";
import "./Footer.css";
import SectionContentWrapper from "../sectionContentWrapper/SectionContentWrapper.jsx";
import {
    Confetti,
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
    MapPinLine,
    Phone,
    TwitterLogo
} from "@phosphor-icons/react";

const Footer = () => {
    const overNoviLinks = [
        {url: "https://www.test.nl", label: "Opeidingen", isIconOnly: false},
        {url: "https://www.test.nl", label: "Studeren Bij", isIconOnly: false},
        {url: "https://www.test.nl", label: "Blog", isIconOnly: false},
        {url: "https://www.test.nl", label: "Contact", isIconOnly: false},
        {url: "https://www.test.nl", label: "Vacatures", isIconOnly: false}
    ];

    const studentenLinks = [
        {url: "https://www.test.nl", label: "Kennisbank", isIconOnly: false},
        {url: "https://www.test.nl", label: "Edhub", isIconOnly: false},
        {url: "https://www.test.nl", label: "Subsidie", isIconOnly: false},
        {url: "https://www.test.nl", label: "Verkort HBO-traject", isIconOnly: false}
    ];

    const inCompanyLinks = [
        {url: "https://www.test.nl", label: "Business", isIconOnly: false},
        {url: "https://www.test.nl", label: "Financiering", isIconOnly: false}
    ];

    const contactLinks = [
        {
            url: "https://www.test.nl",
            label: "contact@novi.nl",
            isIconOnly: false,
            icon: <Confetti size={24} weight="fill" />
        },
        {
            url: "https://www.test.nl",
            label: "030-3073200",
            isIconOnly: false,
            icon: <Phone size={24} weight="fill" />
        },
        {
            url: "https://www.test.nl",
            label: "Newtonlaan 247, Utrecht",
            isIconOnly: false,
            icon: <MapPinLine size={24} weight="fill" />
        }
    ];
    const socialLinks = [{
        url: "https://www.test.nl",
        isIconOnly: true,
        icon: <FacebookLogo size={24} weight="fill" />,
        iconAlt: "Facebook logo"
    },
        {
            url: "https://www.test.nl",
            isIconOnly: true,
            icon: <InstagramLogo size={24} weight="fill" />,
            iconAlt: "Instagram logo"
        },
        {
            url: "https://www.test.nl",
            isIconOnly: true,
            icon: <LinkedinLogo size={24} weight="fill" />,
            iconAlt: "LinkedIn logo"
        },
        {
            url: "https://www.test.nl",
            isIconOnly: true,
            icon: <TwitterLogo size={24} weight="fill" />,
            iconAlt: "Twitter logo"
        }
    ];

    return (
        <SectionContentWrapper>
            <img src="https://www.novi.nl/hubfs/Website/NOVI%20logo%20wit.svg" alt="Logo of NOVI Hogeschool"
                 className="footer-logo"/>
            <div className="footer-main-container">
                <section className="footer-sub-container footer-sub-left">
                    <List title="Over NOVI" className="footer-list" links={overNoviLinks}/>
                    <List title="Studenten" className="footer-list" links={studentenLinks}/>
                    <List title="In Company" className="footer-list" links={inCompanyLinks}/>
                </section>
                <section className="footer-sub-container">
                    <div>
                        <List title="Contact" className="footer-list" links={contactLinks}/>

                        <List
                            isHorizontal={true}
                            links={socialLinks}
                        >
                        </List>
                    </div>


                    <List title="Blijf op de hoogte" className="footer-list">
                        <form className="footer-form-container">
                            <input type="text" placeholder="Voornaam" name="firstName"/>
                            <input type="text" placeholder="E-mailadres" name="email"/>
                            <button type="submit">Aanmelden nieuwsbrief</button>
                        </form>
                    </List>

                </section>

                <div>
                    <ResourceLinks url="https://www.test.nl" target="_blank" isOnlyIcon={false}/>
                    <ResourceLinks url="https://www.test.nl" target="_blank" isOnlyIcon={false}/>
                </div>
            </div>
        </SectionContentWrapper>
    );
};

export default Footer;