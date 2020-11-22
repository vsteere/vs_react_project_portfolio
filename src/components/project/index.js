import React from "react";
import "./style.css";
import ex1pic1 from "../../images/ex1pic1.JPG";
import ex1pic2 from "../../images/ex2pic2.JPG";
import ex2pic1 from "../../images/ex2pic1.JPG";
import ex2pic2 from "../../images/ex2pic3.JPG";
import ex3pic1 from "../../images/ex3pic1.JPG";
import ex3pic2 from "../../images/ex3pic2.JPG";
import ex4pic1 from "../../images/ex4pic1.jpg";
import ex4pic2 from "../../images/ex4pic2.jpg";
import ex5pic1 from "../../images/ex4pic1.png";
import ex6pic1 from "../../images/ex6pic1.jpg";
import ex6pic2 from "../../images/ex6pic2.jpg";
import { Col, Container, Row } from "react-bootstrap";



function Project() {

    return (
        <Container>

            <Row className="portfolio-resume">
                <Col md={7} className="portfolio-resume-spacing">
                    <div className="portfolio-resume-wrapper">
                        <h3 className="portfolio-resume-header">Meally Food Delivery Tracker</h3>
                        <div className="portfolio-resume-spacing">
                            <p>A full-stack MCV application designed to be used by delivery drivers or restaurants to track
                            outgoing food orders. Users are able to monitor the orders from creation to delivery and
                            easily see the orders's stage, whether it has been picked up by a driver and if it has been
                            delivered. This application Node.js, Sequelize ORM, and REST APIs as part of the back-end
                            and renders data to the front-end through Handlebars templating engine. For user
    authentication, this application uses Passport.js OAUTH.<br /><br />
                                <a href={"https://meally-food-delivery-tracker.herokuapp.com/"}>Deployed Application</a><br /><a
                                    href={"https://github.com/vsteere/Project2_VS_SS_GC_AR"}>GitHub Repository</a><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={5} className="portfolio-resume-spacing">
                    <img src={ex1pic1} alt={"Meally picture 1"} width={400} height={200} />
                    <img src={ex1pic2} alt={"Meally picture 2"} width={400} height={200} />
                </Col>
            </Row>

            <Row className="portfolio-resume">
                <Col md={7} className="portfolio-resume-spacing">
                    <div className="portfolio-resume-wrapper">
                        <h3 className="portfolio-resume-header">Express Note Taker Application</h3>
                        <div className="portfolio-resume-spacing">
                            <p>This application uses an Express server, AJAX calls, and asynchronous functions to
            help users easily add, edit, review, and delete notes online. <br />
                                <a href={"https://note-taker-app-vs.herokuapp.com/notes"}>Deployed
                Application</a><br /><a
                                    href={"https://github.com/vsteere/Express.js_Note_Taking_Application"}>GitHub
                Repository</a><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={5} className="portfolio-resume-spacing">
                    <img src={ex3pic1} alt={"Note Taker picture 1"} width={500} height={200} />
                    <img src={ex3pic2} alt={"Note Taker picture 2"} width={400} height={200} />
                </Col>
            </Row>

            <Row className="portfolio-resume">
                <Col md={7} className="portfolio-resume-spacing">
                    <div className="portfolio-resume-wrapper">
                        <h3 className="portfolio-resume-header">North Texas Brews and Chews</h3>
                        <div className="portfolio-resume-spacing">
                            <p>An application to help users find local restaurants and breweries based on their selected
                            location in North Texas. Users can use keywords, cuisine types, and city selection as
                            search parameters. This application utilizes various third-party APIs to search for
        restaurant and brewery information. <br />
                                <a href={"https://vsteere.github.io/Project_1-Brews_and_Chews/"}>Deployed
            Application</a><br /><a
                                    href={"https://github.com/vsteere/Project_1-Brews_and_Chews"}>GitHub
            Repository</a><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={5} className="portfolio-resume-spacing">
                    <img src={ex2pic1} alt={"NTBC picture 1"} width={200} height={200} />
                    <img src={ex2pic2} alt={"NTBC picture 2"} width={400} height={200} />
                </Col>
            </Row>

            <Row className="portfolio-resume">
                <Col md={7} className="portfolio-resume-spacing">
                    <div className="portfolio-resume-wrapper">
                        <h3 className="portfolio-resume-header">Position Control Application</h3>
                        <div className="portfolio-resume-spacing">
                            <p>This Command Line Interface application has full position control module functionality to help users manage personnel. A user can add, delete, and edit personnel, departments, and job classes and run reports to view the data <br />
                                <a href={"https://vsteere.github.io/weather_dashboard/"}>Deployed
                    Application</a><br /><a
                                    href={"https://github.com/vsteere/weather_dashboard"}>GitHub
                    Repository</a><br /><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={5} className="portfolio-resume-spacing">
                    <img src={ex4pic1} alt={"Position Control picture 1"} width={500} height={200} />
                    <img src={ex4pic2} alt={"Position Control picture 2"} width={600} height={150} />
                </Col>
            </Row>

            <Row className="portfolio-resume">
                <Col md={7} className="portfolio-resume-spacing">
                    <div className="portfolio-resume-wrapper">
                        <h3 className="portfolio-resume-header">Multi-Day Weather Dashboard</h3>
                        <div className="portfolio-resume-spacing">
                            <p>This dynamic application allows users to search cities in the United States to see current weather as well as a five day forecast. The application also uses local storage to save  searches, which allow the user to see weather for previously searched cities without re-entering the name in the search bar  <br />
                                <a href={"https://vsteere.github.io/weather_dashboard/"}>Deployed
                        Application</a><br /><a
                                    href={"https://github.com/vsteere/weather_dashboard"}>GitHub
                        Repository</a><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={5} className="portfolio-resume-spacing">
                    <img src={ex5pic1} alt={"Weather Dashboard picture 1"} width={500} height={200} />

                </Col>
            </Row>

            <Row className="portfolio-resume">
                <Col md={7} className="portfolio-resume-spacing">
                    <div className="portfolio-resume-wrapper">
                        <h3 className="portfolio-resume-header">Team Profile Generator</h3>
                        <div className="portfolio-resume-spacing">
                            <p>This organizational management tool helps users create hierarchical team charts based on pre-defined roles. User can add information such as phone number and email to the org chart in addition to team member names and roles. Once completed, the application renders an HTML document for users to view. This applicaiton uses the inquer package, Node.js, and Jest Testing package technologies.<br />
                                <a href={"https://drive.google.com/file/d/1Q6dgQOGEizwagk-zm8fwZ4r_No876p4x/view"}>Deployed
                            Application</a><br /><a
                                    href={"https://github.com/vsteere/Team_Profile_Generator"}>GitHub
                            Repository</a><br />
                            </p>
                        </div>
                    </div>
                </Col>
                <Col md={5} className="portfolio-resume-spacing">
                    <img src={ex6pic1} alt={"Team Profile Generator picture 1"} width={500} height={200} />
                    <img src={ex6pic2} alt={"Team Profile Generator picture 2"} width={500} height={200} />

                </Col>
            </Row>





        </Container>
    )
}

export default Project