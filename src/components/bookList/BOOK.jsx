import React from 'react'
import "./bookList.css"
const BOOK = ({ book }) => {
  const thumbnail =
    book.imageLinks?.thumbnail || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fbook_8832880&psig=AOvVaw1Z-b_HK6oeGu7QbkEduj9o&ust=1763591620959000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCli_3g_JADFQAAAAAdAAAAABAE"; // a default book 

  const author = book.authors?.[0] || "Unknown";

  const priceText =
    book.price?.saleability === "NOT_FOR_SALE"
      ? "FREE"
      : book.price?.amount != null
      ? `${book.price.currency}${book.price.amount}`
      : "Price not available";

  return (
    <section className="book-card">
      <div className="maine-img">
        <img src={thumbnail} alt={book.title || "Book cover"} />
      </div>

      <h2 className="book-title">
        {book.title || "Untitled"}
      </h2>

      <div className="prise-author-wrapper">
        <p className="price">{priceText}</p>
        <p className="author">{author}</p>
      </div>
    </section>
  );
};


export  {BOOK}