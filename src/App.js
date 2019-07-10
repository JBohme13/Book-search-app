import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import BookList from './BookList';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchInput: '',
      printType: '',
      bookType: '',
    }
  }
  
  searchInputChange = (search)  => {
    const searchValue = search.replace(/ /g, '+')
    this.setState({
      searchInput: searchValue
    })
  }

  printTypeChange = (print) => {
    this.setState({
      printType: print
    })
  }

  bookTypeChange = (book) => {
    this.setState({
      bookType: book
    })
  }

  formatPrintType() {
    if(this.state.printType === '') {
      return ''
    } else {
      return `&printType=${this.state.printType}`
    }
  }

  formatFilter() {
    if(this.state.bookType === '') {
      return ''
    } else {
      return `&filter=${this.state.bookType}`
    }
  }

  handleSearch = () => {
    const EndpointUrl = 'https://www.googleapis.com/books/v1/volumes';
    const apiKey = 'AIzaSyDT_m3kvaxnxS0yAsiqqhq84nVvgVKnBv0';
    const url = EndpointUrl + '?' + `q=${this.state.searchInput}&key=${apiKey}` + this.formatPrintType() + this.formatFilter();
    const options = {
      'Authorization': 'Bearer AIzaSyDT_m3kvaxnxS0yAsiqqhq84nVvgVKnBv0',
      'Content-type': 'application/json'
    }
    console.log(url);
      fetch(url, options)
        .then(response => {
          if(!response.ok) {
          throw new Error('Something went wrong, please try again later.');
          }
          return response
        })
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            books: responseJson.items,
            error: null
          })
        })
        .catch(error =>
          this.setState({
            error: error.message
          })
        )
    }

  render() {
    const error = this.state.error;
    return(
      <div className='app'>
        { error }
        <Header />
        <SearchBar 
            searchInputChange={this.searchInputChange}
            printTypeChange={this.printTypeChange}
            bookTypeChange={this.bookTypeChange}
            handleSearch={this.handleSearch}
        />
        <BookList books={this.state.books}/>
      </div>      
    )
  }
}