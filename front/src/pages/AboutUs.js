import "./global.css";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us - Reliable Handyman Services</title>
        <meta
          name="description"
          content="Learn more about our mission, skilled team, and why we’re the top choice for handyman services. From electrical to plumbing, we’ve got you covered!"
        />
        <meta
          name="keywords"
          content="handyman services, electrical repairs, plumbing, home maintenance, professional handyman, experienced handymen"
        />
        <meta
          property="og:title"
          content="About Us - Reliable Handyman Services"
        />
        <meta
          property="og:description"
          content="Meet our skilled professionals and learn about our mission to provide top-quality handyman services."
        />
        <meta property="og:url" content="https://yourwebsite.com/about-us" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/assets/team-image.jpg"
        />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3R3J4YVPRM"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3R3J4YVPRM');
          `}
        </script>
      </Helmet>
      <div className="websiteRoot">
        <NavBar />
        <div className="websiteContent about-content">
          <div className="smallerHeader">
            <div className="smallerHeaderImageOverlay">
              <Container fluid className="heroSection">
                <Row className="align-items-center">
                  <Col md={12} className="text-center text-md-left">
                    <h1 style={{ marginBottom: "30px" }} className="white">
                      About Us
                    </h1>
                    <p
                      className="heroSubtext white"
                      style={{ marginBottom: "30px" }}
                    >
                      Reliable Handyman Services to Maintain and Improve Your
                      Home
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <Container className="about-container">
            <Row className="about-mission">
              <Col md={12}>
                <Card className="about-card">
                  <Card.Body>
                    <Card.Title className="about-card-title primary">
                      Our Mission
                    </Card.Title>
                    <Card.Text className="about-card-text secc">
                      Our goal is to provide reliable, high-quality handyman
                      services that help you maintain and improve your home.
                      With a focus on customer satisfaction, we’re here to
                      address all your repair and maintenance needs, whether
                      it’s electrical faults, plumbing issues, or general
                      household maintenance.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="about-why-choose-us">
              <Col md={12}>
                <Card className="about-card">
                  <Card.Body>
                    <Card.Title className="about-card-title primary">
                      Why Choose Us?
                    </Card.Title>
                    <Card.Text className="about-card-text secc">
                      <ul className="about-list">
                        <li>
                          Skilled professionals with years of experience in
                          electrical, plumbing, and general repairs.
                        </li>
                        <li>
                          Flexible booking options and customer-friendly
                          service.
                        </li>
                        <li>
                          Dedicated to providing exceptional customer
                          satisfaction.
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="about-team">
              <Col md={12}>
                <Card className="about-card">
                  <Card.Body>
                    <Card.Title className="about-card-title primary">
                      Meet the Team
                    </Card.Title>
                    <Card.Text className="about-card-text secc">
                      Our team consists of certified and experienced handymen
                      who specialize in various trades:
                      <ul className="about-list">
                        <li>
                          <strong>John Doe</strong> – Certified electrician with
                          10+ years of experience in residential electrical
                          repairs and installations.
                        </li>
                        <li>
                          <strong>Jane Smith</strong> – Expert plumber with a
                          track record of fixing leaks, installing plumbing
                          fixtures, and more.
                        </li>
                        <li>
                          <strong>Tom Brown</strong> – General handyman,
                          specializing in home maintenance, painting, furniture
                          assembly, and odd jobs.
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
