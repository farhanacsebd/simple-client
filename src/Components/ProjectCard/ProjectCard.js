import React from 'react';

const ProjectCard = (props) => {
    const { id, image, name, details, website } = props.project;
    return (
        <div className="col-md-4 my-3">
            <div className="">
                <div className="">
                    <img src={image} />
                </div>
            </div>

            <div className="">
                <div className="">
                    <div className="">
                        <h3 className='mb-4'>{name}</h3>
                    </div>
                    <div className="">
                        <a href={website} type='button' className='btn btn-sm btn-custom me-3 mb-2' rel="noreferrer" target="_blank">
                            <button type="button" class="btn btn-warning">Website</button>
                        </a>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;