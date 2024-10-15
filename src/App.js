import { Allotment, setSashSize } from "allotment";
import "allotment/dist/style.css";
import styles from "./App.module.css";
import image from "../src/image.jpg";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import React, { useRef } from "react";

import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";


const Controls = () => {
  const { zoomIn, zoomOut, resetTransform, zoomToElement } = useControls();

  return (
    <div className="tools" >
    <ul>
    <li>
    <AwesomeButton onPress={() => zoomIn()}><a>Zoom In</a></AwesomeButton>
    </li>
    
     <li>
     <AwesomeButton onPress={() => zoomOut()}><a>Zoom out</a></AwesomeButton>
     </li>
 
 <li>
 <AwesomeButton onPress={() => resetTransform()}><a>Reset</a></AwesomeButton>
     
 </li>

<li>
<AwesomeButton onPress={() => zoomToElement("elk",4)}>Press to see trail!</AwesomeButton>
     
</li>

    </ul>

    </div>
    
  );
};


export default function App() {
 

  return (
    <div style={{overflow: "hidden", height: "95vh",width: "100%",borderRadius: 10,margin: "auto",borderColor: "black",borderStyle: "solid", backgroundColor: "#333"}}>
      <Allotment
      separator = {true}

      vertical = {false}

      defaultSizes={[300,200]}
      
      >

<Allotment.Pane>
 
 <TransformWrapper
       initialScale={1}
       smooth = {true}
       doubleClick={true}
     
       maxScale={4}
       
       centerOnInit = {true}
       
       
     >
       {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
         <>
       
         
         <Controls >
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
            width="99%"
            height="100%"
            
          
          ></iframe>
    
     
        </Allotment.Pane>
        
       
      </Allotment>
    </div>
  );
}
