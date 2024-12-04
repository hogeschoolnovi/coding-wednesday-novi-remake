import React from 'react';
import List from "../list/List.jsx";
import InputField from "../inputField/InputField.jsx";
import ResourceLinks from "../resourceLinks/ResourceLinks.jsx";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <img src="https://www.novi.nl/hubfs/Website/NOVI%20logo%20wit.svg" alt="Logo of NOVI Hogeschool" className="footer-logo"/>
            <div className="footer-main-container">


            <section className="footer-sub-container">
                <List title="Over NOVI">
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Opeidingen" />
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Studeren Bij" />
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Blog" />
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Contact" />
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Vacatures"/>
                </List>
                <List title="Studenten">
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Kennisbank" />
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Edhub"/>
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Subsidie"/>
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Verkort HBO-traject"/>
                </List>
                <List title="In Company">
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Business" />
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Financiering"/>
                </List>
            </section>
            <section className="footer-sub-container">
                <List title="Contact">
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="contact@novi.nl" />
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="030-3073200" />
                    <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} name="Newtonlaan 247, Utrecht"/>
                   <div className="footer-icon-container">
                       <ResourceLinks url="https://www.test.nl" target="_blank" classname="footer-icon" icon_only={true} icon="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-twitter-outline-1024.png" />
                       <ResourceLinks url="https://www.test.nl" target="_blank" classname="footer-icon" icon_only={true} icon="https://cdn1.iconfinder.com/data/icons/social-media-outline-6/128/SocialMedia_Instagram-Outline-1024.png" />
                       <ResourceLinks url="https://www.test.nl" target="_blank" classname="footer-icon" icon_only={true} icon="https://cdn2.iconfinder.com/data/icons/social-media-outline-1/32/linked_in_social_media_online-1024.png" />
                       <ResourceLinks url="https://www.test.nl" target="_blank" classname="footer-icon" icon_only={true} icon="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-1024.png"/>

                   </div>
                </List>
                    <List title="Blijf op de hoogte"

                    >
                        <form className="footer-form-container">
                            <InputField type="text" placeholder="Voornaam" name="firstName" />
                            <InputField type="text" placeholder="E-mailadres" name="email" />
                            <button type="submit">Aanmelden nieuwsbrief</button>
                        </form>
                    </List>
            </section>

            <div>
                <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} />
                <ResourceLinks url="https://www.test.nl" target="_blank" icon_only={false} />
            </div>

        </div>

        </div>
    );
};

export default Footer;