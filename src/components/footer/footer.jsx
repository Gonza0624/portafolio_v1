import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <section className="section-footer">
            <footer>
                <div class="footer">
                    <div class="row">
                        <a href="#"><i><FaFacebookF /></i></a>
                        <a href="#"><i><FaInstagram /></i></a>
                        <a href="#"><i><FaLinkedinIn /></i></a>
                        <a href="#"><i><FaTwitter /></i></a>
                    </div>

                    <div class="row">
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        Copyright © 2022 - All rights reserved || Designed By: Gonza0624
                    </div>
                </div>
            </footer>
        </section>
    )
}