import React, { Component } from 'react';
import './BookItem.css'

export default class BookItem extends Component {
  render() {
      const books = this
             .props
             .books
             .map((book, i) => 
          <div className='BookItemDiv' key={i}>
              <h2>{book.volumeInfo.title ? book.volumeInfo.title : 'No title available.'}</h2>
              <img src={book.volumeInfo.imageLinks.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : 'No thumbnail available.'} alt='book cover' />
              <ul>
                  <li>Author: {book.volumeInfo.authors ? book.volumeInfo.authors : 'Author info unavailable'}</li>
                  <li>Price: {book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 'No price available'} {book.saleInfo.retailPrice ? book.saleInfo.retailPrice.currencyCode : ''}</li>
                  <li>Description: {book.volumeInfo.description ? book.volumeInfo.description : 'No description available.'}</li>
              </ul>
          </div>
      )
      return(
          <div>
              { books }
          </div>
      )
  }
}