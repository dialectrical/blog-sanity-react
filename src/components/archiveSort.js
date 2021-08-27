import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import sanityClient from "../client.js";
import { Timestamp } from "./Timestamper.js";
import Emojify from "./CategoryEmojifier.js";

export const ArchiveSort = () => {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          publishedAt,
          categories[0] -> {
            title
          }
        }`
      )
      .then(data =>
        setAllPosts(
          data.sort(function(a, b) {
            return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
          })
        )
      )
      .catch(console.error);
  }, []);

  return (
    <Table striped hover>
      <tbody>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <tr>
              <td>
                <Link to={"/" + post.slug.current} key={post.slug.current}>
                  <span key={index}>
                    {console.log(post)}
                    {Emojify(post.categories)} {post.title}
                  </span>{" "}
                </Link>
              </td>
              <td className="text-muted" style={{ textAlign: "right" }}>
                {Timestamp(post.publishedAt)}
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
