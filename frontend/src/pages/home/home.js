import './home.css';
import defaultImg from "../assets/img/default.jpg"



function Home() {


    return (
        <div className="home">
            <div className="head">
                <p>HOME</p>
            </div>
            <div className="body">
                <div className="content">
                    <div className="body-top">
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
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;