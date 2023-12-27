import axios from "axios";
import react ,{useState}from "react";
import './Delete.css'
function Delete() {
    const [search,setSearch]=useState("");
    const [idData,setData]=useState([]);
    const searchid=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/delete/'+search)
            .catch(err=>console.log(err))
        }
    }
  return (
    <div><>
    <div class="bg">
<div class="c">
                <h2 class="dels">Delete Playlist</h2>
                <div className="search" >
                    <input type="text" className='k' placeholder="Enter Course Id"  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchid}/>                    
                </div>
                
                 
            </div> 
            </div>     
        </></div>
  )
}

export default Delete

