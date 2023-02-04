import "./items.css"
export default function Items() {
    const sustaneableKit=[
        {
            id:1,
            name: "Straws",
            urlImg:"./straws.webp",
            description:"2 Bamboo straws"
        },
        {
            id:2,
            name: "Reusable Cup",
            urlImg:"./cup.webp",
            description:"1 Plant Based Reusable Cup with 2 lids"
        },
        {
            id:3,
            name: "Loofah",
            urlImg:"./loofa.webp",
            description:"1 Natural Loofah"
        },
        {
            id:4,
            name: "Eartips",
            urlImg:"./cotton.webp",
            description:"1 box of 50 Bamboo Cotton Eartips"
        },
        {
            id:5,
            name: "Toothbrush",
            urlImg:"./toothbrush.webp",
            description:"1 Bamboo Toothbrush"
        },

    ]
    return(
        <>
            <div className="row">
                {
                    sustaneableKit.map((item) => (
                        <div className="col-12 bg-danger">
                        <div className="container-fluid ">
                          <p className="fs-1">{item.name}</p>
                          <span className="fs-1"> {item.description}</span>
                          <img  src={item.urlImg} className= "image" alt="Img"/>
                        </div>
                        </div>
                      )) 
                  }
            </div>
        </>
    )
}