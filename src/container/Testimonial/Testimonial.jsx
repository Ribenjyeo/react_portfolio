import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index)
  }

  const brandArray = [
    {
      title: "Spotify",
      imgUrl: images.spotify,
    },
    {
      title: "Adidas",
      imgUrl: images.adidas,
    },
    {
      title: "Amazon",
      imgUrl: images.amazon,
    },
    {
      title: "NewBalance",
      imgUrl: images.nb,
    },
    {
      title: "Asus",
      imgUrl: images.asus,
    },
  ]

  const testimonialArray = [
    {
      title: "Alex",
      company: "Google",
      imgUrl: images.html,
      feedback: "Designs for scale and reliability with the future in mind. Can do critical R&D. Can lay out a path across many versions, given long term strategic goals. Independently scopes and implements solutions for their project/team. Systematically thinks through potential design impacts on other teams and the company.Constantly veers into irrelevant design issues.",
    },
    {
      title: "Alex",
      company: "Netflix",
      imgUrl: images.css,
      feedback: "Writes clean code. Iterates on code, based on feedback. Can defend technical decisions in code review feedback. Mentors others on the code base, processes, and other best practices. Takes initiative to reduce complexity. Code is difficult to read or follow.",
    },
    {
      title: "Alex",
      company: "Python",
      imgUrl: images.python,
      feedback: "Provides reasonable timeline estimates. Never surprises the team with delayed features. Strong awareness of the state of the product and team at all times. Overpromises on deadlines, leading to unnecessary overtime and burnout.",
    },
    {
      title: "Alex",
      company: "C++",
      imgUrl: images.cpp,
      feedback: "Has a deep understanding of full-stack encompassing their domain. Go-to expert in an area, with an increasingly strategic mindset. Can navigate and make legacy code maintainable. Maintains awareness of industry trends and tools.",
    },
  ];

  useEffect(() => {
    setTestimonials(testimonialArray);
    setBrands(brandArray)
  }, []);

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgUrl}
              alt={testimonials[currentIndex].title}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].title}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={index}
          >
            <img src={brand.imgUrl} alt={brand.title} />
          </motion.div>
        ))}
      </div>

    </>
  );
};

export default AppWrap(Testimonial, "testimonial");
