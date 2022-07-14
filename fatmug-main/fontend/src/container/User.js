import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios" ; 
function SignUp()
{
  const [data, setdata] = useState( [] );
  const[value , setvalue] = useState() ; 
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const del = async (x) => {
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/delete`,
        { x },
        config
      );
    }
    catch ( err ) { }
  };
  




    
    useEffect(() => {
        const fetchdata = async () => {
          try {
            const res = await axios.get("http://127.0.0.1:8000/");
              setdata( res.data );
              console.log(res.data)
          } catch (err) {}
        };
        fetchdata();
    }, [] );

    const getArticle = () =>
    {
        let list = [];
        data.map(( articles ) => {
          return list.push(
            <li class="media d-flex justify-content-center border-bottom mt-5">
            <img style={{ width: "5em", height: "5em" }} src={articles.image} class="mr-3" alt="..." />
            <div class="media-body  col-sm-8 mb-5">
                <h5 class="mt-0 mb-1">{articles.Title}</h5>
                <p>{articles.description}</p>
            </div>
            <div className="">
            <i style={{ width: "3em", height: "3em" }} class="far fa-edit m-1"></i>
            <i style={{ width: "3em", height: "3em" }} class = "far fa-trash-alt" onclick={del(articles.id)}></i>
            </div >
            
        </li>
               
                 
        )
        
        }
        )
        return list ;
  }
  
    return (
        <div className="container">
            <div className=" border-bottom border-top mt-5">
                <h3 className="m-3">YOUR SUBMITTED ARTICLES</h3>
            </div>
            <ul class="list-unstyled mt-5 ">
                {getArticle()}
                <nav aria-label="Page navigation example">
  <ul class="pagination d-flex justify-content-center m-5">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
                
               
            </ul>

        </div>
    )
}
export default SignUp; 