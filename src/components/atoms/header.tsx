import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { config } from "../../config";

interface IHeader {
  useMotion: boolean;
  section: string;
}

export const Header: React.FC<IHeader> = ({ useMotion, section }) => {
  const sectionKey = section as keyof typeof config.sections;

  const Content = () => (
    <>
      <p className={styles.sectionSubText}>{config.sections[sectionKey].p}</p>
      <h2 className={styles.sectionHeadText}>
        {config.sections[sectionKey].h2}
      </h2>
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
