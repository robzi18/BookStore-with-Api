import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import "./searchFilters.css"
const SearchFilters = (props) => {

  return (
   <section className="topWrapper">

    <section className='searchFilters-container'>
        <form onSubmit={props.handleSearch} className='filters-form'>
            <label htmlFor="">Search</label>

            <div className="search-wrapper">
                <input type="text"
                    name='search' className='search-field'
                />
                <IoSearchSharp className='search-icon'/>
            </div>
            <label htmlFor="catagories">Categories</label>

            <select name="catagories" id="catagories" defaultValue="">
                <option value="" disabled>---choose categories---</option>
                <option value="all">All</option>
                <option value="fiction">Fiction</option>
                <option value="romance">Romance</option>
                <option value="history">History</option>
                <option value="science">Science</option>
                <option value="computers">Computers</option>
                <option value="biography">Biography</option>
            </select>
            <label htmlFor="productStatus"> Product Status </label>

            <fieldset className='product-status'>
                <label htmlFor="InStock">
                    <input type="checkbox" defaultChecked name='instock' value="instock"/>
                    InStock
                </label>
                <label htmlFor="OnSale">
                    <input type="checkbox"  name='onsale' value="onsale"/>
                    OnSale
                </label>
                
            </fieldset>
                <label htmlFor="">
                    Prise</label>
            <div className="prise-wrapper">
                    <input 
                        type="number"
                        name='minprice'
                        placeholder='from $30'
                        />

                    <input 
                        type="number"
                        name='maxprice'
                        placeholder='to $250'
                     />
                
            </div>
            <button type='submit' className='search-btn' > Search</button>

        </form>
    </section>
</section>
  )
}

export {SearchFilters}