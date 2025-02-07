import React from "react";

function ReviewItem(props) {
  // Get the review object from props
  const review = props.review;

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "30px 5px" }}>
      {/* Display the movie image if available */}
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


// import React from "react"; // Import React

// function ReviewItem({ review }) { // Define ReviewItem component
//   return (
//     <div>
      
//       <h3>{review.display_title}</h3>
//       {/* <img src={review.image} alt={review.display_title} width="100" /> */}
//       <p>MPAA Rating: {review.mpaa_rating}</p>
//       <p>Published: {review.publication_date}</p>
//   <p>{review.critics_pick ? "✔ Critics Pick" : "❌ Not a Critics Pick"}</p>
//     </div>
//   );
// }

// export default ReviewItem; // Export the component

