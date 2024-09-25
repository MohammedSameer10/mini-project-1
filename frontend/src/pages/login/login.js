import './login.css';
import bitlogo from '../assets/img/bitlogo.png';
import cookie from "js-cookie";
import { VscLoading } from "react-icons/vsc";
import { RiLoader2Fill } from "react-icons/ri";
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Login() {
    const api = "http://www.localhost:8080/api/v1/"
    const navigate = useNavigate();
    //check for authentication token
    const [isAuth, setIsAuth] = useState(-1);

    useEffect(() => {
        const tok = cookie.get("JWT");

        if (tok) {
            // ->send the tok to server
            setTimeout(() => {
                navigate("/")
            }, 1200)

        }
        else {
            setTimeout(() => {
                setIsAuth(0)
            }, 1200)
        }
    })

    // check for compount loaded
    const [isLoaded, setisLoaded] = useState(0);



    // set usestate for login details
    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [isFetching, setIsFetching] = useState(0);

    const handleSubmit = async () => {
        setIsFetching(1);
        
        //check for empty
        if (userName == '' || password ==''){
            
        }
        else{
            try {
                const res = await axios.post(api+"login",{
                    userName: userName,
                    password: password
                })
                console.log(res)
                setuserName('')
                setpassword('')

                if(res["data"]["code"] == 1){
                    cookie.set("JWT",res["data"]["JWT"])
                    navigate("/")
                }
            }
            catch (err) {
    
            }
        }
        



        setIsFetching(0)
        // cookie.set("JWT", "sample")
        // navigate("/");
    }


    // auth & loading animation
    // useEffect(() => {
    //     const authTime = setTimeout(() => {
    //         setIsAuth(0);
    //     }, 2000)


    //     return () => clearInterval(authTime);

    // }, [])


    useEffect(() => {
        const loadTime = setTimeout(() => {
            setisLoaded(1);
        }, 3000)


        return () => clearInterval(loadTime);

    }, [])





    return (<>
        <div className="login">
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
                <div className="loginbox">
                    <div className="loginbox-head">
                        <h1>Login</h1>
                    </div>
                    <div className="loginbox-body">
                        <div className="bitimg">
                            <img src={bitlogo} alt="" />
                        </div>
                        {isFetching == 0 ? (
                            <div className="logininput">
                                <div className="inputusername">
                                    <p>Username</p>
                                    <input type="text"
                                        name="username"
                                        id="username"
                                        placeholder='Username'
                                        onChange={(e) => { setuserName(e.target.value) }} />
                                </div>
                                <div className="inputpassword">
                                    <p>Password</p>
                                    <input type="password"
                                        name="password"
                                        id="password"
                                        placeholder='Password'
                                        onChange={(e) => { setpassword(e.target.value) }} />
                                </div>
                            </div>
                        ) : (
                            <div className="loadingAnimation" style={{ backgroundColor: "rgb(198, 213, 255)" }}>
                                <RiLoader2Fill className="loadingicon" id='loading' />
                                <p>Validating...</p>
                            </div>
                        )}
                    </div>
                    <div className="loginbox-bottom">
                        <div className="loginbtn" onClick={handleSubmit}>
                            <p>LOGIN</p>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    </>
    )
}

export default Login;