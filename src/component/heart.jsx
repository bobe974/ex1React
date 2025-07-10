 import { Component } from "react";
 class Heart extends Component {

    render() { 
        let classes = "fa fa-heart";
        console.log("isliked from heart " + this.props.isLiked)
        if(!this.props.isLiked) classes += "-o";
        return (
            
            //<button onClick={this.props.OnLike}><img src={this.props.isLiked? this.state.heartFill : this.state.heartEmpty } alt="" /></button>
            <i className = {classes}  onClick={this.props.onLike} aria-hidden="true"></i>           
        );
    }
 }
  
 export default Heart;