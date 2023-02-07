import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { Animator, ScrollContainer, ScrollPage,batch, MoveOut,Fade } from "react-scroll-motion"

export default function KitBrand() {
  const [toggler, setToggler] = useState(false);

    return(
    <>
   
      <div className="row"> 
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(Fade(),MoveOut(0,500))}>
              <div className="bg-kitImage">
                <div className="kitImage-hover" >
                    <img className="kitImage" src="./Kit1.webp" alt="KIT" onClick={() => setToggler(!toggler)}/>
                    <button id="btn-add" className="btn btn-light ms-5 mt-2"> <span className="fs-3">Add to cart for €10.99</span> <p>Quantity: <input className="input-quantity" min={1} max={99} type="number"></input></p> </button>
                </div>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
        <FsLightbox toggler={toggler}
        sources={[
          './cup.webp',
          './loofa.webp',
          './straws.webp',
          './cotton.webp',
          './toothbrush.webp'
        ]}
        />  
      </div>
    </>
    )

}