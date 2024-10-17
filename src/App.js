import { Allotment, setSashSize } from "allotment";
import  "allotment/dist/style.css";
import aweButt from "./App.module.css";
import image from "../src/image.jpg";
import 'react-awesome-button/dist/styles.css';
import { AwesomeButton, AwesomeButtonProgress } from 'react-awesome-button';
import React, { useRef } from "react";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";

const Controls = (ref) => {
  const { zoomIn, zoomOut, resetTransform, zoomToElement } = useControls();
  const myStyle = {
      

      "--button-default-height": "33px",
      "--button-default-font-size": "16px",
      "--button-default-border-radius": "10px",
      "--button-horizontal-padding": "15px",
      "--button-vertical-padding": "0px",
      "--button-raise-level": "3px",
      "--button-hover-pressure": "1.25",
      "--transform-speed": "0.5s",
      "--button-primary-color": "#4f4f4f",
      "--button-primary-color-dark": "hsla(0, 0%, 73%, 0)",
      "--button-primary-color-light": "#ffffff",
      "--button-primary-color-hover": "#686868",
      "--button-primary-color-active": "#4f4f4f",
  }
  return (
    <div className="tools" >
    <ul>
    <li>
    <AwesomeButton style={myStyle} type="primary" onPress={() => zoomIn()}><a>+</a></AwesomeButton>
    </li>
    
     <li>
     <AwesomeButton  style={myStyle} type="primary" onPress={() => zoomOut()}><a>-</a></AwesomeButton>
     </li>
 
 <li>
 <AwesomeButtonProgress style={myStyle} type="primary" onPress={(event, release) => {
       resetTransform();
       release();
       
      }}>
 <a>Reset</a></AwesomeButtonProgress>
     
 </li>



<li>
<AwesomeButtonProgress style={myStyle} type="primary" onPress={(event, release) => {
       zoomToElement("elk");
       release();
      }}>
 <a>Click To See Trail!</a></AwesomeButtonProgress>

</li>


    </ul>
    <hr style={{height:2,
    "border-width":0,
    "height": 3,
    "color":"gray",
    "background-color":"gray"}}></hr>
    </div>
   
  );
};


export default function App() {
 

  return (
    <div style={{ overflow: "hidden", height: "95vh",width: "100%",borderRadius: 10,margin: "auto",borderColor: "black",borderStyle: "solid", backgroundColor: "#333"}}>
    
      <Allotment
      
      separator = {true}
      
      vertical = {false}

      defaultSizes={[300,200]}
      
      >

<Allotment.Pane 
  maxSize = {800}
>
 
 <TransformWrapper
       initialScale={1}
       smooth = {true}
       doubleClick={true}
     
       maxScale={5}
       
       centerOnInit = {true}
       
       
     >
       {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
         <>
       
         
         <Controls>
          
         </Controls>

        <div style = {{ height: '80vh',width:"55vw",borderRadius: 5,
             borderTop: "10px solid #4f4f4f",
             borderRight: "1vw solid #4f4f4f",
             borderLeft: "1vw solid #4f4f4f",
             borderBottom: "1vw solid #4f4f4f",
             verticalAlign: "middle",}}>
              <TransformComponent>
           
          
           <img src = {image} alt="wvmap" style = {{height: '80vh',width:"55vw",
      
           float: "left",
           

           }}></img>
           
           <div id = "elk" style = {{top: "61%",left: "25%",position: "absolute"}} ></div>
         
         </TransformComponent>
  

             </div>
          
         </>
       )}
     </TransformWrapper>

 </Allotment.Pane>

        <Allotment.Pane 
        maxWidth={"50vh"}
        >
        
       
      
        <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1viS0qWedzVsQEEyvzheAalmEyVMrR5I&ehbc=2E312F&noprof=1"
            width="100%"
            height="100%"
            
          
          ></iframe>
    
     
        </Allotment.Pane>
        
       
      </Allotment>
    </div>
  );
}
