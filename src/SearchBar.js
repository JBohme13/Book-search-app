import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleFormDefault(event) {
    console.log('function called')
    event.preventDefault();
    this.props.handleSearch();
  }
  render(){
    return(
      <div className='searchBar'>
        <form 
          className='searchBar-form'
          onSubmit={event => this.handleFormDefault(event)}
          >
          <label htmlFor='searchInput'>Search: </label>
          <input 
            className='searchInput' 
            type='text' 
            placeholder='henry'
            onChange={e => this.props.searchInputChange(e.target.value)}
            required='required'
          />
          <label htmlFor='printType-input'>Print type: </label>
          <select 
            className='printType-input'
            onChange={e => this.props.printTypeChange(e.target.value)}
          >
            <option placeholder='Select...'>Select...</option>
            <option value='all'>All</option>
            <option value='books'>Books</option>
            <option value='magazines'>Magazines</option>
          </select>
          <label htmlFor='bookType-input'>Book type: </label>
          <select 
            className='bookType-input'
            onChange={e => this.props.bookTypeChange(e.target.value)}
          >
            <option value='no-filter'>Select...</option>
            <option value='partial'>Partial</option>
            <option value='full'>Full</option>
            <option value='free-ebooks'>Free ebooks</option>
            <option value='paid-ebooks'>Paid ebooks</option>
            <option value='ebooks'>All ebooks</option>
          </select>
          <button className='formButton' type='submit'>Search</button>
        </form>
      </div>
    )
  }
}