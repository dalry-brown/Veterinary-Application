import React from "react"
import SlideItem from "../Components/SlideItem"
import "../../Styles/slides.css"
const Mainslide = () => {
    return (
      <>
      <div className="slides_main">
      <h1>Slides</h1>
      <ul className="Slides_type">
          <li className="slides_name">Title</li>
          <li className="slides_name">Session</li>
          <li className="slides_name">Slides</li>
      </ul>
      <div className="slides_container">
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      <SlideItem title="Introduction to computer organization" Session="8" Slides="33"/>
      </div>
      </div>
      </>
    )
  }
  
  export default Mainslide