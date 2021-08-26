import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import sanityClient from "../client.js";

export const ArchiveSort = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
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

  console.log(allPostsData);

  return (
    <Table striped hover>
      <tbody>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <tr>
              <td>
                <Link to={"/" + post.slug.current} key={post.slug.current}>
                  <span key={index}>📄 {post.title}</span>{" "}
                </Link>
              </td>
              <td style={{ textAlign: "right" }}>{post.publishedAt}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
