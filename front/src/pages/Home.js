import "./global.css";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Reliable Handyman Services - Electrical, Plumbing & Repairs
        </title>
        <meta
          name="description"
          content="Offering reliable handyman services for electrical repairs, plumbing, and general maintenance. Quick and hassle-free bookings available!"
        />
        <meta
          name="keywords"
          content="handyman services, electrical repairs, plumbing, general maintenance, quick repairs"
        />
        <meta property="og:title" content="Reliable Handyman Services" />
        <meta
          property="og:description"
          content="Book a handyman for fast and efficient home repairs!"
        />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/assets/hero-image.jpg"
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
        <div className="websiteContent">
          {/* Header Section */}
          <div className="homeHeader">
            <div className="homeHeaderImageOverlay">
              <Container fluid className="heroSection">
                <Row className="align-items-center">
                  <Col md={12} className="text-center text-md-left">
                    <h1 style={{ marginBottom: "30px" }} className="white">
                      Reliable Handyman Services for Every Home Need!
                    </h1>
                    <p
                      className="heroSubtext white"
                      style={{ marginBottom: "30px" }}
                    >
                      Electrical repairs, plumbing, and general
                      maintenance—quick and hassle-free!
                    </p>
                    <Button
                      variant="primary"
                      size="md"
                      href="/booking"
                      className="white"
                    >
                      Book a Handyman Now
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          {/* Key Services Section */}
          <div className="homeServicesSection">
            <Container>
              <h2
                className="text-center my-5 primary"
                style={{ fontWeight: "900" }}
              >
                Our Key Services
              </h2>
              <Row>
                <Col md={3} className="serviceCard">
                  <Card className="homeServiceCard">
                    <Card.Img
                      variant="top"
                      src="/assets/electric.jpeg"
                      alt="Electrical Services"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "900" }}>
                        Electrical Faults
                      </Card.Title>
                      <Card.Text>
                        Wiring issues, faulty outlets, lighting fixes, and more.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={3} className="serviceCard">
                  <Card className="homeServiceCard">
                    <Card.Img
                      variant="top"
                      src="/assets/Repairs.jpg"
                      alt="Home Equipment Repairs"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "900" }}>
                        Home Equipment Repairs
                      </Card.Title>
                      <Card.Text>
                        Fixing appliances, lighting, and other household
                        equipment.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={3} className="serviceCard">
                  <Card className="homeServiceCard">
                    <Card.Img
                      variant="top"
                      src="/assets/Plumbing.jpg"
                      alt="Plumbing Services"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "900" }}>
                        Plumbing Services
                      </Card.Title>
                      <Card.Text>
                        Leak repairs, faucet installations, drain unclogging,
                        and more.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={3} className="serviceCard">
                  <Card className="homeServiceCard">
                    <Card.Img
                      variant="top"
                      src="/assets/handyman.jpg"
                      alt="General Handyman Services"
                    />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "900" }}>
                        General Handyman Services
                      </Card.Title>
                      <Card.Text>
                        Home maintenance, furniture assembly, painting, and
                        other odd jobs.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Why Choose Us Section */}
          <div className="whyChooseUsSection py-5">
            <Container>
              <h2
                className="text-center primary"
                style={{ marginBottom: "50px", fontWeight: "900" }}
              >
                Why Choose Us?
              </h2>
              <Row className="mt-4 text-center">
                <Col md={4}>
                  <Card className="chooseUsCard">
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "900" }}>
                        Fast Response
                      </Card.Title>
                      <Card.Text>
                        Same-day services for urgent repairs.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="chooseUsCard">
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "900" }}>
                        Experienced Professionals
                      </Card.Title>
                      <Card.Text>
                        Certified and skilled handymen for every task.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="chooseUsCard">
                    <Card.Body>
                      <Card.Title style={{ fontWeight: "900" }}>
                        Affordable Rates
                      </Card.Title>
                      <Card.Text>
                        Transparent pricing with no hidden costs.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <div className="text-center mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/booking"
                  style={{ marginTop: "30px" }}
                >
                  Book a handyman
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
