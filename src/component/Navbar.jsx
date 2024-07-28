import React, { useRef, useEffect } from "react";
import {Link} from "react-router-dom";


function Navbar() {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cursorDot = cursorDotRef.current;
            const cursorOutline = cursorOutlineRef.current;
            if (cursorDot && cursorOutline) {
                cursorDot.style.left = e.clientX + "px";
                cursorDot.style.top = e.clientY + "px";
                cursorOutline.style.left = e.clientX + "px";
                cursorOutline.style.top = e.clientY + "px";
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <>
            <header>
                <nav id="nav1">
                    <ul id="navbar">
                        <Link to="/"><li>home</li></Link>
                        <Link to="/about"><li>about</li></Link>
                        <Link to="/service"><li>services</li></Link>
                        <Link to="project"><li>projects</li></Link>
                    </ul>
                </nav>
            </header>
            <div className="cursor-dot" ref={cursorDotRef}></div>
            <div className="cursor-outline" ref={cursorOutlineRef}></div>
        </>
    );
}

export default Navbar;
