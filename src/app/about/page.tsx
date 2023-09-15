import AboutCards from "@/components/base/AboutCards";
const About = () => {
  return (
    <div className=" flex justify-center items-center h-screen bg-[#111111]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <AboutCards
          title="Portfolio"
          text="Take a look at my portfolio"
          link="https://portfolio-maiconlara.vercel.app/"
          image="https://github.com/maiconlara.png"
        />
        <AboutCards
          title="Github"
          text="Go checkout my GitHub"
          link="https://github.com/maiconlara"
          image="https://github.com/maiconlara.png"
        />
      </div>
    </div>
  );
};
export default About;
