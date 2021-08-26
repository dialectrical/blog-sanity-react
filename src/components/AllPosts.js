import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import { NavBar } from "./NavBar";
import { Jumbotron, Container, Row, Col, Table } from "reactstrap";

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
          }
        }`
      )
      .then(data => setAllPosts(data))
      .catch(console.error);
  }, []);

  console.log(allPostsData);

  return (
    <Container className="themed-container" fluid="sm">
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
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
          <Table striped hover bordered>
            <thead>
              <tr>
                <th>Recent posts</th>
              </tr>
            </thead>
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
