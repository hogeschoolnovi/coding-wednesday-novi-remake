import React from 'react';
import List from "../list/List.jsx";
import InputField from "../inputField/InputField.jsx";

const Footer = () => {
    return (
        <div>
            <img src="https://www.novi.nl/hubfs/Website/NOVI%20logo%20wit.svg" alt="Logo of NOVI Hogeschool"/>
            <div>


                <List
                    title="Over NOVI">
                    <a href="https://www.test.nl" target="_blank">Opleidingen</a>
                    <a href="https://www.test.nl" target="_blank">Studeren bij</a>
                    <a href="https://www.test.nl" target="_blank">Blog</a>
                    <a href="https://www.test.nl" target="_blank">Contact</a>
                    <a href="https://www.test.nl" target="_blank">Vacatures</a>
                </List>
                <List
                    title="Studenten">
                    <a href="https://www.test.nl" target="_blank">Kennisbank</a>
                    <a href="https://www.test.nl" target="_blank">EdHub</a>
                    <a href="https://www.test.nl" target="_blank">Subsidie</a>
                    <a href="https://www.test.nl" target="_blank">Verkort HBO-Traject</a>
                </List>
                <List
                    title="In Company">
                    <a href="https://www.test.nl" target="_blank">Business</a>
                    <a href="https://www.test.nl" target="_blank">Financiering</a>
                </List>

            </div>
            <div>
                <List
                    title="Contact">
                    <a href="https://www.test.nl" target="_blank">Email</a>
                    <a href="https://www.test.nl" target="_blank">Telefoonnummer</a>
                    <a href="https://www.test.nl" target="_blank">Adres</a>



                    <a href="https://www.test.nl" target="_blank">Twitter</a>
                    <a href="https://www.test.nl" target="_blank">Instagram</a>
                    <a href="https://www.test.nl" target="_blank">LinkedIn</a>
                    <a href="https://www.test.nl" target="_blank">Facebook</a>


                </List>
                <List
                    title="Blijf op de hoogte">
                    <form>
                        <InputField type="text" placeholder="Voornaam" name="firstName" />
                        <InputField type="text" placeholder="E-mailadres" name="email" />
                        <button type="submit">Aanmelden nieuwsbrief</button>
                    </form>
                </List>
            </div>
            <div>
                <a href="https://www.test.nl" target="_blank">Privacy</a>
                <a href="https://www.test.nl" target="_blank">Voorwaarden</a>
            </div>
        </div>
    );
};

export default Footer;