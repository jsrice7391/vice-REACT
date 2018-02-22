import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/api";

// The page component will hold the indiviaul article which is going to be searchable by title.


class Page extends Component {
    // Here we set the state of the component to have an article element
    state = {
        article: {}
    }

   componentDidMount() {
    //    We will run the API call from our UTILs folder that has AXIOS which will handle our communication to the Express router. The query parameter is going through and finding the article that matches by the title in the URL
       API.getOneArticle(this.props.match.params.title)
    //    THis will set the state of the component to the first article that comes back.
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


// Exporting is the default behavior
export default Page;
