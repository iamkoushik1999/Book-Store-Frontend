// import React from 'react'
import BookSinglecard from "./BookSinglecard";

// eslint-disable-next-line react/prop-types
const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        // eslint-disable-next-line react/prop-types
        books.map((item) => (
          <BookSinglecard key={item._id} book={item} />
        ))
      }
    </div>
  );
};

export default BooksCard;
