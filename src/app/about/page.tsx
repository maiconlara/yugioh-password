import AboutCards from "@/components/base/AboutCards";
const About = () => {
  return (
    <div className=" flex justify-center items-center h-screen bg-[#111111]">
      <div className="flex flex-col items-center justify-center gap-6">
        <AboutCards title="Portfolio" text="Take a look at my portfolio"/>
        <AboutCards title="Github" text="Go checkout my GitHub"/>
      </div>
    </div>
  );
};
export default About;
