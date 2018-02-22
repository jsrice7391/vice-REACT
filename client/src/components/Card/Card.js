import React from "react";
import {Card, Col} from "react-materialize";
import {Link} from "react-router-dom";

 

const ArticleList = props => {
    <Col m={2} s={2}>
        <Card className="blue-grey darken-1" textClassName="white-text" title="Card title" actions={[<a href="/articles/">
              Reac the Article
            </a>]}>
          <p>{props.fsjdlk}</p>
        </Card>
      </Col>
    
}




export default Card;
