import { motion } from "framer-motion"; // kamu nulis "motion/react", pastikan importnya benar ya!
const Card = ({ style, text, image, link, containerRef }) => {
  return image && !text ? (
    link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <motion.img
          className="absolute w-15 cursor-grab"
          src={image}
          style={style}
          whileHover={{ scale: 1.05 }}
          drag
          dragConstraints={containerRef}
          dragElastic={1}
        />
      </a>
    ) : (
      <motion.img
        className="absolute w-15 cursor-grab"
        src={image}
        style={style}
        whileHover={{ scale: 1.05 }}
        drag
        dragConstraints={containerRef}
        dragElastic={1}
      />
    )
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={2}
    >
      {text}
    </motion.div>
  );
};

export default Card;
