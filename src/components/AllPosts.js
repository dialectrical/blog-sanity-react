import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { Timestamp } from "./Timestamper.js";
import BlockContent from "@sanity/block-content-to-react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Table,
  Card,
  CardDeck,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            }
          },
        body,
        publishedAt
        }`
      )
      .then(data =>
        setAllPosts(
          data.sort(function(a, b) {
            console.log(a.publishedAt);
            return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
          })
        )
      )
      .catch(console.error);
  }, []);

  return (
    <Container className="themed-container" fluid="sm">
      <Row>
        <Col>
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">&#128075; Hello.</h1>
            </Container>
            <p>
              This is a blog I made using React and Sanity. I also used
              Reactstrap for the layout. I don't like blogging.
            </p>
          </Jumbotron>
        </Col>
      </Row>
      <CardDeck>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Card
              style={{
                marginBottom: "2%"
              }}
            >
              <CardBody>
                <Row>
                  <Col>
                    <CardTitle tag="h5" key={index}>
                      {post.title} 📄
                    </CardTitle>
                  </Col>
                  <Col>
                    <CardSubtitle
                      tag="h6"
                      className="text-muted"
                      style={{ textAlign: "right" }}
                    >
                      {Timestamp(post.publishedAt)}
                    </CardSubtitle>
                  </Col>
                </Row>
                <CardText>
                  <BlockContent
                    blocks={post.body.slice(0, 2)}
                    projectId={sanityClient.clientConfig.projectID}
                    dataset={sanityClient.clientConfig.dataset}
                  />
                </CardText>
                <CardText style={{ textAlign: "right" }}>
                  <Link
                    to={"/" + post.slug.current}
                    key={post.slug.current}
                    style={{ color: "white" }}
                  >
                    {" "}
                    <Button color="dark">Read more</Button>
                  </Link>
                </CardText>
              </CardBody>
            </Card>
          ))}
      </CardDeck>
    </Container>
  );
}
