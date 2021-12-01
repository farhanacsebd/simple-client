import React from 'react';
const About = () => {
    return (


        <div id="about" style={{}}>
            <div className="container mt-2 pb-4">
                <h1 style={{ fontSize: "3rem" }} className=" pb-4 text-center ">About Me</h1>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src="
https://i.ibb.co/vj2fkz1/abcdef2.png" alt="" className="w-10 pt-3 mt-4" style={{ height: "305px" }} />
                    </div>
                    <div className="col-12 col-md-8 text-start">
                        <div className="bg-secondary rounded mt-5 p-5"> <h3 className="text-white">Web Developer</h3>
                            <p className="text-white">I am Farhana Binte Hasan, A tech enthusiast and love to learn and explore web technologies. I have completed my Bsc. degree in computer science and engineering at Dhaka International University in 2021. I am a junior web developer. Currently, I am exploring React js, Node, MongoDb and React native also.</p><br />
                            <a className="btn-main-offer fw-bold" href="https://drive.google.com/uc?export=download&id=1mbMk-9K7CeGkTpfdG37Lou8E2VDs1_BA" target="_blank">MyResume</a></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;