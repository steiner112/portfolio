import React, { useEffect , useState } from "react";

export default function Projects() {
const [data , setData] = useState([])

function animate() {
  document.querySelector('#card-box').style.animation = "Box1 1s forwards";
}


useEffect(()=>{
try {
  fetch('https://picsum.photos/v2/list')
.then(resp => resp.json())
.then(data => setData(data))
} catch (error) {
  console.log(error)
}
},[])

useEffect(() => {
  // Run animation when data has been updated and the component has re-rendered
  
  // if (data.length <= 0) {
  //   document.querySelector('#loading').innerHTML = "loading..."
  // }
  if(data.length > 0){
    document.querySelector('#loading').style.display = "none"

    animate();

  }
}, [data]); // Dependency on `data` means this runs every time `data` is updated


  return (
    <>
    <main className='homeFlex1221'>
      <h1 id="loading">loading...</h1>
      <span id="card-box">
        { data.map((item)=>{
    return < div key={item.id} id='card'>
     <img src={item.url} alt="image-project" />
        <h1 >{item.author}</h1>
      </div>
      })
      }
      </span>
    </main>
    </>
  );
}
