import { NavBar } from './navbar/NavBar';
import { motion, AnimatePresence } from 'motion/react';
import { useIntersectionObserver } from '@uidotdev/usehooks';
import { ButtonGetQuote } from './home/sections/ButtonGetQuote';

export const Header = () => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: '0px',
  });

  const isNavBarVisible = entry?.isIntersecting;

  return (
    <>
      <NavBar ref={ref} />
      <AnimatePresence>{!isNavBarVisible && <NewNavBar />}</AnimatePresence>
    </>
  );
};

export const NewNavBar = () => {
  return (
    <motion.nav
      className="border-border/50 bg-background/80 fixed top-0 right-0 left-0 z-50 flex w-full items-center justify-between border-b px-6 py-3 shadow-lg backdrop-blur-md md:px-[2rem] dark:bg-gray-900/80"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2">
        <h2 className="bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-xl font-bold text-transparent">
          Brand
        </h2>
      </div>
      <ButtonGetQuote />
    </motion.nav>
  );
};
