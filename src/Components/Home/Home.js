import React from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router";
import { useState } from "react";
import classes from './Home.module.css';
const ControlledInputs = () => {
    const [handel, sethandel] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (handel) {
            navigate(`/${handel}`)
        } else {
            console.log('empty values');
        }
    };

    return (
        <section>
            <div className={classes.home}>
                <div className={classes.containerx}>
                    <div className={classes.containeClose}>&times;</div>
                    <img
                        // src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        // src='https://wallpapercave.com/wp/wp5990003.jpg'
                        // src="https://i.pinimg.com/564x/68/d2/86/68d286f02d955267263c8921b41e1c89.jpg"
                        src="https://i.pinimg.com/564x/65/66/ac/6566acdf9b62a091872d8ebdd6e1f463.jpg"
                        alt="image" />
                    <div className={classes.containertext}>
                        <h3 className="text-primary fw-bold pb-2">Codeforces Ladders  <br /></h3>
                        <p className="text">This ladder contain three ladders<br />With increasing  difficulties <br /> Next problem is locked until you solve previous problem  <br /> </p>
                        <form onSubmit={handleSubmit} className="form fomr-control">
                            <input
                                type='text'
                                id='handel'
                                name='handel'
                                value={handel}
                                style={{ outline: "none" }}
                                onChange={(e) => sethandel(e.target.value)}
                                className=""
                                placeholder="Enter Codeforces Handel"
                            />
                            <button className="btn mt-3" type='submit'>Start Ladder</button>
                        </form>
                        <span>Enjoy the experience not the rating</span>
                    </div>
                </div>
            </div>


            {/* <div className="container">
                <form className='form' onSubmit={handleSubmit}>
                    <div className="item">
                        <h3 className=" text-info fw-bolder " >Enter Your Codeforces Handel</h3>
                    </div>
                    <div className="item">
                        <label className="fw-bold font-monospace" htmlFor='handel'>Handel   . </label>
                        <input
                            type='text'
                            id='handel'
                            name='handel'
                            value={handel}
                            style={{ outline: "none" }}
                            onChange={(e) => sethandel(e.target.value)}
                            placeholder="Codeforces Handel"
                        />
                        <br />
                    </div>
                    <div className="item">
                        <button className="btn btn-outline-dark mt-5" type='submit'>Start Ladder</button>
                    </div>
                </form>
            </div> */}
        </section >

    );
};

export default ControlledInputs;
