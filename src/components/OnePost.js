import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import { Timestamp } from "./Timestamper.js";
import Emojify from "./CategoryEmojifier.js";
import BlockContent from "@sanity/block-content-to-react";
import { Container, Row, Col, Spinner } from "reactstrap";

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug] {
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          categories[0] -> {
            title
          },
        body,
        publishedAt
      }`,
        { slug }
      )
      .then(data => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData)
    return (
      <Container style={{ padding: "10% 50% 50% 50%" }}>
        <Spinner children="" />
      </Container>
    );

  return (
    <Container className="themed-container" fluid="sm">
      <Row>
        <Row>
          <Col>
            <h2>
              {Emojify(postData.categories)}
              {postData.title}
            </h2>
          </Col>
        </Row>
        <Row>
          <p className="text-muted">
            Posted at {Timestamp(postData.publishedAt)} to{" "}
            {postData.categories.title}
          </p>
        </Row>
        <Row>
          <Col>
            <BlockContent
              blocks={postData.body}
              projectId={sanityClient.clientConfig.projectID}
              dataset={sanityClient.clientConfig.dataset}
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
