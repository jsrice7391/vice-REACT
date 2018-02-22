import React, {Component} from "react";
import Hero from "../../components/Hero";
import API from "../../utils/api"
import ArticleList from "../../components/Card"
import { Navbar, NavItem, Icon } from "react-materialize";
import {Link} from "react-router-dom";



class Articles extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        this.getArticles()
    }

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

