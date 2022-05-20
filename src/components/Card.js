export default function Card(props) {
    // console.log(props);
    return (
        <div className="card">
            <div className="status">
               {props.item.openSpot == 0 && props.item.status}
               {props.item.openSpot != 0 && <span>ONLINE</span>}
            </div>
            <img src={props.item.img && props.item.img} alt="Card 1" className="card--image"/>
            <div className="card-item">
                <div className="card--detail">
                    <img src="./star_icon.png" alt="Start icon" className="card--star"/>
                    <div className="rating">
                        {props.item.rating && props.item.rating}
                    </div>
                    <div className="rating-detail">
                        ({props.item.raters && props.item.raters}) . {props.item.country && props.item.country}
                    </div>
                </div>
                <div className="card--intro">
                    {props.item.tagLine && props.item.tagLine}
                </div>
                <div className="card-price">
                    From {props.item.price && <b>${props.item.price}</b>} / person
                </div>
            </div>
        </div>
    )
}


// <h3 style={{display: props.item.setup ? "block" : "none"}}>Setup: {props.item.setup}</h3>

// export default function Card({status, img: image, rating, raters, country, tagLine, price}) {
//     return (
//         <div className="card">
//             <div className="status">
//                {status}
//             </div>
//             <img src={image} alt="Card 1" className="card--image"/>
//             <div className="card-item">
//                 <div className="card--detail">
//                     <img src="./star_icon.png" alt="Start icon" className="card--star"/>
//                     <div className="rating">
//                         {rating}
//                     </div>
//                     <div className="rating-detail">
//                         ({raters}) . {country}
//                     </div>
//                 </div>
//                 <div className="card--intro">
//                     {tagLine}
//                 </div>
//                 <div className="card-price">
//                     <b>From ${price}</b> / person
//                 </div>
//             </div>
//         </div>
//     )
// }
