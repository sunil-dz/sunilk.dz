import React,{Component} from 'react';
import Heading from '../component/heading';

class About extends Component {
    constructor(props){
        super(props)
        this.state={
            toggle:false
        }
        this.toggleHandler = this.toggleHandler.bind(this)
    }
    toggleHandler(){
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render(){
        return (            
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="display-4">About us</h1>
                        <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit doloremque, hic quod aliquam, nostrum quidem magni suscipit impedit voluptates sequi quisquam unde totam! Nesciunt libero molestias delectus animi ullam.</p>
                        <hr className="my-4"></hr>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odit doloremque, hic quod aliquam, nostrum quidem magnisuscipit</p>
                        <p className="lead mt-4">
                            {/* <Button color="primary">Learn More</Button> */}
                        <button className='btn btn-primary' onClick={this.toggleHandler}>{this.state.toggle ? 'Show More' : 'Show Less'}</button>
                        </p>
                    </div>
                <Heading name={'Sunil Kumar'}/>
                </div>       
        )
    }
}

export default About;
