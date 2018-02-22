import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/api";


class Page extends Component {
    state = {
        article: {}
    }

   componentDidMount() {
       API.getOneArticle(this.props.match.params.title)
       .then(res => {
           this.setState({article: res.data[0]})
       })
       .catch(err => console.log(err));
   }

   render(){
       return(
           <div>
           <p>This is the page</p>
           <h1>{this.state.article.title}</h1>
           </div>
       )
   }
}


export default Page;
