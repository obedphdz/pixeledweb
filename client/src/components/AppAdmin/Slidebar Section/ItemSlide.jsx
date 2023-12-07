
/* ItemSlide.jsx */
import { motion } from 'framer-motion';
import './Item.css';

const ItemSlide = ({ icon, name, showName }) => {
  const subheadingVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };

  return (
    <motion.div className='listItem'>
      <motion.div className='icon'>{icon}</motion.div>
      <motion.span
        variants={subheadingVariants}
        initial='hidden'
        animate={showName ? 'visible' : 'hidden'}
      >
        {name}
      </motion.span>
    </motion.div>
  );
};

export default ItemSlide;
