import React, { useEffect } from "react";


function About() {
    function Animation12(){
        document.querySelector('#aboutTextBox').style.animation = "TextBox 1s forwards"
    }
    useEffect(()=>{
        Animation12()
    },[])

    
    return (
        <>
        <main>
                <div id="aboutTextBox">
                    <h2>Hi I'm <span className="textShade">Anurag verma</span>, a passionate full stack developer skilled in both front-end and back-end technologies. I have hands-on experience with technologies like HTML, CSS, JavaScript, React, Node.js, and databases such as MongoDB. I've worked on various projects, including [briefly mention on projects page], I'm eager to join a dynamic team where I can contribute to innovative web solutions and continue growing in my career. Let's connect!</h2>
                </div>
        </main>
        </>
    )
} export default About;