 import './App.css';
 import BlogCard from './blogCard';
 import  { isArryEmpty as isMyArrayEmpty }  from './Utils';

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

  const blogCards = isMyArrayEmpty(BlogObjArr) ? [] : BlogObjArr.map((item ,pos) => { 
       return(
        <BlogCard key={pos} title={item.title} description={item.description} id={item.id} />
      )
  });
   
  return ( 
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
