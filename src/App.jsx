import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Footer from './components/footer.jsx';
import Halsinge from "./images/halsingelinnevaveri.png";
import Catcollection from "./images/catcollection.png";
import CountDown from './images/countdowntimer.png'
import Dizzydream from "./images/dizzydream.png";
import Weatherapp from "./images/weatherapp.png";
import CocktailDatab from './images/cocktailDataB.png'
import Snapspiration from './images/Snapspiration.png'
import './style/first.css';

const App = () => {
  

  const accordionData = [
    {
      unique: "item1",
      id: "1",
      image: `${Halsinge}`,
      heading: `Hälsinge linneväveri, e-com`,
      link: "https://halsingelinnevaveri.se/"
   },
    {
        unique: "item2",
        id: "2",
        image: `${Snapspiration}`,
        heading: "Snapspiration",
        content: "https://github.com/SofiaCronstrom/individuellt-projekt-react"
     },
     {
        unique: "item3",
        id: "3",
        image: `${CocktailDatab}`,
        heading: "Cocktail database",
        content: "https://github.com/Rotkeh/react-group-project",
        link: "https://cocktaildbgroup1.netlify.app/"
     },
     {  
        unique: "item4",
        id: "4",
        image: `${Catcollection}`,
        heading: "Cat collection",
        content: "https://github.com/SofiaCronstrom/project-js-individual",
        link: "https://project-js-individual.vercel.app/"
        
     },
     {
        unique: "item5",
        id: "5",
        image: `${CountDown}`,
        heading: "Countdown timer",
        content: "https://github.com/SofiaCronstrom/weather-app-async",
        link: "https://countdown-timer-mu-dun.vercel.app/"
     },
      {
        unique: "item6",
        id: "6",
        image: `${Weatherapp}`,
        heading: "Weather app",
        content: "https://github.com/SofiaCronstrom/weather-app-async"
     },
       {
        unique: "item7",
        id: "7",
        image: `${Dizzydream}`,
        heading: "Weather app",
        content: "https://github.com/SofiaCronstrom/dizzy-dream",
        link: "https://sofiacronstrom.github.io/dizzy-dream/"
     }

    ];
  
  return (
    
   <>
      <About/>
        
        <div className="project-index">
              {accordionData.map(({ unique, id, image, heading, content, link }) => (
              <Projects unique={unique} key={id} image={image}  content={content} link={link} heading={heading}/>
              ))}
       </div>
      
      <Footer />
   </>
  
  )

}

export default App;
