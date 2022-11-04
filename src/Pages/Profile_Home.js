import React, { useState } from 'react';
import profile_img_default from '../assets/img/profile_img_default.svg';
import profile_img_hover from '../assets/img/profile_img_hover.svg';
import github_icon from '../assets/img/Icon.svg';
import slack_icon from '../assets/img/slack.svg';
import share_icon from '../assets/img/share_default.svg'
import share_hover_icon from '../assets/img/share_hover.svg';
import share_mobile_icon from '../assets/img/more_mobile.svg';
import share_mobile_hover from '../assets/img/more_mobile_focus.svg';
import { Link } from 'react-router-dom';

const Profile_Home = () => {
    const [p_img, setP_img] = useState(true);
    const [share, setShare] = useState(true);
  return (
    <div className="home__container">
     {/* share button */}
     <div className='share__container'>
      <img src={share ? share_icon : share_hover_icon} alt="share__btn" className='share__btn share__desktop'  onMouseEnter={() => setShare(false)} onMouseLeave={() => setShare(true)}/>

      <img src={share ? share_mobile_icon : share_mobile_hover} alt="share__btn" className='share__btn share__mobile'  onMouseEnter={() => setShare(false)} onMouseLeave={() => setShare(true)} />
     </div>
   
      {/* profile image section */}
     <section id='profile__section'>
      <img src={p_img ? profile_img_default : profile_img_hover} alt="profile__img" id='twitter' onMouseEnter={() => setP_img(false)} onMouseLeave={() => setP_img(true)}/>
      <p id="twitter">team_DKs</p>
      <p id="slack">Khingz</p>
     </section>

     {/* link section */}
     <section id='link__section'>
      <a href="https://twitter.com/team_Dks" className="link__btn">Twitter Link</a>
      <a href="https://training.zuri.team/" id="btn__zuri" className="link__btn" >Zuri Team</a>
      <a href="http://books.zuri.team" id="books" className="link__btn" title='This is where you find books about design and coding'>Zuri Books</a>
      <a href=" https://books.zuri.team/python-for-beginners?ref_id=Khingz" id="book__python" className="link__btn" title='Get best selling python books for beginners and professionals'>Python Books</a>
      <a href="https://background.zuri.team" id="pitch" className="link__btn" title='Check proficiency and efficeincy of coders'>Background Check For Coders</a>
      <a href=" https://books.zuri.team/design-rules" id="book__design" className="link__btn" title='Get free design books for beginers and professionals from zuri team'>Design Books</a>
      <Link to='/contact' id='contact'>Contact Me</Link>
     </section>

     {/* social section */}
     <section id='social__section' >
      <img src={slack_icon} alt="github__icon" />
      <img src={github_icon} alt="slack__icon" />
     </section>

    </div>
  )
}

export default Profile_Home