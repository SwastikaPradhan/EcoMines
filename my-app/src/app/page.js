import Image from "next/image";
import Navbar from "./_components/Header";
//import Pie from './_components/Card/Pie';
//import ColChart from "./_components/Card/ColChart";
import Mainheropage from "./_components/Mainheropage"
import Hero from "./_components/Hero"
import Summary from './_components/Summary';
import Cards from './_components/HomeCards';
//import AfforestationAnalytics from './afforestation/AfforestationAnalytics';
export default function Home() {
  return (
    <div>

      <Navbar/>
      <Mainheropage/>
      <Hero/>
      <Summary />
      <Cards/>
      
      
      
      
      
    </div>
   
  );
}





 