
function Pomodoro(){
const[time_break, setBreak]=React.useState(5);
const[time_session, setSession]=React.useState(25);
const[estado, setEstado]=React.useState(false);
const[time, setTime]=React.useState(0);
const[modo, setModo]=React.useState("session");
const onClick=(identificador)=>{
    setBreak(num=> {
            if(identificador==="up_break") return num+1;
            if(identificador==="down_break")return Math.max(1,num-1);
            return num;
        });
    setSession(num => {
            if(identificador==="up_session") return num+1;
            if(identificador==="down_session") return Math.max(1,num-1);
            return num;
    });
    return;
}
React.useEffect(()=>{
    console.log("",estado,": ", time_session);

    if(!estado) return; // si es falso no hace nada

    const id=setInterval(()=>{ 
        setTime(prev =>( prev-1));
    },1000);
    
    return ()=>{
        clearInterval(id);
        console.log("clean UP useeffect");
    };
},[estado]);
React.useEffect(()=>{
    if(!estado) return;

    if(time===0)
    {
        if(modo==="session")
        {
            console.log("cambio a break");
            setModo("break");
            setTime(time_break*60);
            //audio
        }else{
            console.log("cambio a session");
            setModo("session");
            setTime(time_session*60);
            //audio
        }
    }
},[time,estado]);
const cambio_estado=(btn)=>{
    if(btn==="play")return setEstado(true),setTime(time_session * 60);
    if(btn==="pause")return setEstado(false);
    if(btn==="reset"){
        setEstado(false);
        setSession(25);
        setTime(time_session * 60);
        setBreak(5);
        return
    }

    return;
}
const alarmSound = new Audio('audio/BeepSound.wav'); 

React.useEffect(() => {
  if (time === 0) {
    alarmSound.play();
  }
}, [time]);

    const mini =Math.floor(time/60);
    const segundos=time%60;
    return(
        <div className="contenedor">
            <div className="conten_titulos_break_session">
                 <p className="titulos_braek_session">Break Length</p>  
                 <p className="titulos_braek_session">Session Length</p>
            </div>
            <div className="conte_controles ">
                <div className="conte_break box">
                   <i className="bi bi-arrow-up-square center_break_session icon_button_size" onClick={()=>onClick("up_break")}></i>
                   <p className="center_break_session size_num">{time_break}</p>
                   <i  className="bi bi-arrow-down-square center_break_session icon_button_size" onClick={()=>onClick("down_break")}></i>
                </div>
                <div className="line-center"></div>  
                <div className="conte_session box">
                    <i  className="bi bi-arrow-up-square center_break_session icon_button_size" onClick={()=>onClick("up_session")}></i>
                    <p className="center_break_session size_num">{time_session}</p>
                    <i  className="bi bi-arrow-down-square center_break_session icon_button_size" onClick={()=>onClick("down_session")}></i>   
                </div>
            </div>
            <div className="conten_cronometro" >
             <p className="title_session">Session</p>
             <p className="crono">
                {String(mini).padStart(2,"0")}:
                {String(segundos).padStart(2,"0")}
             </p>
             <div className="cont-icon-timer">
                <i className="bi bi-play icon-session" onClick={()=>cambio_estado("play")}></i>
                <i className="bi bi-pause-fill icon-session " onClick={()=>cambio_estado("pause")}></i>
                <i className="bi bi-arrow-repeat icon-session" onClick={()=>cambio_estado("reset")}></i>
             </div>
            </div>
        </div>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Pomodoro />);