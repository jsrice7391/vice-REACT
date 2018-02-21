import React, {Component} from "react";
import Hero from "../../components/Hero";
import API from "../../utils/api"
import ArticleList from "../../components/Card"


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
            <Hero />

            {this.state.articles.map(article => (
              <ArticleList
                key={article.id}
                title={article.title}
                link={article.author}
              >
              </ArticleList>
            ))}
          </div>;
    }
}


export default Articles;

