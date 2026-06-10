import "./App.css";
import image from "./assets/photo.jpg";
import ProfileCard from "./components/ProfileCard";
import MemberCard from "./components/MemberCard";

function App() {
  let values = [{
    name : "Vansh",
    role : "Frontend",
    experience : "1 year"
  },
  {
    name : "Vansh",
    role : "Frontend",
    experience : "1 year"
  }]
  return (
    //Dynamic JS
    <>
      {values.map((element,index)=> 
          <MemberCard name = {element.name} role = {element.role} experience={element.experience}/>)}
    </>
  );
}

export default App;
