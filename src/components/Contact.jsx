
import Header from './Header'
import "./component.css"
import "./contact.css"
import { motion } from "framer-motion"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import swal from "sweetalert2"

function Contact() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8ea1zfe', 'template_wo8x82q', form.current, {
            publicKey: 'eGU408t88jdz15JzQ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset();
              swal.fire('Thank you!', 'I replied you ASAP 😊', 'success')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <div>
            <Header></Header>
            <motion.div animate={{ y: -5, opacity: 1 }} initial={{ y: +70, opacity: 0 }} transition={{ type: "tween", duration: 1 }} className="maincont  d-flex justify-content-center">

                <div className="cont">
                    <div className=" row  mb-sm-3">
                        <div className="col-12 ">
                            <h3 style={{ color: "#D919E8" }}>Just say hello!</h3>
                            <h5 className='text-white mb-4'>Get in touch :)</h5>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row mb-2 ">
                                    <div className="col"> <input name="user_name"  style={{ backgroundColor: 'gray', border: "none", color: 'white',zIndex:'-1' }} type="text" className="form-control" placeholder='First Name' required></input></div>
                                    <div className="col"> <input style={{ backgroundColor: 'gray', border: "none", color: 'white' }} type="text" className="form-control" placeholder='Last Name'></input></div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col"> <input name="user_email" style={{ backgroundColor: 'gray', border: "none", color: 'white' }} type="email" className="form-control" placeholder='G Mail' required></input></div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col"> <textarea name="message" rows={5} style={{ backgroundColor: 'gray', border: "none", color: 'white' }} type="text-area" className="form-control" placeholder='Message' required></textarea></div>
                                </div>
                                <button type="submit" className='btn' style={{ color: "white", backgroundColor: '#D919E8' }} >Submit</button>
                            </form>
                        </div>
                        {/* <div className="col">
                        <h3 className="col d-flex justify-content-center mb-5" style={{ color: "#D919E8" }}>Contact Information</h3>
                       
                        <h6 className="col  mb-5 ms-5" style={{color:'white'}}>Contact Number : 8072126118</h6>
                       
                        <p className='col ms-5' style={{color:'white',fontSize:'0.9rem'}}>G mail : sukumarsivasubramaniyam@gmail.com</p>
                    </div> */}
                    </div>
                </div>

            </motion.div>
        </div >
    )
}

export default Contact