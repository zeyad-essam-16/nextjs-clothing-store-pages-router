import React from "react";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { cwd } from "process";
import ReactMarkdown from "react-markdown";

const index = ({ content }) => {
  return (
    <>
      <div className="markdown_wrapper">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const markDownPath = path.join(
    cwd(),
    "pages",
    "privacy-policy",
    "privacyPolicy.md"
  );

  const fileData = fs.readFileSync(markDownPath);

  const { data, content } = matter(fileData);

  return {
    props: {
      content,
    },
  };
}
