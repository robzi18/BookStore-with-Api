import React, { useState } from 'react'
import { BOOK } from './BOOK.jsx'
import "./bookList.css"

const BookList = (props) => {
 const allBooks = props.allBooks
  const [book,setBook] = useState()
  const bookdata = allBooks.map((book)=>{
    return(
      <BOOK key={book.id} book={book} />
    )
  })
  return (
    <section className="booklist-container">
      {bookdata}

    </section>
  )
}

export  {BookList}

