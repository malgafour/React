 import './App.css';
import BlogCard from './blogCard'
function App() {
   const BlogObjArr =[
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
   }];

  const blogCards = BlogObjArr.map((item ,pos) => { 
      console.log(item);
      return(
        <BlogCard key={pos} />
      //   <div className="cardPadding" style={CardStyleObject} key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div> 
      )
  });
   
  return ( 
    <div className="App">
      {blogCards}
     </div>
  );
}

export default App;
