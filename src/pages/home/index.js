import React from 'react';
import Entrance from '../../components/entrance';
import Intro from '../../components/intro';

// function Home() {
//   return <div>       
//         <Entrance />
//         <Intro />
//   </div>;
// }



const Home = React.forwardRef((props,ref)=>{
  return(
    <div>       
      <Entrance />
      <Intro ref={ref}/>
    </div>
    )
})

export default Home;