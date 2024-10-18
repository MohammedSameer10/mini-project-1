import './home.css';
import defaultImg from "../assets/img/al174.png"
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";


function Home() {


    return (
        <div className="home">
            <div className="head">
                <p>HOME</p>
            </div>
            <div className="body">
                <div className="content">
                    {/* <div className="body-top">
                        <div className="user-details">
                            <div className="head">
                                <p>User Details</p>
                            </div>
                            <div className="body">
                                <div className="text">
                                    <p><span className='highDetails'>Name: </span> MONESHVEL S T</p>
                                    <p><span className='highDetails'>Roll Number:</span> 7376222AL174</p>
                                    <p><span className='highDetails'>Mail ID:</span> moneshvel.al22@bitsathy.ac.in</p>
                                    <p><span className='highDetails'>Year:</span> III</p>
                                    <p><span className='highDetails'>Semester:</span> V</p>
                                    <p><span className='highDetails'>Department:</span> ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</p>
                                    <p><span className='highDetails'>Phone Number:</span> 9345702823</p>
                                </div>
                                <div className="img">
                                    <img src={defaultImg} alt="User Photo" className='img' />
                                </div>
                            </div>
                        </div>
                        <div className="warden-details">
                            <div className="head">
                                <p>Warden Details</p>
                            </div>
                            <div className="body">
                                <div className="text">
                                    <p><span className='highDetails'>Name:</span> Nithin P</p>
                                    <p><span className='highDetails'>Phone Number:</span> 9384592385</p>
                                    <p><span className='highDetails'>Department:</span> ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</p>
                                    <p><span className='highDetails'>Room Number:</span> 300</p>
                                    <p><span className='highDetails'>Floor:</span> 2nd</p>
                                    <p><span className='highDetails'>Wing:</span> Right-Wing</p>
                                </div>
                                <div className="img">
                                    <img src={defaultImg} alt="Warden Photo" className='img' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-bottom">
                        <div className="room-details">
                            <div className="head">
                                <p>Room Details</p>
                            </div>
                            <div className="body">
                                <p><span className='highDetails'>Hostel:</span> Emerald</p>
                                <p><span className='highDetails'>Room Number:</span> 368</p>
                                <p><span className='highDetails'>Floor:</span> 2nd</p>
                                <p><span className='highDetails'>Wing:</span> Right-Wing</p>
                                <p><span className='highDetails'>Room Type:</span> 4-Cot Room</p>
                                <p><span className='highDetails'>Occupied:</span> 3</p>
                            </div>
                        </div>
                        <div className="roommate-details">
                            <div className="head">
                                <p>Room-Mates Details</p>
                            </div>
                            <div className="body">
                                <p>NO Room Mates Available</p>
                            </div>
                        </div>
                    </div> */}

                    <div className="title">
                        <div className="profile">
                            <img src={defaultImg} alt="Profile" style={{ height: "150px", borderRadius: "200px", border: "solid 2px black" }} />
                        </div>
                        <div className="details">
                            <div className="left">
                                <p className="DName">MONESHVEL S T <span className="DRoll">(7376222AL174)</span></p>
                                <p className="DDept">ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING</p>
                                <p className="Dyear">3rd YEAR</p>
                            </div>
                            <div className="right">
                                <div className="mail">
                                    <IoIosMail className='Dmailimg' />
                                    <p className="Dmail">moneshvel.al22@bitsathy.ac.in</p>
                                </div>
                                <div className="phone">
                                    <FaPhone className='Dphoneimg' />
                                    <p className="Dphone">+91 9345702823</p>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="mdetails">
                        <div className="wardenD">
                            <div className="head">
                                <p>Room-Deatils</p>
                            </div>
                            <div className="body">
                                <div className="row">
                                    <div className="ele title"><p>Room No</p></div>
                                    <div className="ele data"><p>300</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Floor</p></div>
                                    <div className="ele data"><p>2nd</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Wing</p></div>
                                    <div className="ele data"><p>Right-Wing</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Hostel</p></div>
                                    <div className="ele data"><p>Emerald</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="wardenD">
                            <div className="head">
                                <p>Warden-Deatils</p>
                            </div>
                            <div className="body">
                                <div className="row">
                                    <div className="ele title"><p>Name</p></div>
                                    <div className="ele data"><p>VARUNESH D</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Phone No</p></div>
                                    <div className="ele data"><p className='phone'>+91 9348572108</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Room No</p></div>
                                    <div className="ele data"><p>300</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Floor</p></div>
                                    <div className="ele data"><p>2nd</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Wing</p></div>
                                    <div className="ele data"><p>Right-Wing</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Hostel</p></div>
                                    <div className="ele data"><p>Emerald</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="wardenD">
                            <div className="head">
                                <p>Room-Mate-Deatils</p>
                            </div>
                            <div className="body">
                                <div className="row">
                                    <div className="ele title"><p>Person 1 Name</p></div>
                                    <div className="ele data"><p>VARUNESH D</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Person 1 Phone</p></div>
                                    <div className="ele data"><p className='phone'>+91 9632180489</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Person 1 Mail</p></div>
                                    <div className="ele data"><p>varunesh.cs22@bitsathy.ac.in</p></div>
                                </div>
                                
                                <div className="row">
                                    <div className="ele title"><p>Person 2 Name</p></div>
                                    <div className="ele data"><p>Saravanan S</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Person 2 Phone</p></div>
                                    <div className="ele data"><p className='phone'>+91 9621048592</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Person 2 Mail</p></div>
                                    <div className="ele data"><p>saravanan.cb22@bitsathy.ac.in</p></div>
                                </div>

                                <div className="row">
                                    <div className="ele title"><p>Person 3 Name</p></div>
                                    <div className="ele data"><p>Harish R</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Person 3 Phone</p></div>
                                    <div className="ele data"><p className='phone'>+91 9104958327</p></div>
                                </div>
                                <div className="row">
                                    <div className="ele title"><p>Person 3 Mail</p></div>
                                    <div className="ele data"><p>harish.al22@bitsathy.ac.in</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;