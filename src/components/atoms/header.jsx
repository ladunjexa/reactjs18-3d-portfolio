import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { config } from "../../config";

export const Header = ({ useMotion, section }) => {
  const Content = () => (
    <>
      <p className={styles.sectionSubText}>{config[section].p}</p>
      <h2 className={styles.sectionHeadText}>{config[section].h2}</h2>
    </>
  );

  return useMotion === true ? (
    <motion.div variants={textVariant()}>
      <Content />
    </motion.div>
  ) : (
    <Content />
  );
};
