import react from 'react';
import{HashRouter,Router,Link}from 'react-router';

function Home(){
  return
  <h2>home page</h2>;
}

function About(){
  return(
    <hashRouter>
      <h>Hash</h>
      <link to="/">home</link>{''}
      <link to="/about">about</link>
      <Route>
        <Route path="/" element={<Home/>}>
      <Route path="about" element={<About/>}/>
      </Route>
      </hashRouter>
  );
  }
export default  App()