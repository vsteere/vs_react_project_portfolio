import React from "react";
import "./style.css";


function Aboutme() {

    return (
        <container>
            <div className="portfolio-resume row">

                <div className="porfolio-resume-spacing col-md-4">
                    <div className="portfolio-resume-wrapper">
                        <img src={"../../../../public/images/profile_photo.png"} className="portfolio-resume-headshot" alt={"headshot"} />
                        <h3 className="portfolio-resume-header">Technology Interests</h3>
                        <ul>
                            <li>Back-end Web Development</li>
                            <li>RESTful APIs</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>React.js</li>
                            <li>Relational Databases</li>
                            <li>MongoDB and other NoSQL Databases</li>
                        </ul>
                    </div>
                </div>

                <div className="portfolio-resume-spacing col-md-8">
                    <div className="portfolio-resume-wrapper">
                        <h3 className="portfolio-resume-header">My Professional Story</h3>
                        <div className="portfolio-resume-spacing">

                            <p>I am a full-stack web developer with a particular interest in back-end technologies,including databases, APIs, and linking them to the front-end to create user-friendly, interactive, and intuitive applications.<br /><br />

                                    Prior to my completing the Web Development Boot Camp at Southern Methodist University I was a public finance and budgeting professional with experience working for large cities and counties in Texas and South Florida.<br /><br />

                                        In addition to managing multiple complex budgets in excess of $100 million, I became certified as a Lean Six Sigma Yellow Belt and participated in multiple process improvement projects.<br /><br />

                                            I have experience as a Subject Matter Expert and a Project Manager for multiple software implementations, including PeopleSoft Financials and Oracle Planning and Budgeting Cloud(PBCS) and Enterprise Performance Reporting Cloud (EPRCS) solutions.
                    </p>
                            <h2>My Education</h2>
                            <ul>
                                <li>Web Development Boot Camp Certificate - Southern Methodist University</li>
                                <li>Master of Public Adminisration - Texas A&M University</li>
                                <li>Bachelor of Arts in International Studies - University of South Carolina</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio-resume row">
                <div className="large-4 columns">
                    <div className="portfolio-resume-wrapper" id="about_me">

                        <h3 className="portfolio-resume-header">Fun Stuff</h3>
                        <p>My family and I live in one of the eastern suburbs of Dallas, near Lake Ray Hubbard along with our five four-legged children, three cats and two dogs. <br /><br />

                                                    We moved back to Texas in 2018 from South Florida, where we moved after my wife and I graduated Texas A&M. <br /><br />

                                                        We absolutely love traveling, especially abroad. In fall 2019 we took a two-week vacation to the United Kingdom and visited Ireland, Scotland, and England. As huge Game of Thrones fans, we had to take a tour where we saw locations where multiple scenes, including Winterfell, were produced. Our tour guide was an extra during all of the seasons and had some fantastic stories. As an extra treat, we met two of the Northern Inuit dogs who played the Stark Direwolves.<br /><br />

                                                            If you want to contact me, please use the email address or phone number below.


                </p>


                    </div>
                </div>

            </div>

        </container>

    );

}


export default 
