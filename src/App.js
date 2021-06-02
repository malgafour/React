 import React, { Component } from 'react';
 import './App.css';
 import BlogCard from './blogCard';
 import  { isArryEmpty as isMyArrayEmpty }  from './Utils';

class App extends Component{ 
  state = {
    showBlogs : true
  }

    BlogObjArr =[
   {
     id: 1,
    title : 'Blog Title 1',
    description : 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor'
   },
   {
    id: 2,
    title : 'Blog Title 2',
    description : 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor'
   },
   {
    id: 3,
    title : 'Blog Title 3',
    description : 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor'
   },
   {
    id: 4,
    title : 'Blog Title 4',
    description : 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor'
   }]

   

   blogCards = isMyArrayEmpty(this.BlogObjArr) ? [] : this.BlogObjArr.map((item ,pos) => { 
       return(
        <BlogCard key={pos} title={item.title} description={item.description} id={item.id} />
      )
  });
    onHideBtnClick = () =>{
      this.setState({showBlogs : false});
      console.log(this.showBlogs);
   }

   render(){
     return(
      <div className="App">
      <button onClick = {this.onHideBtnClick}>Hide Lists </button>
      <br></br>
      {
        this.state.showBlogs ? this.blogCards : " "
      }
    </div>
     );
   } 
}

export default App;
