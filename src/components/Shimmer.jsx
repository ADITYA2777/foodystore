import React from 'react'

// const Shimmer = () => {
//     const shimmerCount = 20;
//   return (
//     <div className="card">
//       {[...Array(shimmerCount)].map((_,index) => (
//           <div key={index} className="shimmer"></div>
//       ))}
//     </div>
//   );
// }

// export default Shimmer


const Shimmer = () => {
  const shimmerCount = 20; // You can adjust this number based on your requirements

  return (
    <div className="card">
      {[...Array(shimmerCount)].map((_, index) => (
          <div key={index} className="shimmer"></div>
      ))}
    </div>
  );
};

export default Shimmer;
