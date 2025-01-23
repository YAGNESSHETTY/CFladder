import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import classes from './Ladder.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const Ladder = () => {
    const { handel } = useParams();
    const navigate = useNavigate();
    const handleSubmit = (id) => {
        navigate(`/${handel}/${id}`)
    };
    console.log(handel);
    return (
        <section >

            <div className='backgroung pb-4 mb-5'>
                <div className="itemladder">
                    <div className="container ">
                        <div className="text-secondary">
                            <h2 className="pt-5 pb-2"> hey {handel} </h2>
                            <p className="fs-3">Try some Ladder </p>
                        </div>
                        <div className='iteml'>
                            <div className="text-left">
                                <a className="btn btn-dark fs-2" onClick={() => navigate(`/${handel}/${0}`)}>Beginner's  Ladder</a>
                                <p>If you are a Beginner's  then you must solve this first</p>
                            </div>
                        </div>
                        <div className='iteml text-center'>
                            <div>
                                <a className="btn btn-dark fs-2" onClick={() => navigate(`/${handel}/${1}`)}>First Ladder <span className="text-danger fs-1 fw-bolder">*</span></a>
                                <p>This is special FIRST ladder for intermidiates</p>
                            </div>
                        </div>
                        <div className='iteml'>
                            <div style={{
                                display: "",
                                alignItems: "left"
                            }}>
                                <a className="btn btn-dark fs-2" onClick={() => navigate(`/${handel}/${2}`)}>Second Ladder <span className="text-danger fs-1 fw-bolder">*</span></a>
                                <p>This is special SECOND ladder for intermidiates</p>
                            </div>
                        </div>
                        <div className='iteml'>
                            <div>
                                <a className="btn btn-dark fs-2" onClick={() => navigate(`/${handel}/${3}`)}>Third Ladder <span className="text-danger fs-1 fw-bolder">*</span></a>
                                <p>This is special THIRD ladder for intermidiates</p>
                            </div>
                        </div>
                        <div className='iteml'>
                            <div>
                                <a className="btn btn-dark fs-2" onClick={() => navigate(`/${handel}/${4}`)}>1200-1300 Ladder</a>
                                <p>This is ladder for problems rated between 1200 to 1300</p>
                            </div>
                        </div>
                        <div className='iteml'>
                            <div>
                                <a className="btn btn-dark fs-2" onClick={() => navigate(`/${handel}/${5}`)}>1400-1500 Ladder</a>
                                <p>This is ladder for problems rated between 1400 to 1500</p>
                            </div>
                        </div>
                        <div className='iteml'>
                            <div>
                                <a className="btn btn-dark fs-2" onClick={() => navigate(`/${handel}/${6}`)}>DP Ladder</a>
                                <p>This is ladder for DP problems rated between 1400 to 1500</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

        </section >
    )
}

export default Ladder;