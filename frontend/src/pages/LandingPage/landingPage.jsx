import React ,{useState} from 'react';
import "./landingPage.css";
import NewLogo1 from '../../assets/landingPage/NewLogo1.svg';
import profile from '../../assets/landingPage/profile.svg';
import people from '../../assets/landingPage/people.svg';
import global from '../../assets/landingPage/global.svg';
import arrow from '../../assets/landingPage/arrow.svg';
import Line from '../../assets/landingPage/Line.svg';
import telegram from '../../assets/landingPage/telegram.svg';
import twitter from '../../assets/landingPage/twitter.svg';
import LinkedIn from '../../assets/landingPage/linkedIn.svg';
import peoples from '../../assets/landingPage/peoples.svg';
import shieldtick from '../../assets/landingPage/shieldtick.svg';
import Vector from '../../assets/landingPage/Vector.svg';
import jar from '../../assets/landingPage/jar.svg';
import funding from '../../assets/landingPage/funding.svg';
import Clip from '../../assets/landingPage/Clip.svg';
import { Button } from "antd";
import { Switch } from 'antd';
import Project from '../OngoingProject/index';
import ProjectCard from '../../components/projectCard';
import FundCard from '../../components/card2';
import Group from '../../assets/landingPage/Group.svg';
import unlockproject from '../../assets/landingPage/unlockproject.jpg';
import twitterBlack from '../../assets/landingPage/twitterBlack.svg';
import telegramBlack from '../../assets/landingPage/telegramBlack.svg';
import LinkedInBlack from '../../assets/landingPage/linkedinBlack.svg';

