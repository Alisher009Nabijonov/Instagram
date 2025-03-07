import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
const Interesting = () => {
  return (
    <div className="w-full">
      <div className="max-w-5xl mt-10 mx-auto flex-wrap flex items-center justify-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/DGQIEqJA8dg/"
          width={340}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DBRMxaouG8f/"
          width={340}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DG3hHKuoSZu/"
          width={340}
        />
      </div>
      <div className="max-w-5xl  mx-auto flex-wrap flex items-center justify-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/DGZ4AZ6IHao/"
          width={340}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/DGbpBK7xq8O/"
          width={340}
        />
        <InstagramEmbed url="http://instagram.com/p/DDrmO4jyRoH/" width={340} />
      </div>
      <div className="max-w-5xl  mx-auto flex-wrap flex items-center justify-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/DFBCQOuOIp1/?img_index=1"
          width={340}
        />
        <InstagramEmbed url="http://instagram.com/p/DGp7OrnMNET/" width={340} />
        <InstagramEmbed
          url="https://www.instagram.com/p/DFK3sYTyNSP/?img_index=1"
          width={340}
        />
      </div>
    </div>
  );
};

export default Interesting;
