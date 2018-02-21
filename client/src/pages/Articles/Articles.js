import React, {Component} from "react";
import Hero from "../../components/Hero";
import API from "../../utils/api"

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
        }) )
    }

    

    render(){
        return(
            <div>
            <Hero/>
            {this.state.articles.map(article => (
                <h1>{article.author}</h1>
            ))}
            </div>
        )
    }
}


export default Articles;

