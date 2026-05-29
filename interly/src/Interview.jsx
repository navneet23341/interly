import { useEffect, useState } from "react"
import "./Interview.css"

function Interview(){
    const [second , setsecond] = useState(0);
    const [running , setrunning] = useState(false);

    useEffect(()=>{
        let interval;

        if(running){
            interval = setInterval(() => {
                setsecond(s=> s+1);
            }, 1000);
        }

        return ()=> clearInterval(interval);
    }        
    ,[running]);

    const minute = Math.floor(second/60);
    const remainingsecond = second%60;

    function padzero(num){
        if(num<10){
            return `0${num}`;
        }
        return num;
    }

    return(
        <div className="interviewpage">
        <div className="bigrow">
            <div className="face">
                click 'start' to start interview
            </div>
            <div className="controls">
                <button className="startin" onClick={()=>setrunning(r=> !r)}>{running? "pause":"start"}</button>
                <div className="timer">{padzero(minute)}:{padzero(remainingsecond)}</div>
                <button className="end">end</button>
            </div>
        </div>
        <textarea className="type"></textarea>
        </div>
    )
}

export default Interview