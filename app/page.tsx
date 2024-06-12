import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import Chest from "./Components/Body/Chest";
import Services from "./Components/Services/Services";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className=" mx-8 md:mx-20 ">
      <Body />
      <Chest />
   
      <Services />

    
    </div>
    

    </div>
  );
}
