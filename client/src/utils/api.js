import axios from "axios";
// AXIOS is going to allow us to use our routes on the Expresss server and get information back.

export default {
    // This will get all of the articles we want
    getArticles: () => {
        return axios.get("/api/articles")
    },
    // This will be used to scrape all of the articles. The scraper logic will be hidden o the server side using Cheerio and request.
    scrapeArticles: () => {
        return axios.get("/api/articles/scrape")
    },
    // We will pass in the TITLE of an article and get just that article
    getOneArticle: (title) => {
        return axios.get("/api/articles/" + title)
    }
}