import React, { Component } from 'react';
import BookItem from './BookItem'

export default class BookList extends Component {
  render() {
    return(
      <div>
          <BookItem books={this.props.books} />
      </div>
    )
  }
}