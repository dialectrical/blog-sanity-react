import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { ArchiveSort } from "./archiveSort";
import { Container, Row, Col, Spinner } from "reactstrap";

export default function Archive() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          publishedAt,
        }`
      )
      .then(data => setAllPosts(data))
      .catch(console.error);
  }, []);

  if (!allPostsData)
    return (
      <Container style={{ padding: "10% 50% 50% 50%" }}>
        <Spinner children="" />
      </Container>
    );

  return (
    <Container className="themed-container" fluid="sm">
      <Row>
        <Col>
          <Container fluid>
            <h1 className="display-3">🗄️ Archive</h1>
          </Container>
          <ArchiveSort />
        </Col>
      </Row>
    </Container>
  );
}
