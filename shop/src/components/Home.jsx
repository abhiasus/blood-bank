import React from "react";
import mainImage from '../assets/images/main.jpg';
import donorImage from '../assets/images/donor.jpg';
import '../assets/style/style.css';

function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                <div className="container">

                    <a className="navbar-brand" href="#">
                        RedDrop Blood Care
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarContent"
                    >

                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <a className="nav-link" href="#home">
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#blood">
                                    Blood Types
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#donate">
                                    Donate
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>


            <section className="hero" id="home">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-md-6">

                            <h1>Every Drop Can Save a Life</h1>

                            <p>
                                Blood donation is a simple act that can make
                                a big difference. Join RedDrop Blood Care
                                and help people in need.
                            </p>

                            <button className="btn btn-primary">
                                Donate Blood
                            </button>

                        </div>


                        <div className="col-md-6">

                            <img
                                src={mainImage}
                                className="img-fluid rounded"
                                alt="Blood Donation"
                            />

                        </div>

                    </div>

                </div>

            </section>


            <section className="about" id="about">

                <div className="container">

                    <h2>About RedDrop Blood Care</h2>

                    <p>
                        RedDrop Blood Care is a blood donation center that
                        collects and stores blood for patients who require
                        blood during medical treatments and emergencies.
                    </p>

                </div>

            </section>


            <section className="blood-groups" id="blood">

                <div className="container">

                    <h2>Available Blood Types</h2>

                    <div className="row">

                        <div className="col-md-3">

                            <div className="blood-card">

                                <h3>A+</h3>

                                <p>
                                    Blood Type
                                </p>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="blood-card">

                                <h3>B+</h3>

                                <p>
                                    Blood Type
                                </p>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="blood-card">

                                <h3>O+</h3>

                                <p>
                                    Blood Type
                                </p>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="blood-card">

                                <h3>AB+</h3>

                                <p>
                                    Blood Type
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="donate" id="donate">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-md-6">

                            <img
                                src={donorImage}
                                className="img-fluid rounded"
                                alt="Blood Donor"
                            />

                        </div>


                        <div className="col-md-6">

                            <h2>Why Donate Blood?</h2>

                            <p>
                                Blood is needed during surgeries, accidents,
                                emergencies and medical treatments.
                                Your donation can help patients when they
                                need it most.
                            </p>

                            <button className="btn btn-primary">
                                Become a Donor
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            <section className="contact" id="contact">

                <div className="container">

                    <h2>Contact RedDrop</h2>

                    <p>
                        Phone: +91 91234 56789
                    </p>

                    <p>
                        Email: reddrop@gmail.com
                    </p>

                    <p>
                        Location: Bengaluru, Karnataka
                    </p>

                </div>

            </section>


            <footer>

                <p>
                    © 2026 RedDrop Blood Care. All Rights Reserved.
                </p>

            </footer>

        </>
    );
}

export default Home;