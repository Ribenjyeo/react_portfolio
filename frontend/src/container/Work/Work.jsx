import React, {useState, useEffect} from 'react'
import {AiFillEye, AiFillGithub} from 'react-icons/ai'
import { images } from '../../constants'
import './Work.scss'
import { motion } from 'framer-motion'
import {AppWrap} from '../../wrapper';

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [workFilter, setWorkFilter] = useState([])
  const work = [
    {
      title: 'Web Development',
      description: 'I am a good web developer',
      imgUrl: images.about01,
      projectLink: 'http://google.com',
      tags: 'UI/UX'
    },
    {
      title: 'React JS',
      description: 'I am a good web developer',
      imgUrl: images.about02,
      projectLink: 'http://google.com',
      tags: 'React JS'
    },
    {
      title: 'Mobile App',
      description: 'I am a good web developer',
      imgUrl: images.about03,
      projectLink: 'http://google.com',
      tags: 'Mobile App'
    },
    {
      title: 'Web Development',
      description: 'I am a good web developer',
      imgUrl: images.about04,
      projectLink: 'http://google.com',
      tags: 'Web App'
    },
  ]

  useEffect(() => {
    setWorkFilter(work)
  }, [])


  const handleitemFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0}])

    setTimeout(() => {
      setAnimateCard([{y: 0, opacity: 1}])

      if(item === 'All') {
        setWorkFilter(work)
      }
      else {
        setWorkFilter(work.filter((work) => work.tags.includes(item)))
      }
    }, 500)

  }

  return (
    <>
      <h2 className='head-text'>My Creative <span>Portfolio</span> section </h2>

      <div className='app__work-filter'>
        {(['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All']).map((item, index) => (
          <div
            key={index}
            onClick={() => handleitemFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
      >
        {workFilter.map((item, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={item.imgUrl} alt={item.title}/>

              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                className='app__work-hover app__flex'
              >
                <a href={item.projectLink} target='_blank' rel='noreferrer'>
                <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={item.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25}}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{item.title}</h4>
              <p className='p-text' style={{marginTop: 10}}>{item.description}</p>

              <div className='app__work-tag app__flex'>
                <p className='p-text'>{item.tags}</p>
              </div>
            </div>

          </div>
        ))}

      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work')