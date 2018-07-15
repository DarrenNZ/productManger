import React, {Component} from 'react';

class AddProduct extends Component{

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
     event.preventDefault();
     this.props.onAdd(this.nameinput.value, this.priceinput.value);
     this.nameinput.value = '';
     this.priceinput.value = '';
    }
render(){
    return(
        <form onSubmit={this.onSubmit}>
            <h3> AddProduct </h3>
            <input placeholder="name" ref={nameinput=>{this.nameinput = nameinput}}/>
            <input placeholder="price" ref={priceinput=>{this.priceinput = priceinput}}/>
            <button> add</button>
            <hr/>
        </form>
    );
}

}

export default AddProduct;