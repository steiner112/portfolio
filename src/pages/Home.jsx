import React from "react";

const PDF_FILE_URL = "./myapp/resumeDemo.pdf.pdf"
function Home() {
    const downloadFileAtUrl=(url)=>{
        const fileName =url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href=url ;
        aTag.setAttribute('download',fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    } 
    return (
        <>
            <main className="homeFlex">
                <div id="text">
                    <h2>"codewithanurag"</h2>
                    <h1><span>i'm a Web</span><span id="devText"> Devloper</span></h1>
                    <h5>A Full-Stack Web Developer passionate about creating interactive applications and experiences on the web.</h5>
                </div>
                <div className="homeFlex2"><button onClick={()=>{downloadFileAtUrl(PDF_FILE_URL)}}>Download cv</button></div>
               
            </main>

        </>
    )
} export default Home;