const Main = () => {
  const [isOn, setIsOn] = useState(false);

  const handleChange = (checked) => {
    setIsOn(checked);
  };
  return (
    <div className='LandingPage'>
    <div className='Collaborative'>
      <div className='item1'>
        <div className='main'>
          <img className='image' src={NewLogo1} alt='Trix' />
        </div>
        <div className='lowerMain'>
        <img className='arrow' src={Line} alt='Arrow' />
        </div>
      </div>
      <div className='item2'>
        <div className='bg'>
        <div className='Project'>
          <div className='item'>
            <div className='items'>
              <img src={NewLogo1} alt='Trix' />
            </div>
            <div className='items'>
              <p>Trix</p>
            </div>
          </div>
          <div className='heading'>
            <p>Collaborative </p>
            <p>Project Funding</p>
          </div>
          <div className='para'>
            <p>
            Trix transforms the way projects are funded with a community-centric system,
             empowering and rewarding those who lead.
            </p>
          </div>
          <div className='button'>
          <Button  className="button1" type="primary" size='large'>Trix Whitepaer</Button>
          <Button className="button2" type="default" size='large'>Buy Trix</Button>

          </div>
        </div>
        </div>
        <div className='Main2'>
        <p>Our Success Speaks Volumes</p>
        <div className='Calculations'>
       
            <div className='box'>
            <img src={profile} alt='people'/>
            <h4>2.5k+</h4>
            <p>Leaders</p>
            </div>
            <div className='box'>
            <img src={people} alt='people'/>
            <h4>26k+</h4>
            <p>Investors</p>
            </div>
            <div className='box'>
            <img src={arrow} alt='arrow'/>
            <h4>51k+</h4>
            <p>Transactions</p>
            </div>
            <div className='box'>
            <img src={global} alt='global'/>
            <h4>200+</h4>
            <p>Countries</p>
            </div>
        </div>
        </div>
      </div>
      <div className='item3'>
        <div className='MainSign'>
          <div className='signIn'>
             <p>Sign in</p>
          </div>
          <div className='mode'>
          <Switch  style={{height:"20px",width:"20px"}}checked={isOn} onChange={handleChange} />
          </div>
        </div>
        <div className='socialMedia'>
          <p>Join Us</p>
        </div>
        <div className='socialMediaIcons'>
        <img src={twitter} alt='Twitter'/>
          <img src={telegram} alt='Telegram'/>
          <img src={LinkedIn} alt='LinkedIn'/>
        </div>
      </div>
      
    </div>
    <div className='outgoing'>
            <p>Ongoing Fundraising Projects:</p>
            <div className='cards'>
                <div className='item'>
                   <ProjectCard/>
                </div>
                <div className='item'>
                   <ProjectCard/>
                </div>
                <div className='item'>
                   <ProjectCard/>
                </div>
            </div>
        </div>
        <div className='maindiv3'>
          <h3>A New Chapter in Fundraising</h3>
          <p>Explore an intuitive platform with adaptable compensation frameworks.</p>
         <div className='funcards'> 
          <div className='cardfund'>
          <FundCard
        imageSrc={peoples}
        title="Community Empowerment"
        description="Trix enables leaders to endorse projects, driving community development and collective success."
      />
           </div>
           <div className='cardfund'>
           <FundCard
        imageSrc={shieldtick}
        title="Proof Of Value"
        description="Leaders receive incentives based on their demonstrated results, linking success to sales metrics."
      />
           </div>
           <div className='cardfund'>
           <FundCard
        imageSrc={Vector}
        style={{marginTop:'5px'}}
        title="Raise Capital Easily"
        description="Connect with a vast network of influential community leaders eager to support your project."
      />
           </div>
           </div>
        </div>
        <div className='maindiv4'>
<div className='div4item'>
<img src={unlockproject} alt="Project" />
</div>
<div className='div4item'>
<h2>Realize Your Project’s Potential: Launch, Expand, Prosper</h2>
<p>Trix offers a comprehensive solution for securing funds. Utilize our wide network of community influencers to advocate for your project, while our platform handles monitoring and compensation.
</p>
<Button  className='button2' type="default" size='large'>Register Project</Button>
</div>
        </div>
        <div className='maindiv5'>
         <div className='div5item1'>
         <h3>Become a Trix Leader: Amplify Your Influence in the Crypto Sphere</h3>
         <p>Trix, the go-to platform for crypto leaders. Access pioneering projects, empower your community, and unlock growth prospects. Transparent rewards and proven track records.</p>
         </div>
         <div className='div5item2'>
            <img  src={Group} alt='Display'/>
         </div>
         <div>

         </div>
        </div>
<div className='maindiv6'>
<div className='div6item'>
<img src={funding} alt="funding" />
</div>
<div className='div6item'>
<h2>Trix: The Missing Piece in Your Project</h2>
<p>For project success, every component is crucial – community, technology, and the essential missing element, funding. Trix, the key component, enriches your project’s ecosystem, completing the puzzle for a flawless picture.</p>
<Button className='button2'  type="default" size='large'>Register Project</Button>
</div>
</div>
<div className='maindiv7'>
<div className='maindiv7item1'>
<h2>The Process</h2>
<p>Effortless Success. Establishing a campaign is straightforward,
   allowing your project to thrive in just four simple steps.</p>
</div>

<div className='maindiv7item2'>
<div className="step-card">
  <div className="step-number">1</div>
  <div className="step-text">Create Your Project</div>
</div>

<div className="step-card">
  <div className="step-number">2</div>
  <div className="step-text">Setup Your Goals</div>
</div>

<div className="step-card">
  <div className="step-number">3</div>
  <div className="step-text">Invite Your Leaders</div>
</div>

<div className="step-card">
  <div className="step-number">4</div>
  <div className="step-text">Enjoy The Growth</div>
</div>

</div>
</div>
<div className='maindiv8'>
<div className='maindiv8item1'>
<h2>Trix, Where Projects and Leaders Converge for Crypto Triumph</h2>
<p>
Maximize your project's or leadership's potential in the crypto world.
 Secure funding, promote innovation, and lead communities. Join now for shared success!
</p>
</div>
<div className='maindiv8item2'>
<img src={jar} alt='ClipPath' />
</div>
</div>
<div className='maindiv9'>
<div className='maindiv9item1'>
<div className="logo-container">
    <img src={NewLogo1} alt="Trix Logo" />
    <span className="logo-text">Trix</span>
  </div>

</div>
<div className='maindiv9item2'>
<div className="nav-links">
    <p>Links</p>
    <a href="#">Sign Up As Project</a>
  </div>
  <div className="social-links">
    <p>Join Us</p>
    <a href="#"><img src={twitterBlack} alt="Twitter" />Twitter</a>
    <a href="#"><img src={telegramBlack} alt="Telegram" />Telegram</a>
    <a href="#"><img src={LinkedInBlack} alt="LinkedIn" />LinkedIn</a>
  </div>
</div>
</div>
<div className='footer'> 
  <div className='footerLeft'>
<span>Copyright © 2024 <b>Trix</b>. All Rights Reserved.</span>
</div>
<div className='footerright'>
<button className="go-to-top">
  Go to Top <span className="arrow-up">↑</span>
</button>
</div>
</div>
    </div>
  );
};

export default Main;
