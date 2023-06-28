"use client";

import { motion, type Variants } from "framer-motion";

const scaleVariants = {
  // For the image circles to appear larger
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
} satisfies Variants;

export default function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div className="ml-5">
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Patrick Ducusin</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">C.S. Student</p>
            <p className="p-text">Software Engineer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img
          className="app__header-profileImg"
          src="/myprofile-modified.png"
          alt="profile image"
        />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src="/circle"
          alt="profile background"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {["/typescript", "/flutter", "/react"].map((image, index) => (
          <div key={`image-${index}`} className="circle-cmp app__flex">
            <img src={image} alt="technology image" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
