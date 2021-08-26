import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Container, Row, Col, Spinner } from "reactstrap";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

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
        body
      }`,
        { slug }
      )
      .then(data => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData)
    return (
      <Row>
        <Col>
          <Spinner />
        </Col>
      </Row>
    );

  return (
    <Container className="themed-container" fluid="sm">
      <Row>
        <Row>
          <Col>
            <h2>{postData.title}</h2>
          </Col>
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
