import React from 'react'
import Header from './Header'
import portfolio from "../assets/portfolio2.PNG"
import rentalhouse from "../assets/rentalhouse.PNG"
import jobsite from "../assets/jobsite.PNG"
import { motion } from "framer-motion"
import "./component.css"

function Project() {
    return (
        <>
        <Header />
        <div style={{ width: '80%', margin: 'auto' }}>
            


            <div className="row mt-5">
                <motion.div  animate={{scale:1}} initial={{scale:0}} transition={{ type: "tween", duration: 0.4 }} whileHover={{ scale: 1.06 }} className="tabs col mb-3">
                    <div className="card" style={{ width: '18rem', border: '2px solid purple' }}>
                        <img src={portfolio} className="card-img-top" alt="Image" />
                        <div className="card-body bg-secondary text-white">
                            <h5 classNa me="card-title" >Responsive Portfolio</h5>
                            <p className="card-text">I have created a responsive portfolio to stylishly present resumes and provide a more informative format for job
                                applications, available for anyone to use from my GitHub repository.</p>
                                <h6 style={{color:'orange'}}>Technologies Used : <span style={{color:'black'}}>React JS</span></h6>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-around m-2">
                                {/* <button className='btn btn-primary rounded'>Live Demo</button> */}
                                <a href='https://github.com/Sukueng/Portfolio' target="_blank"><button className='btn btn-success rounded'>Source Code</button></a>
                               
                            </div>
                        </div>

                    </div>
                </motion.div>

                <motion.div  animate={{scale:1}} initial={{scale:0}} transition={{ type: "tween", duration: 0.6 }}  whileHover={{ scale: 1.06 }} className="col mb-3">
                    <div  className="card" style={{ width: '18rem', border: '2px solid purple' }}>
                        <img src={rentalhouse} className="card-img-top" alt="Image" style={{ height: '150px' }} />
                        <div className="card-body bg-secondary text-white">
                            <h5 className="card-title">Free RentalHousing Site</h5>
                            <p className="card-text">I have created this  website where anyone can search for rental homes online for free. Additionally, individuals
                                interested in renting out their homes can post their listings for free on the platform.</p>
                                <h6 style={{color:'orange'}}>Technologies Used : <span style={{color:'black'}}>React JS, Spring boot, MongoDB</span></h6>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-around m-2">
                                <a href='https://freerentalhouse.onrender.com/' target="_blank"><button className='btn btn-primary rounded' >Live Demo</button></a>
                               <a href='https://github.com/Sukueng/Free-Rental-House-Project' target="_blank"> <button className='btn btn-success rounded'>Source Code</button></a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div  animate={{scale:1}} initial={{scale:0}} transition={{ type: "tween", duration: 0.8 }}  whileHover={{ scale: 1.06 }} className="col mb-3">
                    <div className="card" style={{ width: '18rem', border: '2px solid purple' }}>
                        <img src={jobsite} className="card-img-top" alt="Image" />
                        <div className="card-body bg-secondary text-white">
                            <h5 className="card-title">Job Searching Site</h5>
                            <p style={{fontSize:'0.9rem'}} className="card-text">Empowering both job seekers and employers, our platform enables job seekers 
                            to efficiently search for employment opportunities while allowing employers to post job listings
                             and seamlessly connect with prospective candidates who have applied for positions.</p>
                             <h6 style={{color:'orange'}}>Technologies Used : <span style={{color:'black'}}>React JS, Spring boot, MongoDB</span></h6>
                             <p style={{color:'orange'}}>Sample Companay username :  <span style={{color:'black'}}>microsoft@gmail.com</span></p>
                             <p  style={{color:'orange'}}>Password : <span style={{color:'black'}}>4545</span></p>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-around m-2">
                            <a href='https://jobsitefrontend.onrender.com/' target="_blank"><button className='btn btn-primary rounded'>Live Demo</button></a>
                            <a href='https://github.com/Sukueng/Job-Site-Project' target="_blank"> <button className='btn btn-success rounded'>Source Code</button></a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        </>
    )
}

export default Project