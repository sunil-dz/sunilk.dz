import React from 'react';
import { Button } from 'reactstrap';

function contactus() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">Contact us</h1>
                    <p className="lead">Aliquam, nostrum quidem magni suscipit impedit voluptates sequi quisquam unde totam! Nesciunt libero molestias delectus animi ullam.</p>
                    <hr className="my-4"></hr>
                    <p>Eum odit doloremque, hic quod aliquam, nostrum quidem magnisuscipit</p>
                    <p className="lead mt-4">
                        <Button color="primary">Learn More</Button>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default contactus;
