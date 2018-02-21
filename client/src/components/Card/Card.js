import React from "react";
import {Card, Col} from "react-materialize";


const ArticleList = props => {
    <Col m={6} s={12}>
        <Card className="blue-grey darken-1" textClassName="white-text" title="Card title" actions={[<a href="/articles/">
              Reac the Article
            </a>]}>
          <p>{props.fsjdlk}</p>
        </Card>
      </Col>
    
}




export default Card;
