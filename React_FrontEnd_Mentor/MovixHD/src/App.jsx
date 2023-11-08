import { useState ,useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector,useDispatch } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';
import {Header,Footer,Home,Details,SearchResult,Explore,PageNotFound} from './index.js';


function App() {
     
  const dispatch = useDispatch()
  const {url} = useSelector((state)=>state.home);
  console.log(url);


     useEffect(()=>{
       apiTesting();
     },[]);


    const apiTesting = () => {
      fetchDataFromApi('/movie/popular')
      .then((response)=>{
         console.log(response);
         dispatch(getApiConfiguration(response));
      })
    }
  
  return (
    
      <div className='App'>MoviexHD
        <h2>{url?.total_pages}</h2>
      </div>
    
  )
}

export default App
