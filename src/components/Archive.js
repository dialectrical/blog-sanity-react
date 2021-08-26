import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { Jumbotron, Container, Row, Col, Table } from "reactstrap";

export default function Archive() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          publishedAt
            }
          }
        }`
      )
      .then(data => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <Container className="themed-container" fluid="sm">
      <Row>
        <Col>
          <Container fluid>
            <h1 className="display-3">🗄️ Archive</h1>
          </Container>
          <Table striped hover bordered>
            <tbody>
              {allPostsData &&
                allPostsData.map((post, index) => (
                  <tr>
                    <td>
                      <Link
                        to={"/" + post.slug.current}
                        key={post.slug.current}
                      >
                        <span key={index}>📄 {post.title}</span>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
