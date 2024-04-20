import { Link } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from 'styled-components'
import { useState } from "react";
let courseCard = [1,2,3,4];
const LandingPage = () => {
    const [toggle, setToggle] = useState(true);
    
    return (
        <>
        <Container >
            {/* Hero section */}
            <div className={`w-100 hero ${toggle ? '' : 'toggle-menu'} pt-4 vh-100`}>
            {/* side floated menu can be integrated */}
                <div className="logo border-danger" >
                    <img className="w-100" src="https://cdn.dribbble.com/users/5461590/screenshots/15838456/github_4x.png" alt="" />
                </div>
            <header className="w-100 " >
                <div className="absolute mobile-menu" onClick={() => setToggle(!toggle)} ><GiHamburgerMenu /></div>
                <nav>
                    <ul className={`d-sm-flex ${toggle ? 'd-none' : ''}  justify-content-end fs-4 fw-semibold`}>
                    <li className="nav-item">
                                    <Link >Home</Link>
                            </li>
                            <li>
                                    <Link>Page</Link>
                            </li>
                            <li >
                                    <Link>Blog</Link>
                            </li>
                            <li>
                                    <Link>Shop</Link>
                            </li>
                            <li>
                                    <Link>Contact</Link>
                            </li>
                        <div className="d-sm-flex gap-4 d-none">
                            <div>
                                <FaCartPlus size={'30px'} color="white" />
                            </div>
                            <div>
                                <CgMenuGridR size={'30px'} color="white"/>
                            </div>
                        </div>
                    </ul>
                </nav>
            </header>
            <div className="hero-head d-flex flex-column align-items-center justify-content-center h-100" >
                <p className="m-0 w-100 fw-semibold text-white px-2">Corporate Trainning</p>
                <h1 className="fw-semibold text-white px-4">E Learning Main HJeading</h1>
                <div className="hero-content-right d-flex justify-content-end w-100">
                    <p className="mt-2 px-2 fw-semibold text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, amet mollitia. Possimus, voluptatibus nemo iste aspernatur reiciendis </p>
                </div>
            </div>
            </div>
            {/* Course Section */}
            <div className="py-3 container-fluid px-5">
                {/* header */}
                <div className="text-center mb-5 course-section" >
                    <h1 className="fw-bolder">New Courses</h1>
                    <p className="fs-6">some text little little</p>
                </div>
                {/* card container */}
                <div className="course-container row justify-content-md-center  justify-content-lg-center justify-content-xl-start ">
                    {/* card */}
                    {/* <div className="d-flex flex-wrap justify-content-around gap-4"> */}

                    {
                        courseCard.map(() =>  <div className="course-card d-flex flex-column rounded-2 my-2 ">
                        {/* image */}
                        <div>
                            <img className="w-100 rounded-3" src="https://media.licdn.com/dms/image/D4D22AQF0LGudQWRyMg/feedshare-shrink_800/0/1694273133924?e=2147483647&v=beta&t=7859xSlvxyRiUVWbaGxlOw1X6k-YrLJS26eWttYBhmk" alt="" />
                        </div>
                        {/* content */}
                        <div className="px-4 py-4 d-flex flex-column gap-2">
                            {/* subhead */}
                            <h3 className="fs-5 text-info-emphasis" >
                            Communications
                            </h3>
                            {/* main head */}
                            <h2 className="fs-4 fw-semibold">
                            Successful Negotiation:Master your Negotiating...
                            </h2>
                            {/* description */}
                            <p className="fs-4 text-body-secondary" >
                            Negotiation is a skill well worth mastering - by putting ...
                            </p>
                            {/* price */}
                            <div>
                                <p>price .... Rs</p>
                            </div>
                        </div>
                    </div>)
                    }
                </div>
            </div>
            {/* No. 1 sale */}
            <div className="number-one w-100 bg-dark text-white fw-semibold">
                {/* container */}
                <div className="d-flex overflow-hidden"> 
                    {/* Text */}
                    <div>
                        1k+Sales
                    </div>
                    <div>
                        1k+Sales
                    </div>
                    <div>
                        1k+Sales
                    </div>
                </div>
            </div>
            {/* course or teacher describe */}
            <div className="describe px-4 d-flex justify-content-center ">
                {/* whole box */}
                <div className="d-flex gap-5 flex-wrap justify-content-center align-items-center">
                    {/* image */}
                    <div className="img-container">
                        <img className="w-100" src="https://qph.cf2.quoracdn.net/main-qimg-5d4c440bd2142d5b259cc7665f62c037-lq" alt="" />
                    </div>
                    {/* content */}
                    <div className="describe-content d-flex justify-content-center flex-column">
                        <div className="describe-content-area d-flex gap-5 align-items-center">
                            {/* big digit */}
                            <div className="text-danger fs-1 fw-semibold" >
                                45+
                            </div>
                            {/* content */}
                            <div>
                                <h4>Best and most involed teacher</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati eaque totam. Incidunt inventore</p>
                            </div>
                        </div>
                        <div className="describe-content-area d-flex gap-5 align-items-center">
                            {/* big digit */}
                            <div className="text-danger fs-1 fw-semibold" >
                                45+
                            </div>
                            {/* content */}
                            <div>
                                <h4>Best and most involed teacher</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati eaque totam. Incidunt inventore</p>
                            </div>
                        </div>
                        <div className="describe-content-area d-flex gap-5 align-items-center">
                            {/* big digit */}
                            <div className="text-danger fs-1 fw-semibold" >
                                45+
                            </div>
                            {/* content */}
                            <div>
                                <h4>Best and most involed teacher</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati eaque totam. Incidunt inventore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* review */}
            <div className="review my-5 container-fluid">
                <h1 className="text-center">What People Thinks About Us</h1>
                {/* review container */}
                {/* <div className="p-5 d-flex justify-content-around gap-5 " > */}
                <div className="p-5 row g-4">
                    {/* review card */}
                    {/* <div className=" review-card border p-4 d-flex flex-column gap-3"> */}
                    <div className="col-lg-4 col-md-6">
                        <div className="review-card p-4">
                            {/* img */}
                            <div className="reviewer-img">
                                <div>
                                    <img className="w-100" src="https://i.pinimg.com/736x/2f/f4/b8/2ff4b8800e3452d40038ee66b3b9bc48.jpg" alt="" />
                                </div>
                            </div>
                            {/* rating */}
                            <div className="fs-5" >
                                4.9 rating
                            </div>
                            {/* content */}
                            <div className="fs-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quam tenetur eaque nemo sequi dignissimos, 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="review-card p-4">
                            {/* img */}
                            <div className="reviewer-img">
                                <div>
                                    <img className="w-100" src="https://i.pinimg.com/736x/2f/f4/b8/2ff4b8800e3452d40038ee66b3b9bc48.jpg" alt="" />
                                </div>
                            </div>
                            {/* rating */}
                            <div className="fs-5" >
                                4.9 rating
                            </div>
                            {/* content */}
                            <div className="fs-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quam tenetur eaque nemo sequi dignissimos, 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="review-card p-4">
                            {/* img */}
                            <div className="reviewer-img">
                                <div>
                                    <img className="w-100" src="https://i.pinimg.com/736x/2f/f4/b8/2ff4b8800e3452d40038ee66b3b9bc48.jpg" alt="" />
                                </div>
                            </div>
                            {/* rating */}
                            <div className="fs-5" >
                                4.9 rating
                            </div>
                            {/* content */}
                            <div className="fs-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quam tenetur eaque nemo sequi dignissimos, 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <footer>
                {/* links */}
                <div className="d-flex  justify-content-start flex-wrap">
                    <div className="links" >
                        <ul>
                            <li>Services</li>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                        </ul>      
                    </div>
                    <div className="links">
                        <ul>
                            <li>Services</li>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                        </ul>      
                    </div>
                    <div className="links">
                        <ul>
                            <li>Services</li>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                            <Link>
                                <li> demo Link </li>     
                            </Link>
                        </ul>      
                    </div>
                </div>
                {/* social */}
                <div className="social">
                    <ul className="d-flex gap-5 justify-content-start flex-wrap mt-5">
                        <Link>
                            <li>Instagram</li>
                        </Link>
                        <Link>
                            <li>Facebook</li>
                        </Link>
                        <Link>
                            <li>Youtube</li>
                        </Link>
                    </ul>
                </div>
            </footer>
        </Container>
        </>
    )
}
export default LandingPage;
const Container = styled.div`
overflow: hidden;
.mobile-menu {
    display: none;
}
.logo {
    position: absolute;
    mix-blend-mode: lighten;
    width: 100px;
}
header {
    padding-right: 30px;
}
/* header ul{ 
    justify-content: flex-end;
} */
header ul > div {
    margin: 0 1.5rem;
}
.hero {
    /* padding-top: 40px; */
    /* padding-right: 60px; */
    /* height: 100vh; */
    max-height: 1080px; 
    background-repeat: no-repeat;
    background-size: cover;
}
.hero ul {
    /* justify-content: end; */
    gap: 30px;
    /* font-size: 20px; */
    /* font-weight: 600; */
}
.hero-head {
    /* display: flex;
    flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    /* height: 100%; */
}
.hero-head h1{
    /* font-size: 150px; */
    font-size: 10vw;
    max-width: 900px;
    /* font-weight: 600; */
    /* color: white; */
    max-width: 1025px;
}

.hero-head p {
    /* color: white; */
    /* font-weight: 600; */
    font-size: 20px;
}
.hero-head > p:nth-of-type(1) {
    max-width: 1020px;
}
.hero-content-right {
    /* display: flex;
    justify-content: end; */
    /* width: 100%; */    
}
.hero-content-right P{
    /* margin-top: 20px; */
    width: 500px;
}
@media screen and (min-width: 1400px){  
    .hero-head h1 {
        font-size: 140px;
    }
}
@media screen and (max-width: 1024px) {
    .hero-head p {
    font-size: 16px;
    }
    .hero-head {
        padding: 0 20px;
    }
}
@media screen and (max-width: 768px){
    header {
        padding: 0 10px;
    }
    header ul > div {
        margin: 0;
    }
    .hero ul {
        gap: 20px;
    }
    .hero-head h1{
        margin: 70px 0;
    }
    .hero-head p{
        font-size: 22px;
    }
    .hero-head {
        text-align: center;
    }
    .hero-content-right p  {
        width: 100%;
        max-width: 660px;
    }
} 
@media screen and (max-width: 600px){
    .mobile-menu {
    display: block;
    position: absolute;
    right: 20px;
    font-size: 40px;
    color: white;
    }
}
@media screen and (max-width: 500px) {
  
    .mobile-menu, .logo {
        position:absolute;
        z-index: 33;
    }
    .toggle-menu nav{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0px;
        left: 0;
        /* background-color: black; */
        backdrop-filter: blur(10px);
    }
    .toggle-menu ul {
        flex-direction: column;
        gap: 60px;
    }
    .toggle-menu ul li {
        font-size: 40px;
        text-align: center;
    }
    .toggle-menu .nav-icon {
        display: none;
    }
        .hero-head p {
            font-size: 14px;
            }
            .hero {
                padding-right: 0;
            }
            .hero-head h1 {
                font-size: 56px;
            }
            .hero-head {
                padding: 0;
            }
}
/* course Section */
.course-section h1 {
    font-size: 50px;
}
.course-container {

}
.course-card{
    width: 380px;
    height: 500px;
    background-color: #0000000f;
}
/* .course-card > div:nth-of-type(2){
    padding: ;
} */

/* Number 1  */
.number-one {
    height: 300px;
    font-size: 165px;
}

.number-one > div {
    display: flex;
    gap: 80px;
}
.describe {
    height: auto;
    padding: 50px 0;
    background-color: #ff000026;
}
.describe .img-container {
    max-width: 600px;
}
.describe-content-area {
    max-width: 500px;
}
/* .review section */
.review-card {
    height: 320px;
    /* max-width: 370px;
    margin: 10px; */
    border: 2px solid red;
}
.reviewer-img > div{
    max-width: 150px;
}
/* 
@media screen and (max-width: 1200px) {
    .review > div {
        flex-wrap: wrap;    
    }
    .review-card {
        max-width: 600px;
    }
}
 */
/* footer */
footer {
    background-color: black;
    padding: 100px 50px;
}
.links {
    /* border: 1px solid red; */
    margin: 0 70px;
}
footer ul {
    text-align: center;
}
footer ul > li:nth-of-type(1) {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}
.social li{
    border: 1px solid white;
    padding: 5px 10px;
    border-radius: 10px;
    font-weight: 600;
    background-color: green;
}
`