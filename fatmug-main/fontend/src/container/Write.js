import React , { useState ,useEffect} from 'react';
import ReactDOM from 'react-dom';

function Write()
{
  const [location, setlocation] = useState();
  console.log(location)
 
  
    return (
        <div class = "container col-md-6 mt-5">
            <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Title</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""/>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
                
               
                    
          <input type="file" placeholder="upload image" 
            onChange={( e ) =>
            {
              let reader = new FileReader();
              reader.onloadend = () => {
                setlocation( reader.readAsDataURL( e.target.files[0] ) )
                console.log( location );
              }
              
             
              
            }}
            />
          
          <div className="card m-5 ">
            <img className="card-img-top" src={location} alt="Card image cap" />
            </div>
                
                
  
                
</form>
     </div>
    )
}
export default Write; 