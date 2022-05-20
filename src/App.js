import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(card => {
    return (
      <Card
        key={card.key}
        item={card}
        // status={card.status}
        // img={card.img}
        // rating={card.rating}
        // raters={card.raters}
        // country={card.country}
        // tagLine={card.tagLine}
        // price={card.price}
        // open={card.openSpot}

        {...card}

      /> 
    )
  })
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="card-space">
        {cards}
      </div>
    </div>
  );
}

export default App;


// return (
//   <div className="App">
//     <Nav />
//     <Hero />
//     <div className="card-space">
//       <Card 
//         status="Sold Out"
//         img="card1.png"
//         rating="5"
//         raters="6"
//         country="USA"
//         tagLine="Life lessons with Katie Zaferes"
//         price="129"
//         isPun={true}
//         upvotes={10}
//         downvotes={2}
//         comments={[{author: "", body: "", title: ""}]}
//       />
//       <Card 
//       status="Sold Out"
//       img="card1.png"
//       rating="5"
//       raters="6"
//       country="USA"
//       tagLine="Life lessons with Katie Zaferes"
//       price="129"
//     />
//     <Card 
//       status="Sold Out"
//       img="card1.png"
//       rating="5"
//       raters="6"
//       country="USA"
//       tagLine="Life lessons with Katie Zaferes"
//       price="129"
//     />
//     <Card 
//       status="Sold Out"
//       img="card1.png"
//       rating="5"
//       raters="6"
//       country="USA"
//       tagLine="Life lessons with Katie Zaferes"
//       price="129"
//     />
//     <Card 
//       status="Sold Out"
//       img="card1.png"
//       rating="5"
//       raters="6"
//       country="USA"
//       tagLine="Life lessons with Katie Zaferes"
//       price="129"
//     />
//     </div>
//   </div>
// );
