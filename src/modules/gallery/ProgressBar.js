import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';

import { motion } from 'framer-motion';

const ProgressBar = ({ file, setF }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setF(null);
    }
  }, [url, setF]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;