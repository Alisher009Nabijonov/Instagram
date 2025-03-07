import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import Stories from 'react-insta-stories';
const Rels = () => {
  return (
    <div
      className="flex items-center"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "black",
        padding: "20px",
      }}
    >
      <InstagramEmbed
        url="https://www.instagram.com/p/DGQIEqJA8dg/"
        width={428}
      />
        <InstagramEmbed
        url="http://instagram.com/p/DFSs4KSh3Bq/?img_index=2"
        width={428}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/DBRMxaouG8f/"
        width={428}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/DG3hHKuoSZu/"
        width={428}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/DDZP9HqsLLx/"
        width={428}
      />
         <InstagramEmbed
        url="https://www.instagram.com/p/DFK3sYTyNSP/?img_index=1"
        width={428}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/DG2yopigqIn/"
        width={428}
      />
      <InstagramEmbed url="http://instagram.com/p/DGp7OrnMNET/" width={428} />
    </div>
  );
};

export default Rels;
