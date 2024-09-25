import './navbar.css';

// import icons
import { FaHome } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";


//img import
import bitlogo from '../assets/img/bitlogo.png';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';



function Navbar() {

    const navigate = useNavigate()


    //page navigate
    function navigateTo(page) {

        const homenav = document.getElementById("homenav");
        const roomnav = document.getElementById("roomnav");
        const booknav = document.getElementById("booknav");

        if (page == 0) {
            homenav.style.backgroundColor = "rgb(131, 154, 255)";
            roomnav.style.backgroundColor = "";
            booknav.style.backgroundColor = "";
            navigate("/")
        }
        else if (page == 1) {
            homenav.style.backgroundColor = "";
            roomnav.style.backgroundColor = "rgb(131, 154, 255)";
            booknav.style.backgroundColor = "";
            navigate("/availability")
        }
        else if (page == 2) {
            homenav.style.backgroundColor = "";
            roomnav.style.backgroundColor = "";
            booknav.style.backgroundColor = "rgb(131, 154, 255)";
            navigate("/book")
        }


    }

    const handleLogout = () => {
        Cookies.remove("JWT");
        navigate("/login");
    }





    return (
        <div className="navbar">
            <div className="head">
                <img src={bitlogo} alt="" />
            </div>
            <div className="body">
                <div className="homenav nav" id='homenav' onClick={() => { navigateTo(0) }}>
                    <FaHome className='icon' />
                    <p>Home</p>
                </div>
                <div className="roomnav nav" id='roomnav' onClick={() => { navigateTo(1) }}>
                    <FaList className='icon' />
                    <p>Room Availability</p>
                </div>
                <div className="booknav nav" id='booknav' onClick={() => { navigateTo(2) }}>
                    <FaBookmark className='icon' />
                    <p>Book Room</p>
                </div>
                <div className="logoutnav" onClick={handleLogout}>
                    <IoIosLogOut className='icon' />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;