import React from 'react'
import "./style.scss";
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import DetailsBanner from './detailsBanner/DetailsBanner';

function Details() {
  
   const {mediaType,id} = useParams();
   const{data,loading} = useFetch(`/${mediaType}/${id}/videos`);
   const{data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`);
  console.log(data);

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
    </div>
  )
}

export default Details