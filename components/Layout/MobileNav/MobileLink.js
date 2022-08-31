import React from "react";
import Link from "next/link";

const MobileLink = ({ link }) => {
  return (
    <li>
      <Link href={link.url}>{link.text}</Link>
    </li>
  );
};

export default MobileLink;
