import React, { useEffect } from "react";

const PDF_FILE_URL = "resumeAnuragverma.pdf";

function Home() {
    const downloadFileAtUrl = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };
    useEffect(()=>{
        animationText()
    },[])

    function animationText() {
        document.querySelector('#text div').style.animation = "Text 1s forwards";
        document.querySelector('#hmBtn').style.animation = "button 1.2s forwards";
        document.querySelector('#text h2').style.animation = "Text2 1s forwards";
        document.querySelector('#text h5').style.animation = "Text3 1s forwards";
      }
    return (
        <>
            <main className="homeFlex">
                <div id="text">
                    <h2>"codewithanurag"</h2>
                    <div>I'm a Web <span id="devText">Developer</span></div>
                    <h5>A Full-Stack Web Developer passionate about creating interactive applications and experiences on the web.</h5>
                </div>
                <div className="homeFlex2">
                    <button id="hmBtn" onClick={() => downloadFileAtUrl(PDF_FILE_URL)}>
                        Download CV
                    </button>
                </div>
            </main>
        </>
    );
}

export default Home;
