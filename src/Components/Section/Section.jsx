import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";

export const Section = () => {
  
  const {section} = useParams();
   
  const [data,setData]= useState([])

useEffect(()=>{
  getData()
})
  const getData = ()=>{

    axios.get(`http://localhost:8080/books/history`).then((res)=>{
          setData(res.data);
    })
}

console.log(data);
  // const Main = styled.div`
  //   /* Same as Homepage */
  // `;

  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <div className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}

        {
          data.map((el)=>(
             
            <div>
             
         <img src={el.imageUrl} alt="" />
           <p>{el.title}</p>
           <p>{el.price}</p>

            </div>



          ))
        }

      </div>
    </>
  );
};
