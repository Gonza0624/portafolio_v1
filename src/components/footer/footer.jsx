import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="section-main">
      <footer>
        <div class="section-main__footer">
          <div class="section-main__row">
            <a href="#">
              <i>
                <FaFacebookF />
              </i>
            </a>
            <a href="#">
              <i>
                <FaInstagram />
              </i>
            </a>
            <a href="#">
              <i>
                <FaLinkedinIn />
              </i>
            </a>
            <a href="#">
              <i>
                <FaTwitter />
              </i>
            </a>
            <a href="#">
              <i>
                <FaGithub />
              </i>
            </a>
          </div>

          <div class="section-main__row">
            Copyright © 2022 - All rights reserved || Designed By: Gonza0624
          </div>
        </div>
      </footer>
    </section>
  );
};
