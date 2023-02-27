import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className = "header-container"> 
            <h1> Top 12 New York City Destinations </h1>
      </div>
      <div className = "card-container" > 
      <Card image = "https://media.istockphoto.com/id/474941376/photo/statue-of-liberty-and-a-rising-supermoon.jpg?s=612x612&w=0&k=20&c=Hn5d0JRooufl3nUE8se4cLvSQcJXuu5wwOhjimzLljA="
            title = "The Stautue of liberty"
            fact = "Fun Fact: There are 7 rays on her crown, representing the 7 continents of the world! "
            link = "https://www.nps.gov/stli/index.htm"/>
      <Card image = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/new-york-city-empire-state-building-sunset-christopher-arndt.jpg"
            title = "Empire State Building"
            fact = "Fun Fact: The first building in the world to have more than 100 floors!"
            link = "https://www.esbnyc.com"/>
      <Card image = "https://photographylife.com/wp-content/uploads/2015/08/Brook-1-of-1.jpg"
            title = "Brooklyn Bridge"
            fact = "Fun Fact: It was the first suspension bridge to use steel for its cable wire! "
            link = "https://en.wikipedia.org/wiki/Brooklyn_Bridge"/> 
      <Card image = "https://images.unsplash.com/photo-1595901688281-9cef114adb0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            title = "Time Square"
            fact = "Fun Fact: It was once named Longacre Square! "
            link = "https://www.timessquarenyc.org"/>
      <Card image = "https://static01.nyt.com/images/2020/08/15/arts/13memorial-item/merlin_143622930_40225c35-5172-439d-9b0d-aa62bbeec828-mobileMasterAt3x.jpg"
            title = "9/11 Memorial and Museum"
            fact = "Fun Fact: The museum holds 10,000 artifacts, including wrecked emergency vehicles, 911 phone calls and emergency response recordings, pictures of all of the victims and media of the entire event from crash to cleanup! "
            link = "https://www.911memorial.org"/>
      <Card image = "http://www3.metmuseum.org/-/media/images/visit/met-fifth-avenue/fifthave_teaser.jpg?sc_lang=en"
            title = "Metropolitan Museum of Art"
            fact = "Fun Fact: An Ancient Egyptian Hippopotamus Named William is the Museum/'s Mascot!"
            link = "https://www.metmuseum.org"/>
      <Card image = "https://cdn.sanity.io/images/bs9rmafh/main/8bb0dcf97df40ddab2d06a41ca47d3e59110b8a1-1840x2000.jpg?w=800&h=870&fit=crop"
            title = "Rockefeller Center"
            fact = "Fun Fact: It was a fallout shelter during the cold war! "
            link = "https://www.rockefellercenter.com"/>
      <Card image = "https://img.andrewprokos.com/ST-PATRICKS-CATHEDRAL-VIEW-MIDTOWN-NIGHT-4133-1000PX-723x1000.jpg"
            title = "St. Patrick's Cathedral"
            fact = "Fun Fact: The Cathedral has 21 altars and 19 bells, each named after a different saint!"
            link = "https://saintpatrickscathedral.org"/>
      <Card image = "https://cdn.britannica.com/57/163657-050-2AC2C4F8/Night-view-Lincoln-Center-for-the-Performing.jpg"
            title = "Lincoln Center"
            fact = "Fun Fact: The stage in the Metropolitan Opera House is the size of a football field! "
            link = "http://www.lincolncenter.org/home"/>
      <Card image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/a2/48/86/radio-city-music-hall.jpg?w=1200&h=-1&s=1"
            title = "Radio City Music Hall"
            fact = "Fun Fact: The largest indoor theatre in the world! "
            link = "https://www.rockefellercenter.com/holidays/radio-city-music-hall/"/>
      <Card image = "https://images.squarespace-cdn.com/content/v1/5731f0f159827eed2999a74e/1464023921491-MJVJMMA50S08YPCHF44H/Grand+Central+-+Night+2.jpg"
            title = "Grand Central Terminal"
            fact = " Fun Fact: It has a whispering gallery and the ceiling is upside down!"
            link = "https://www.grandcentralterminal.com"/>
      <Card image = "https://cdn.shopify.com/s/files/1/2486/4354/products/Peter-Lik-Central-Park-Spirit-Framed-Recess-Moun_1800x.jpg?v=1670363959"
            title = "Central Park"
            fact = " Fun Fact: The Park takes up roughly 843 acres of land, which is roughly 16 billion New York apartments! "
            link = "https://www.centralparknyc.org"/>
      </div>
    </div>
  )
}

export default App
