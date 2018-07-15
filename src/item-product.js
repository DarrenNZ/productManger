import React, { Component } from 'react';

class ProductItem extends Component {
constructor(props){
    super(props);

    this.state = {
        isEdit: false
    };
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
    
}

onDelete(){
    const {onDelete, name} = this.props;
    onDelete(name);
}

onSubmit(event){
    event.preventDefault();
    this.props.onAdd(this.nameinput.value, this.priceinput.value);
    this.nameinput.value = '';
    this.priceinput.value = '';
   }

onEditSubmit(event){
event.preventDefault();
this.props.onEditSubmit(this.nameinput.value, this.priceinput.value, this.props.name);

this.setState({
    isEdit: false
});
}


onEdit(){
    this.setState({
        isEdit: true
    })

}
    render() {
    const {name, price} = this.props;
        
        return (
            <div>
                {
                this.state.isEdit
                    ? (
                        <form onSubmit={this.onEditSubmit}>
                        <input placeholder='name' ref={nameinput=>{this.nameinput = nameinput}}/>
                        <input placeholder='price' ref={priceinput=>{this.priceinput = priceinput}}/>
                        <button> Save</button>
                        </form>
                    )
                    : (
                <div>
                <span>{name}</span>
                {' | '}
                <span>{price}</span>
                {' | '}
                <button onClick={this.onDelete}>Delete</button>
                <button onClick={this.onEdit}>Edit</button>
                </div> 
                )
                }
            </div>
        );
    }
}
export default ProductItem;