import React, { useState } from "react";
import "../../commun/css/style.css";

export const ButtonLike = () => {
  const [liked, setLiked] = useState(false);
  function like() {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  }
  return (
    <div className="img">
      {liked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.836 39.835"
          onClick={like}
        >
          <path
            d="M39.836,14.742c0,1.259-0.193,2.504-0.574,3.701c-1.977,8.336-16.367,17.583-18.008,18.614
            c-0.406,0.256-0.869,0.383-1.33,0.383c-0.463,0-0.924-0.127-1.33-0.383C16.951,36.025,2.547,26.775,0.576,18.44
            C0.193,17.234,0,15.99,0,14.741C0,10.25,2.443,6.109,6.379,3.932c1.826-1.005,3.887-1.536,5.959-1.536
            c2.779,0,5.434,0.926,7.582,2.599c2.145-1.673,4.797-2.599,7.576-2.599c2.08,0,4.141,0.531,5.959,1.535
            C37.393,6.109,39.836,10.251,39.836,14.742z"
            fill="#ff5e95"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 490.4 490.4"
          onClick={like}
        >
          <path
            d="M222.5,453.7c6.1,6.1,14.3,9.5,22.9,9.5c8.5,0,16.9-3.5,22.9-9.5L448,274c27.3-27.3,42.3-63.6,42.4-102.1
			c0-38.6-15-74.9-42.3-102.2S384.6,27.4,346,27.4c-37.9,0-73.6,14.5-100.7,40.9c-27.2-26.5-63-41.1-101-41.1
			c-38.5,0-74.7,15-102,42.2C15,96.7,0,133,0,171.6c0,38.5,15.1,74.8,42.4,102.1L222.5,453.7z M59.7,86.8
			c22.6-22.6,52.7-35.1,84.7-35.1s62.2,12.5,84.9,35.2l7.4,7.4c2.3,2.3,5.4,3.6,8.7,3.6l0,0c3.2,0,6.4-1.3,8.7-3.6l7.2-7.2
			c22.7-22.7,52.8-35.2,84.9-35.2c32,0,62.1,12.5,84.7,35.1c22.7,22.7,35.1,52.8,35.1,84.8s-12.5,62.1-35.2,84.8L251,436.4
			c-2.9,2.9-8.2,2.9-11.2,0l-180-180c-22.7-22.7-35.2-52.8-35.2-84.8C24.6,139.6,37.1,109.5,59.7,86.8z"
          />
        </svg>
      )}
    </div>
  );
};
export default ButtonLike;
