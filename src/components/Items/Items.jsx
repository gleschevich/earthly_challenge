export default function Items() {
    const sustainabilityKit=[
        {
            id:1,
            name: "Straws",
            urlImg:"./straws.webp",
            description:"2 Reusable bamboo straws, alternative to the plastic straw. Bamboo straws are 100% natural."
        },
        {
            id:2,
            name: "Reusable Cup",
            urlImg:"./cup.webp",
            description:"1 Plant Based Reusable Cup with 2 lids. Plastic free and biodegradable material"
        },
        {
            id:3,
            name: "Loofah",
            urlImg:"./loofa.webp",
            description:"1 Natural Loofah. For cleaning and exfoliating your skin"
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
                <div className="bg-animated-gradient"> 
                    <h2 id="title-details"className="ms-5">Details:</h2>
                    <ul id="list-details" className="ms-5 fs-4"> 
                        <li> Got Approved, Tested, and approved in TUV Rhineland, Germany</li>
                        <li> 100% recyclable and non-toxic</li>
                        <li> Leak-Proof</li>
                        <li> Odorless tasteless and doesn’t react with hot beverages</li>
                        <li> Lightweight</li>
                        <li> Microwavable</li>
                    </ul>
                    <h2 id="title-contains" className="ms-5">Contains:</h2>
                    <div className="row align-items-center">
                        {   
                            sustainabilityKit.map((item) => (
                                <div className="col">
                                    <div class="card mt-2 ms-2">
                                        <img src={item.urlImg} class="card-img-top" alt="Img"/>
                                        <div class="card-body">
                                            <h5 class="card-title fs-3">{item.name}</h5>
                                            <p class="card-text fs-5">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            
            </>
         )
}