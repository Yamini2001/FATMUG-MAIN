import React, { useState , useEffect}from 'react';
import ReactDOM from 'react-dom';
import axios from  "axios" ; 
function Article(props)
{
    const [data, setdata] = useState( [] );
    useEffect(() => {
        const fetchdata = async () => {
          try {
            const res = await axios.get(`http://127.0.0.1:8000/${props.match.params.id}`);
              setdata( res.data );
              
          } catch (err) {}
        };
        fetchdata();
    }, [] );

    const getArticle = () =>
    {
        let list = [];
        data.map(( articles ) => {
            return list.push(
                <div className="row">
                    <div className="card m-5 ">
                        <img className="card-img-top" src={articles.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{articles.Title}</h5>
                            <p className="card-text">{articles.description}</p><p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                 
        )
        
        }
        )
        return list ;
    }

    return (
        <div className="container row no-gutters ">
            <div class="col-12 col-sm-6 col-md-8 align-items-start">
                    {getArticle()}
            </div>
            </div>
    )
}
export default Article; 