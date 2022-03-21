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
  function handleSort(){

  }

    
  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort= {handleSort}
            
        
      />

      <div className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {
          books.map(({imageUrl,title,price})=>(
           
            <div>
            {/* <BookCard imageUrl={imageUrl} title={title} price={price}/> */}
         <img src={imageUrl} alt="" />
           <p>{title}</p>
              <p>{price}</p>
            
            </div>
          ))
        }
      </div>
    </div>
  );
};
