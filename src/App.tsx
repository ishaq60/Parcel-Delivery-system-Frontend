
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import CostCalculator from "./components/Costcalculate";
import FastestDelivery from "./components/FastDelivery";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonal";
import ProcessSteps from "./components/Proccess";


const App = () => {
  return (
    <div className="dark">
      <Hero></Hero>
      <FastestDelivery></FastestDelivery>
      <ProcessSteps></ProcessSteps>
      <AboutUs></AboutUs>
      <CostCalculator></CostCalculator>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </div>
  );
};

export default App;
