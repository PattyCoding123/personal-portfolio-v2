"use client";

import { motion } from "framer-motion";

interface MobileMenuProps {
  isVisible: boolean;
}

export default function MobileMenu({ isVisible }: MobileMenuProps) {
  return <div className="app__navbar-menu"></div>;
}
