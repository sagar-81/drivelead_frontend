import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { fadeInUp } from '../fade/variants';

const fadeVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 7 } },
  fadeOut: { opacity: 0, transition: { duration: 2 } }
};

const Cards = () => {
  const [animationState, setAnimationState] = useState('hidden');

  const { ref: firstCardRef, inView: firstCardInView } = useInView({ triggerOnce: true });
  const { ref: secondCardRef, inView: secondCardInView } = useInView({ triggerOnce: true });
  const { ref: thirdCardRef, inView: thirdCardInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (firstCardInView || secondCardInView || thirdCardInView) {
      setAnimationState('show');
    }
  }, [firstCardInView, secondCardInView, thirdCardInView]);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center h-auto p-10 space-y-8 lg:flex-row lg:space-x-8 lg:mt-32 lg:space-y-0 animated-gradient-bg"
      initial="hidden"
      animate={animationState}
      variants={fadeVariants}
      transition={{ duration: 1 }}
    >
      {/* Left Card (Peter Dil) */}
      <motion.div
        ref={firstCardRef}
        variants={fadeInUp}
        initial="hidden"
        animate={firstCardInView ? 'show' : 'hidden'}
        transition={{ duration: 5 }}
        className="h-auto max-w-xs p-6 bg-white rounded-lg shadow-lg lg:max-w-md lg:w-auto"
      >
        <div className="flex items-start space-x-4">
          {/* Avatar */}
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Peter Dil"
            className="w-12 h-12 rounded-full"
          />
          {/* Content */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <h4 className="font-serif font-bold text-gray-800">Tushar Dushing</h4>
              
              {/* Replace Close Button with Image */}
              <img
                src="https://framerusercontent.com/images/2gW2mLDTw5NNypH2cM9t0CaeiU.png"
                alt="Close Button"
                className="w-6 h-6 cursor-pointer"
              />
            </div>
            <p className="mt-1 text-gray-700">
              Cheapest <span className="font-serif">alternative to Typeform?</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Connector */}
      <motion.div
        className="flex flex-col items-center justify-center"
        variants={fadeVariants}
        initial="hidden"
        animate={animationState}
        transition={{ duration: 1 }}
      >
        <span className="px-4 py-1 text-xs font-semibold text-white bg-purple-600 rounded-full">
          lightscope
        </span>
        <div className="w-px h-10 bg-purple-300"></div>
      </motion.div>

      {/* Right Card (New Lead) */}
      <motion.div
        ref={thirdCardRef}
        variants={fadeInUp}
        initial="hidden"
        animate={thirdCardInView ? 'show' : 'hidden'}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-xs p-6 bg-white rounded-lg shadow-lg lg:max-w-md lg:mt-0"
      >
        <div className="flex flex-col space-y-4">
          {/* Lead Info */}
          <div className="flex items-start space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Peter Dil"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="text-xl text-green-500">●</span>
                <span className="font-serif text-black">New Lead</span>
              </div>
              <h4 className="font-serif text-gray-800">Tushar Dushing</h4>
              <p className="font-serif text-gray-500">@tushuDushing004·    1 minute ago</p>
            </div>
          </div>
          <div className="text-gray-700">
            <p>
              <span className="font-serif">VP of Product</span> at <span className="font-semibold">CooperFi Inc.</span>
            </p>
            <p className="font-serif">Email: peterdil@cooperfi.co</p>
            <p className="font-serif">Industry: Consumer Goods</p>
            <p className="font-serif">Location: San Francisco, CA</p>
            <p className="font-serif">Company Size: 500+</p>
          </div>
          <button className="w-full px-4 py-2 font-serif text-white bg-black rounded-md">
            Reply in thread →
          </button>
        </div>
      </motion.div>

      {/* Bottom Card (Elias Stravik) */}
      <motion.div
        ref={secondCardRef}
        variants={fadeInUp}
        initial="hidden"
        animate={secondCardInView ? 'show' : 'hidden'}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute bottom-[-5rem] lg:left-0 max-w-xs p-6 bg-white rounded-lg shadow-lg lg:max-w-md lg:self-end"
      >
        <div className="flex items-start space-x-4">
          {/* Avatar */}
          <img
            src="https://randomuser.me/api/portraits/men/33.jpg"
            alt="Elias Stravik"
            className="w-12 h-12 rounded-full"
          />
          {/* Content */}
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h4 className="font-serif text-gray-800">Sagar Khemnar</h4>
              <img
                src="https://framerusercontent.com/images/2gW2mLDTw5NNypH2cM9t0CaeiU.png"
                alt="Close Button"
                className="w-6 h-6 cursor-pointer"
              />
            </div>
            <p className="mt-1 font-serif text-gray-700">
              100% of the leads for my <span className="font-bold">$10K / mo</span> agency has come from <span className="font-bold">Twitter/X</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Cards;
