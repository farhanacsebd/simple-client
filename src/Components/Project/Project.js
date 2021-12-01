import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const Project = () => {

    const projects = [
        {
            id: 1,
            image: "https://i.ibb.co/4Nrgn90/project1.png",
            name: "Wander Lights",
            details: "Wander Lights is a decoration tools delivery web app. It is a responsive MERN stack website .Added an admin management dashboard where admin can manage all orders or products,added new services and also anyone can make an admin. Also added a user dashboard for order products or review the products.Technology Used: React, React Router, Firebase, Material UI, Node JS,MongoDB, Express JS.",
            website: "https://handicraft-react.web.app/",

        },
        {
            id: 2,
            image: "https://i.ibb.co/1L7f0WS/project2.png",
            name: "Travel-Tourism",
            details: "This is a tourism website .It is also a responsive website using MERN stack. Implement here authentication system with firebase for user login in google account.When a user login he will see his order which is pending or approved.Technology Used: React, React Router, Firebase, React-Bootstrap, Node JS,MongoDB, Express JS.",
            website: "https://travel-tourism-mern.web.app/",

        }
        ,

        {
            id: 3,
            image: "https://i.ibb.co/16CS6W0/project3.png",
            name: "City Hospital",
            details: "Wander Lights is a decoration tools delivery web app.It is a responsive MERN stack website .Added an admin management dashboard where admin can manage all orders or products,added new services and also anyone can make an admin.Also added a user dashboard for order products or review the products.Technology Used: React, React Router, Firebase, Material UI, Node JS,MongoDB, Express JS.",
            website: "https://care-hospital-web.web.app/",

        }
    ]


    return (
        <div id="project" className="" id="project">
            <div className="container ">
                <div className="projectTitle text-center">
                    <h1 style={{ fontSize: "3rem" }} className=" pb-5 text-center ">My Projects</h1>

                    <div className="row mt-3 gx-2">
                        {
                            projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Project;