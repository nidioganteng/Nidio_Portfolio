import { useRef } from "react"
import Card from "../components/Card"
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import {Framework} from "../components/Framework";
const About = () => {
  const grid2Container = useRef();
  return (
    <section id='about' className="c-space section-spacing">
        <h2 className="text-heading">About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* Grid 1 */}
            <div className="flex items-end grid-default-color grid-1">
                <img
                    src="assets/coding-pov.png"
                    className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                />
                <div className="z-10">
                    <p className="headtext">Hi, I'm Nidio Tilman</p>
                    <p className="subtext">
                        I’m a web developer passionate about crafting responsive, accessible, and user-friendly digital experiences. 
                        With a strong grasp of frontend tools like React and Tailwind CSS, combined with an eye for UI/UX design using Figma, I turn ideas into functional and visually engaging interfaces.
                    </p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
            </div>

            {/* Grid 2 */}
            <div className="grid-default-color grid-2">
                <div 
                ref={grid2Container}
                className="flex items-center justify-center h-full"
                >
                    <p className="flex items-end text-5xl text-gray-500">
                        CODE CRAFT
                    </p>
                    <Card
                    style={{ rotate: "75deg", top: "30%", left: "20%" }}
                    text="REACT"
                    containerRef={grid2Container}
                    />

                    <Card
                    style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                    text="JAVA SCRIPT"
                    containerRef={grid2Container}
                    />

                    <Card
                    style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                    text="PYTHON"
                    containerRef={grid2Container}
                    />

                    <Card
                    style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                    text="UI/UX"
                    containerRef={grid2Container}
                    />

                    <Card
                    style={{ rotate: "20deg", top: "10%", left: "38%" }}
                    text="CSS"
                    containerRef={grid2Container}
                    />

                    <Card
                    style={{ rotate: "30deg", top: "70%", left: "70%" }}
                    image="assets/logos/linkidin.png"
                    link="https://www.linkedin.com/in/nidio-tilman-b666a7377/"
                    containerRef={grid2Container}
                    />

                    <Card
                    style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                    image="assets/logos/github.png"
                    link="https://github.com/nidioganteng"
                    containerRef={grid2Container}
                    />

                    <Card
                    style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                    image="assets/logos/Instagram.png"
                    link="https://www.instagram.com/kezarstorski/"
                    containerRef={grid2Container}
                    />
                </div>
            </div>

            {/* Grid 3 */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">I'm based in Jupiter, and open to remote work worldwide</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]">
                    <Globe />
                </figure>
            </div>

            {/* Grid 4 */}
            <div className="grid-special-color grid-4">
                 <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                        Do you want to start a project together?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>
            </div>

            {/* Grid 5 */}
            <div className="grid-default-color grid-5">
                <div className="z-10 w-[50%]">
                    <p className="headText">Tools & Technologies</p>
                    <p className="subtext">
                    I craft modern web apps with a mix of design and code using HTML, CSS, JavaScript, React, Python, and Figma.
                    </p>
                </div>
                <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                    <Framework />
                </div>
            </div>


        </div>
    </section>
  )
}

export default About