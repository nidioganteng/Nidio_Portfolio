import { OrbitingCircles } from "./OrbitCircle";

export function Framework() {
    const skills = [
        "cplusplus",
        "javascript",
        "python",
        "react",
        "tailwindcss",
        "figma",
        "css3",
        "html5",
        "mysql",
        "visualstudiocode",
        "vitejs",

    ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
       {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
       ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={1}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
