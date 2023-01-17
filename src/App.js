import './App.css' ; 
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import { Route,Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 6  ; 
  // apiKey = "ad641ed3bdaa4f2295710b5fcfbaa886" ; 
  apiKey  =  process.env.REACT_APP_NEWS_API ; 

  state = {
    progress:0 
  }
  setProgress = (progress) =>{
    this.setState({progress:  progress}) ; 
  }
  render() {
    return (
      <div>
        console.log("harsha")
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />

        {/* if we give keys to each route it will re render the compoent thinking it is a new one */}
        <Routes>
          <Route path = 'entertainment' element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} key = "entertainment" pageSize ={this.pageSize} country='in' category = 'entertainment'/>}/>
          <Route path = 'sports' element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} key = "sports" pageSize ={this.pageSize} country='in' category = 'sports'/>}/>
          <Route path = 'general' element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} key = "general" pageSize ={this.pageSize} country='in' category = 'general'/>}/>
          <Route path = 'business' element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} key = "business" pageSize ={this.pageSize} country='in' category = 'business'/>}/>
          <Route path = 'health' element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} key = "health" pageSize ={this.pageSize} country='in' category = 'health'/>}/>
          <Route path = 'science' element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} key = "science" pageSize ={this.pageSize} country='in' category = 'science'/>}/>
          <Route path = 'technology' element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} key = "technology" pageSize ={this.pageSize} country='in' category = 'technology'/>}/>
          <Route path = '/' element = {<News apiKey = {this.apiKey} setProgress = {this.setProgress} key = "general" pageSize ={this.pageSize} country='in' category = 'general'/>}/>

        </Routes>
      </div>
    )
  }
}
