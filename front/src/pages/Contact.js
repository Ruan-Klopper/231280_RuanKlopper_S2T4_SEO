import "./global.css";
import NavBar from "./NavBar";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - FixItPro</title>
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
                      Contact Us
                    </h1>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          {/* Contact Form Section */}
          <Container className="contact-container">
            <Row>
              <Col md={8}>
                <Card className="contact-card">
                  <Card.Body>
                    <Card.Title
                      className="contact-card-title"
                      style={{ fontWeight: "700" }}
                    >
                      Book a Service or Request a Quote
                    </Card.Title>
                    <Form>
                      <Form.Group controlId="formName" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                        />
                      </Form.Group>

                      <Form.Group controlId="formEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Form.Group>

                      <Form.Group controlId="formPhone" className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your phone number"
                        />
                      </Form.Group>

                      <Form.Group controlId="formAddress" className="mb-3">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your address"
                        />
                      </Form.Group>

                      <Form.Group controlId="formService" className="mb-3">
                        <Form.Label>Service Needed</Form.Label>
                        <Form.Control as="select">
                          <option>Electrical</option>
                          <option>Plumbing</option>
                          <option>Home Equipment</option>
                          <option>General Maintenance</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group controlId="formDate" className="mb-3">
                        <Form.Label>Preferred Date & Time</Form.Label>
                        <Form.Control type="datetime-local" />
                      </Form.Group>

                      <Form.Group controlId="formMessage" className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Enter additional details"
                        />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              {/* Emergency Contact & FAQ Section */}
              <Col md={4}>
                <Card className="contact-info-card">
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "700" }}>
                      Emergency Contact
                    </Card.Title>
                    <Card.Text>
                      For urgent repairs, call us immediately at{" "}
                      <strong>[Phone Number]</strong>.
                    </Card.Text>
                    <Button variant="danger" href="tel:[Phone Number]">
                      Call Now
                    </Button>
                  </Card.Body>
                </Card>

                <Card className="contact-faq-card mt-4">
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "700" }}>FAQ</Card.Title>
                    <Card.Text>
                      <strong>What areas do you service?</strong> <br />
                      We service the entire local region.
                    </Card.Text>
                    <Card.Text>
                      <strong>How soon can a handyman be available?</strong>{" "}
                      <br />
                      We offer same-day services for urgent issues, depending on
                      availability.
                    </Card.Text>
                    <Card.Text>
                      <strong>What payment methods do you accept?</strong>{" "}
                      <br />
                      We accept cash, credit cards, and electronic transfers.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Contact Information Section */}
            <Row className="contact-info-section mt-5">
              <Col md={12} className="text-center">
                <h4>Contact Information</h4>
                <p>
                  Phone: [Phone Number] <br />
                  Email: [Email Address] <br />
                  Follow us on social media for updates and offers:
                </p>
                <div className="social-media-icons">
                  {/* Add social media icons */}
                  <a href="https://facebook.com" className="social-icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com" className="social-icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com" className="social-icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Contact;
