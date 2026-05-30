import { useEffect, useState } from "react"
import "./Interview.css"
import { useLocation } from "react-router-dom";

function Interview(){
    const [second , setsecond] = useState(0);
    const [running , setrunning] = useState(false);
    const location = useLocation();
    const [answer,setanswer] = useState("");
    const [counter , setcounter] =useState(0);

    const {Questions , role} = location.state;
    const [Finalques , setFinalques] = useState(Questions);
    

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
 
    useEffect(()=>{
        if(counter === 0) return;

        async function fetchNext(){
            const response= await fetch("http://localhost:3000/interview/next",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    answer,
                })
            })

            const newque = await response.json();
            setFinalques(prev=> [...prev , ...newque.question]);
        }
        fetchNext();
        setanswer("");
    },[counter])
    console.log(counter);

    

    return(
        <div className="interviewpage">
        <div className="bigrow">
            <div className="face">
                {!running? "click 'start' to start interview": Finalques[counter]}
            </div>
            <div className="controls">
                <button className="startin" onClick={()=>setrunning(r=> !r)}>{running? "pause":"start"}</button>
                <div className="timer">{padzero(minute)}:{padzero(remainingsecond)}</div>
                <button className="end">end</button>
            </div>
        </div>
        <div className="handleanswer">
            <textarea value={answer} className="type" onChange={(e)=> setanswer(e.target.value)} placeholder="write your answer here.."></textarea>
            <button className="textsubmit" disabled={!answer.trim()} onClick={()=>setcounter(c=> c+1)}>submit</button>
        </div>
    </div>
    )
}

export default Interview