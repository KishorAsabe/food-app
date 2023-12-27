import React from 'react';
import ShimmerCard from '../Shimmer';
import './ShimmerCardGrid.css'; // Import the CSS file for the grid layout

const ShimmerCardContainer = () => {
  const numberOfShimmerCards = 6; // Change this number to set the desired count of shimmer cards

  const shimmerCards = Array.from({ length: numberOfShimmerCards }, (_, index) => (
    <ShimmerCard key={index} />
  ));

  return (
    <div className="shimmer-card-grid">
      {shimmerCards}
    </div>
  );
};

export default ShimmerCardContainer;
