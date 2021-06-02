 import React, { Component } from 'react';
 import './App.css';
 import BlogCard from './blogCard';
 import  { isArryEmpty as isMyArrayEmpty }  from './Utils';

class App extends Component{ 
  state = {
    showBlogs : true,
    BlogObjArr : [
      {
        id: 1,
       title : 'Blog Title 1',
       description : 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
       likeCount : 0
     },
      {
       id: 2,
       title : 'Blog Title 2',
       description : 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
       likeCount : 0
      },
      {
       id: 3,
       title : 'Blog Title 3',
       description : 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
       likeCount : 0
      },
      {
       id: 4,
       title : 'Blog Title 4',
       description : 'lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
       likeCount : 0
      }]
  }

   

   onLikeBtnClick = (pos) =>{
     const updatedBlogList = this.state.BlogObjArr;
     const updatedBlogObj = updatedBlogList[pos];
     updatedBlogObj.likeCount = updatedBlogObj.likeCount+1;
     updatedBlogList[pos] = updatedBlogObj;
     this.setState({BlogObjArr : updatedBlogList})
  }

   blogCards = isMyArrayEmpty(this.state.BlogObjArr) ? [] : this.state.BlogObjArr.map((item ,pos) => { 
       return(
        <BlogCard key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={()=>this.onLikeBtnClick(pos)} />
      )
  });
    onHideBtnClick = () =>{
       this.setState((prevState , prevProps) =>{
        return{
          showBlogs : !prevState.showBlogs
        }
      });
      console.log(this.state.showBlogs);
   }
 
   render(){
      return(
      <div className="App">
      <button onClick = {this.onHideBtnClick}>{this.state.showBlogs ? 'Hide All' : 'Show All'}</button>
      <br></br>
      {
        this.state.showBlogs ? this.blogCards : null
      }
    </div>
     );
   } 
}

export default App;
