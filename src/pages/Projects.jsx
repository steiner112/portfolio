import React, { useEffect , useState } from "react";

export default function Projects() {
const [data , setData] = useState([])

useEffect(()=>{
fetch('https://picsum.photos/v2/list')
.then(resp => resp.json())
.then(data => setData(data))
},[])
  return (
    <>
    <main className='homeFlex'>
      <div id="card-box">
        { data.map((item)=>{
    return < div key={item.id} id='card'>
     <img src={item.url} alt="image-project" />
        <h1>{item.author}</h1>
      </div>
      })
      }
      </div>
    </main>
    </>
  );
}
