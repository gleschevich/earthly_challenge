import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

export default function Carousel() {
  const [toggler, setToggler] = useState(false);

    return(
    <>
    <div className="row">
      <div className="col-12">
       
        <img className="img-fluid rounded p-2 w-50 h-70 mx-auto d-block" src="./Kit1.webp" alt="KIT" onClick={() => setToggler(!toggler)}/>
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
    </div>
    </>
    )

}