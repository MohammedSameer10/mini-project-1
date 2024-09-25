import { useNavigate } from 'react-router-dom';
import './main.css';
import { useState, useEffect} from 'react';
import cookie from "js-cookie";
import Cookies from 'js-cookie';
import { RiLoader2Fill } from "react-icons/ri";

//import pages
import Navbar from '../navbar/navbar';
import Home from '../home/home';





function Main() {

    const navigate = useNavigate();


    //check for auth
    const [isAuth, setIsAuth] = useState(-1);
    const [isLoaded, setIsLoaded] = useState(0);


    useEffect(()=>{
        const tok = Cookies.get("JWT");

        if(tok){
            // send jwt to server for verification
            setTimeout(() => { 
                setIsAuth(1)
             }, 2000)
        }
        else{
            navigate("/login");
        }
    },[])


    useEffect(() => {
      setTimeout(()=>{
        setIsLoaded(1);
      }, 3500)
    },[])
    


    return(
        <div className="main">
            {isAuth == -1 ?
                (
                    <div className="loadingAnimation">
                        <RiLoader2Fill className="loadingicon" id='loading' />
                        <p>Authenticating...</p>
                    </div>
                ) : (<></>)}
            {isLoaded == 0 && isAuth != -1 ? (
                <div className="loadingAnimation">
                    <RiLoader2Fill className="loadingicon" id='loading' />
                    <p>Loading...</p>
                </div>
            ) : (
                <></>
            )}
            {isLoaded != 0 && isAuth != -1 ? (
                <>
                <Navbar />
                <Home />
                </>
            ):(<></>)}
        </div>
    )
}



export default Main;