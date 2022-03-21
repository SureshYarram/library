import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
     
    const[books,setBooks] = useState([])

    useEffect(()=>{
      getData();
    })
  
  const getData = ()=>{

      axios.get("http://localhost:8080/books").then((res)=>{
            setBooks(res.data);
      })
  }
  // const Main = styled.div`
  //   /* Apply some responsive styling to children */
  // `;
  const handleSort = (sort, value) =>{
    if(sort === 'asc' && value==='title'){
      data.sort((a,b)=> {
        if(a.title>b.title){
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)
    }
    if(sort === 'desc' && value==='title'){
      data.sort((a,b)=> {
        if(a.title<b.title){
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)

    }
    if(sort === 'asc' && value==='price'){
      data.sort((a,b)=> a.price-b.price)
      setChange(!change)
    }
    if(sort === 'desc' && value==='price'){
      data.sort((a,b)=> b.price-a.price)
      setChange(!change)

    }
  }

    
  return (


<div className='homeContainer'>
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons handleSort={handleSort}/>
      <div className="mainContainer" >
        {data.map(({title,imageUrl,price,id})=>{
          return <BookCard key={id} title={title} imageUrl={imageUrl} price={price} id={id} />
        })}
      </div>
    </div>
  )
}
