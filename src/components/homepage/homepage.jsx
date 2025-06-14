import "./homepage.css"

export function HomePage() {
    return <div className="homepage">
        <div className="homepage-container">
            <img className="homepage-banner-img" src="/images/logo.png" alt="" />
        </div>

        <div className="homepage-about-cosmos">
            <div className="spacer layer1">
            </div>
            <div className="spacer layer2">
            </div>
            <div className="spacer layer3">
            </div>
            <div className="spacer layer4">
            </div>
            <div className="spacer layer5">
            </div>
            <div className="spacer layer6">
            </div>
            <div className="spacer layer7">
            </div>


            <div className="spacer layer8">
            </div>
            <div className="spacer layer9">
            </div>
            <div className="spacer layer10">
            </div>
            <div className="spacer layer11">
            </div>
            <div className="spacer layer12">
            </div>
            <div className="spacer layer13">
            </div>
            <div className="spacer layer14">
            </div>
            <img className="homepage-astro-left" src="/images/astronaut-64.png" alt="" />
            <img className="homepage-astro-right" src="/images/astronaut-right.png" alt="" />

            <div className="about-card">
                <div className="cosmos-img">
                    <img src="/images/orange-portrait.png" alt="" />
                </div>
                <div className="card-content">
                    <img src="/images/star.png" alt="" />

                    <h2 style={{
                        textAlign: "center",
                        lineHeight: "1.75em"
                    }}>About Cosmos</h2>

                    <p style={{
                        fontSize: "13px",
                        lineHeight: "2.5em"
                    }}>Cosmos was born out of our love for all things cosmic, combining our passion for
                        great food and a funku, interstellar ambiance. Our mission is simple: to take you on
                        a gastronomic adventure through the galaxy, one dish at a time. We're more than
                        just a cafe; we're a destination where good food meets out-of-this-world vibes.</p>
                </div>
            </div>
        </div>

        <div className="menu-heading">
            <img src="/images/star.png" alt="" />
            <h2>Cosmos Menu</h2>
        </div>
    </div>
}