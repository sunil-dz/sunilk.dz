import React from 'react';
import { Button } from 'reactstrap';

function ourteam() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Our Team</h1>
                    <p className="lead"> Eum odit doloremque, hic quod aliquam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit doloremque, hic quod aliquam, nostrum quidem magni suscipit impedit voluptates sequi quisquam unde totam!.</p>
                    <hr className="my-4"></hr>
                    <p>nostrum quidem magnisuscipit Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit doloremque, hic quod aliquam, nostrum quidem magnisuscipit</p>
                    <p className="lead mt-4">
                        <Button color="primary">Learn More</Button>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ourteam; 
