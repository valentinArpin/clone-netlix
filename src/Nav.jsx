import './Nav.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Nav() {

    const [show, handleShow] = useState(false);
    const navigate = useNavigate()


    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    };
    //prologue navbar transparente au scroll
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    }, []);

    return(
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    onClick={() => navigate('/')}
                    className="nav__logo"
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <img
                    //4.profile navigation
                    onClick={() => navigate('/profile')}
                    className="nav__avatar"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    alt=""
                />
            </div>
        </div>
    )
}