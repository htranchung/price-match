import React from 'react'
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';

const HowItWorks = () => {
  return (
    <div className='howItWorksSection'>

      <div className='p1'>How it Works</div>
      <div className='p2 spacingForText'>A Shopping Toolkit for all your needs!</div>

      <div className='category'>
        <div className='heading'>
          <div className='text13'>Simple AI Search</div>
          <p className='text14'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
          </p>
          <button className='tryNowButton'>Try Now</button>
        </div>
        <div className='container1'>
          <img
            alt="pastedImage"
            src={image2}
            className='pasted-image'
          />
        </div>
      </div>

      <div className='row'>
        <div className='category1'>
          <div className='heading1'>
            <div className='text16'>AI Chat Search</div>
            <div className='text17'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <button className='chatSearchButton'>AI Chat Search</button>
          </div>
          <img
            alt="pastedImage"
            src={image1}
            className='pasted-image1'
          />
        </div>
        <div className='gap' />
        <div className='category2'>
          <div className='heading2'>
            <div className='text19'>AI Analysis</div>
            <div className='text20'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <img
            alt="pastedImage"
            src={image3}
            className='pasted-image2'
          />
        </div>
      </div>


    </div>
  )
}

export default HowItWorks


{/* <section className='how-it-works'>
<div className='centered-container'>
  <div className='heading'>
    <div className='text11'>How it works</div>
    <div className={` $'text12' ${project['title' `}>
      A Shopping Toolkit for all Your Needs!
    </div>
  </div>

</div>
</section> */}
