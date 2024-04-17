import { Link } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import styled from 'styled-components'
let courseCard = [1,2,3,4];
const LandingPage = () => {
    return (
        <>
        <Container >
            {/* Hero section */}
            <div className="w-100 hero pt-4 pe-5 vh-100">
            {/* side floated menu can be integrated */}
                <div className="logo border-danger" >
                    <img className="w-100" src="https://cdn.dribbble.com/users/5461590/screenshots/15838456/github_4x.png" alt="" />
                </div>
            <header className="w-100" >
                <nav>
                    <ul className="d-flex justify-content-end fs-4 fw-semibold">
                        <Link>
                            <li>Home</li>
                        </Link>
                        <Link>
                            <li>Page</li>
                        </Link>
                        <Link>
                            <li>Blog</li>
                        </Link>
                        <Link>
                            <li>Shop</li>
                        </Link>
                        <Link>
                            <li>Contact</li>
                        </Link>
                        <div className="mx-4 d-flex gap-4">
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
                <p>Corporate Trainning</p>
                <h1 className="fw-semibold text-white">E Learning Main HJeading</h1>
                <div className="hero-content-right d-flex justify-content-end w-100">
                    <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, amet mollitia. Possimus, voluptatibus nemo iste aspernatur reiciendis </p>
                </div>
            </div>
            </div>

            {/* Course Section */}
            <div className="py-5">
                {/* header */}
                <div className="text-center mb-5 course-section" >
                    <h1 className="fw-bolder">New Courses</h1>
                    <p className="fs-6">some text little little</p>
                </div>
                {/* card container */}
                <div className="course-container px-5 d-flex gap-5 justify-content-center " >
                    {/* card */}
                    {
                        courseCard.map(() =>  <div className="course-card d-flex flex-column rounded-2">
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
        </Container>
        </>
    )
}
export default LandingPage;
const Container = styled.div`
.logo {
    position: absolute;
    mix-blend-mode: lighten;
    width: 100px;
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
    font-size: 150px;
    /* font-weight: 600; */
    /* color: white; */
    max-width: 1025px;
}
.hero-head p {
    color: white;
    font-weight: 600;
    font-size: 20px;
    margin: 0;
}
.hero-head > p:nth-of-type(1) {
    width: 1020px;
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

`