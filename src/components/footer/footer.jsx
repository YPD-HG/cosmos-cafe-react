import "./footer.css"

export function Footer() {
    return <div className="footer">
        <div className="footer-container">
            <div className="footer-upper">
                <div className="footer-logo">
                    <img className="footer-logo-img" src="././assets/images/logo.png" alt="" />
                </div>
            </div>

            <div className="cosmos-contact">
                <img className="astro-footer-left" src="././assets/images/astronaut-64.png" alt="" />

                <img className="astro-footer-right" src="././assets/images/astronaut-right.png" alt="" />

                <div className="spacer-footer layer1-footer spacer-footer">
                </div>

                <div className="spacer-footer layer2-footer spacer-footer">
                </div>

                <div className="spacer-footer layer3-footer spacer-footer">
                </div>

                <div className="spacer-footer layer4-footer spacer-footer">
                </div>

                <div className="spacer-footer
                layer5-footer spacer-footer">
                </div>

                <div className="contact-card">
                    <img className="contact-star" src="././assets/images/star.png" alt="" />
                    <h3 style={{ marginBottom: "10px" }}><b>Contact</b></h3>

                    <p className="para">Got questions or want to chat?</p>

                    <h4 style={{ marginBottom: "0", marginTop: "50px" }}>(437)833-4627</h4>

                    <a className="blue email" href="info@cosmoscafe.com">info@cosmoscafe.com</a>

                    <p style={{ marginTop: "50px", marginBottom: "0px" }} className="blue">Cosmos Cafe</p>

                    <p className="para address">104 N Beach Blvd, <br /> Bay St Louis, MS 39520, United States</p>
                </div>


            </div>
        </div>
    </div>
}