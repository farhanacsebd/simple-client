import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="container-fluid bg-black text-white mt-5 py-1 px-sm-1 px-md-5">
            <div className="container text-center py-5">
                <img src="https://logos.textgiraffe.com/logos/logo-name/Farhana-designstyle-boots-m.png" style={{ width: "300px " }} alt="" />
                <h4 className="p-3">Any Time to Connect</h4>
                <div class="d-flex justify-content-center mb-4">
                    <a class="btn btn-light btn-social mr-2" href="https://github.com/farhanacsebd"></a>
                    <a class="btn btn-light btn-social mr-2" href="#"><i class="fab fa-facebook"></i></a>
                    <a class="btn btn-light btn-social mr-2" href="https://www.linkedin.com/in/farhanacsebd/"><i
                        class="fab fa-linkedin-in"></i></a>

                </div>
                <p className="text-white">Copyright © 2021. All Rights Reserved by Farhana Binte Hasan.</p>
            </div>
        </div>
    );
};

export default Footer;