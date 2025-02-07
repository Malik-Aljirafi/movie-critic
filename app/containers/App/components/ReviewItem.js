import React from "react";

function ReviewItem(props) {

  const review = props.review;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "30px 5px" }}>
      {review.multimedia ? (
        <img src={review.multimedia.src} alt={review.display_title} width="100" />
      ) : null}

      <h3>{review.display_title}</h3>
      <p>MPAA Rating: {review.mpaa_rating ? review.mpaa_rating : "Not Rated"}</p>
      <p>Published: {review.publication_date}</p>

      <p>
        {review.critics_pick === 1 ? "✔ Critics Pick" : "✗ Not a Critics Pick"}
      </p>

    </div>
  );
}

export default ReviewItem;




