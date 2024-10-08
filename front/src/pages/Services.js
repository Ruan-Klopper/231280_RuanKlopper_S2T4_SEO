import "./global.css";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Services() {
  return (
    <>
      <Helmet>
        <title>Services - Electrical, Plumbing, Repairs, and More</title>
        <meta
          name="description"
          content="Explore our comprehensive handyman services including electrical faults, plumbing, home equipment repairs, and emergency services. Get a reliable handyman today!"
        />
        <meta
          name="keywords"
          content="handyman services, electrical repairs, plumbing services, appliance repair, general handyman, emergency handyman, home maintenance"
        />
        <meta property="og:title" content="Our Handyman Services" />
        <meta
          property="og:description"
          content="Reliable handyman services for electrical, plumbing, home maintenance, and emergency repairs. Book your handyman now!"
        />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/assets/services-image.jpg"
        />
      </Helmet>
      <div className="websiteRoot">
        <NavBar />
        <div className="websiteContent">
          {/* Header Section */}
          <div className="smallerHeader">
            <div className="smallerHeaderImageOverlay">
              <Container fluid className="heroSection">
                <Row className="align-items-center">
                  <Col md={12} className="text-center text-md-left">
                    <h1 className="white" style={{ marginBottom: "30px" }}>
                      Services
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

          {/* Services Section */}
          <Container className="services-container">
            <Row>
              {/* Electrical Faults */}
              <Col md={6} lg={4} className="service-card-container">
                <Card className="service-card">
                  <Card.Img
                    variant="top"
                    src="/assets/electric.jpeg"
                    alt="Electrical Services"
                  />
                  <Card.Body>
                    <Card.Title className="service-card-title">
                      Electrical Faults
                    </Card.Title>
                    <Card.Text className="service-card-text">
                      From wiring repairs and breaker replacements to fixing
                      faulty outlets, we ensure your home’s electrical systems
                      are safe and functional.
                    </Card.Text>
                    <Button variant="primary" href="#contact">
                      Schedule Electrical Service
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Plumbing Services */}
              <Col md={6} lg={4} className="service-card-container">
                <Card className="service-card">
                  <Card.Img
                    variant="top"
                    src="/assets/Plumbing.jpg"
                    alt="Plumbing Services"
                  />
                  <Card.Body>
                    <Card.Title className="service-card-title">
                      Plumbing Services
                    </Card.Title>
                    <Card.Text className="service-card-text">
                      Whether it’s a leaking pipe, faucet installation, or
                      unblocking drains, our plumbing experts are here to help.
                    </Card.Text>
                    <Button variant="primary" href="#contact">
                      Schedule Plumbing Service
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Faulty Home Equipment */}
              <Col md={6} lg={4} className="service-card-container">
                <Card className="service-card">
                  <Card.Img
                    variant="top"
                    src="/assets/electric.jpeg"
                    alt="Appliance Repair"
                  />
                  <Card.Body>
                    <Card.Title className="service-card-title">
                      Faulty Home Equipment
                    </Card.Title>
                    <Card.Text className="service-card-text">
                      We repair household appliances such as washing machines,
                      dishwashers, stoves, and more to keep your home running
                      smoothly.
                    </Card.Text>
                    <Button variant="primary" href="#contact">
                      Schedule Equipment Repair
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* General Handyman Activities */}
              <Col md={6} lg={4} className="service-card-container">
                <Card className="service-card">
                  <Card.Img
                    variant="top"
                    src="/assets/electric.jpeg"
                    alt="General Handyman"
                  />
                  <Card.Body>
                    <Card.Title className="service-card-title">
                      General Handyman Activities
                    </Card.Title>
                    <Card.Text className="service-card-text">
                      From furniture assembly to painting, TV mounting, and
                      drywall repairs, our handymen can tackle any household
                      task.
                    </Card.Text>
                    <Button variant="primary" href="/contact">
                      Schedule a Handyman
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Emergency Services */}
              <Col md={6} lg={4} className="service-card-container">
                <Card className="service-card">
                  <Card.Img
                    variant="top"
                    src="/assets/electric.jpeg"
                    alt="Emergency Services"
                  />
                  <Card.Body>
                    <Card.Title className="service-card-title">
                      Emergency Services
                    </Card.Title>
                    <Card.Text className="service-card-text">
                      Need urgent repairs? Our emergency team is available for
                      fast response to critical electrical or plumbing issues.
                    </Card.Text>
                    <Button variant="danger" href="/Contact">
                      Call for Emergency Service
                    </Button>
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

export default Services;
