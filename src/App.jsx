import { useEffect, useState } from 'react'
import {Header} from "./components/header/Header.jsx"
import {SearchFilters} from "./components/searchFilters/SearchFilters.jsx"
import { BookList } from './components/bookList/BookList.jsx'
import { books } from './books.js'
import { ErrorPage } from './components/errorPage/ErrorPage.jsx'
import { Footer } from './components/footer/Footer.jsx'



function App() {
  // STATE FOR BOOKS BOOKS LIST
  const [allBooks , setAllBooks] = useState([])
  const[entries,setEntries] = useState({
    search: "",
    catagories: "",
    onsale: "",
    minprice:"",
    maxprice:""
  })


// =====START HANDLE SEARCH FOR SEARCHFILTER.JSX

  function handleSearch(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    setEntries((prev)=>({
      ...prev,
      search: data.search,
      catagories: data.catagories,
      onsale: data.onsale,
      minprice: data.minprice,
      maxprice: data.maxprice
    }))
    
  }
// =====END HANDLE SEARCH FOR SEARCHFILTER.JSX

const boo = "romance"
useEffect(()=>{
  console.log("======");
  async function fetchBooks(){

    let url

    try{

      url = "https://www.googleapis.com/books/v1/volumes?q="
      if (!entries.search && !entries.catagories && !entries.onsale && !entries.minprice && !entries.maxprice){
             url += encodeURIComponent("a"); 
      };
      if (entries.search) {
        url += encodeURIComponent(entries.search);
      }

      if (entries.catagories && entries.catagories !== "all") {
        url += `+subject:${encodeURIComponent(entries.catagories)}`;
      }
      const response = await fetch(url)
      const result = await response.json()

      console.log("URL used for surch" + url);
      console.log("Result is" ,  result.items);
      if(!result){
        // setAllBooks([]);
        <ErrorPage />
        return;
      }
      if(result.items.length != 0){
        const generatedBooks = result.items.map((book) => {
          // TODO
          // ADD CONDITION FOR PRIC

          const info = book.volumeInfo || {};
          const sale = book.saleInfo || {};

          
          //THIS IS TO NORMALISE THE RETURNS FROM THE API
          return {
            id: book.id,
            title: info.title || "Untitled",
            authors: info.authors || [],
            imageLinks: info.imageLinks || {}, 
            price: {
              saleability: sale.saleability || "NOT_FOR_SALE",
              amount:
                sale.retailPrice?.amount ??
                sale.listPrice?.amount ??
                null,
              currency:
                sale.retailPrice?.currencyCode ??
                sale.listPrice?.currencyCode ??
                null,
            },
          };
        });

        setAllBooks(generatedBooks);

      } else{
        console.log("n");
      }
    }
      catch(error){
        console.log(" hey nothing is found" + error.message);
        <ErrorPage />

      }
  } fetchBooks()
  console.log("all entries are the ff:", entries);
}
,[entries])

  return (
    <>
    <Header />
    <div className="main-container">
      
      <SearchFilters  handleSearch = {handleSearch}/>
      <BookList allBooks = {allBooks}/>
    </div>
      <Footer/>
    </>
  )
}

export default App
