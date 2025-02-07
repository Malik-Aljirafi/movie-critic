import React, { useState } from 'react';
// import { connect } from 'react-redux';
import ReviewItem from './ReviewItem';
import data from '../../../static/movie-reviews.json';



function ReviewList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mpaaFilter, setMpaaFilter] = useState('');
  const [criticsPickFilter, setCriticsPickFilter] = useState(false);
  const [displayCount, setDisplayCount] = useState(20); // ✅ Start at 20 reviews

  const filteredReviews = data.filter((review) => {
    const matchesSearch = review.display_title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMpaa = !mpaaFilter || review.mpaa_rating === mpaaFilter;
    const matchesCriticsPick = !criticsPickFilter || review.critics_pick === 1;

    return matchesSearch && matchesMpaa && matchesCriticsPick;
  });

  
  const visibleReviews = filteredReviews.slice(0, Math.min(displayCount, 50));

  const loadMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 10, 50));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={mpaaFilter} onChange={(e) => setMpaaFilter(e.target.value)}>
          <option value="">All Ratings</option>
          <option value="PG">PG</option>
          <option value="R">R</option>
        </select>
        <label>
          <input
            type="checkbox"
            checked={criticsPickFilter}
            onChange={(e) => setCriticsPickFilter(e.target.checked)}
          />
          Critics Pick
        </label>
      </div>

      
      {visibleReviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}

  
      {displayCount < 50 && displayCount < filteredReviews.length && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
}

export default ReviewList;





















// import React from 'react';
// import { connect } from 'react-redux';
// import ReviewItem from './ReviewItem';
// import data from '../../../static/critics.json';

// function ReviewList({  } ) {
    
//     console.log("Data from file:", data); 
//    return (
//     <div>
//         // make search bar and componenets for design 
//         {data.slice(0,20).map((review) => (
        
//         <ReviewItem key={review.id} review={review} /> 
//         ))}
//     </div>
//     );
// }
   

// const mapStateToProps = (state) => ({
//     reviews: state.reviews || [],
// });  

// export default connect(mapStateToProps)(ReviewList);


