import React, { useState } from "react";
import { motion } from "framer-motion";

const Block = ({ delay }) => {
  let randomColor = () => {
    let colorOne = Math.floor(Math.random() * 255);
    let colorTwo = Math.floor(Math.random() * 255);
    let colorThree = Math.floor(Math.random() * 255);

    return {
      colorOne: colorOne,
      colorTwo: colorTwo,
      colorThree: colorThree,
    };
  };

  const [color, setColor] = useState(randomColor());
  let newDelay = delay + 0.5;

  console.log(newDelay);

  console.log(color);
  let blockStyles = {
    background: `rgb(${color.colorOne}, ${color.colorTwo}, ${color.colorThree})`,
  };
  return (
    <motion.div
      className="block"
      style={blockStyles}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: delay }}
      whileInView={{ y: "20px", opacity: 1 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: "-20px" }}
        animate={{ opacity: 1, y: "0px" }}
        transition={{ duration: 2, delay: newDelay }}
      >
        BLOCK.
      </motion.h1>
    </motion.div>
  );
};

export default Block;
