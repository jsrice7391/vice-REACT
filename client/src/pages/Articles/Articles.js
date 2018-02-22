import React, {Component} from "react";
import Hero from "../../components/Hero";
import API from "../../utils/api"
import ArticleList from "../../components/Card"
import { Navbar, NavItem, Icon } from "react-materialize";
import {Link} from "react-router-dom";



class Articles extends Component {

    // This is going to list all of the articles, so we will store those articles in an array.
    state = {
        articles: []
    }

    // When the componenet loads, call the getArticles funtion from the API that we created with AXIOS
    componentDidMount() {
        this.getArticles()
    }

    // This will get all of the articles and then set the response to the state of this component.
    getArticles(){
        API.getArticles().then(res =>
        this.setState({
            articles: res.data
        }))
    }
    render(){
        return <div>

            <Navbar brand="WebScraper" right>
              <NavItem href="get-started.html">
                <Icon>search</Icon>
              </NavItem>
            </Navbar>
            <Hero/>

        {/* Loops through all of the articles of the component and creates boxes with the articles title and its link */}
            {this.state.articles.map(article => (
              <ArticleList key={article.id}>
              <Link to={"/api/articles/" + article.title}><p>{article.title}</p></Link>
              <p>{article.author}</p> 
              </ArticleList>
            ))}
          </div>;
    }
}


export default Articles;

