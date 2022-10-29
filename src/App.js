import profile_img_default from './assets/img/profile_img_default.svg';
// import profile_img_focus from './assets/img/profile_img_focus.svg';
// import profile_img_hover from './assets/img/profile_img_hover.svg';
import github_icon from './assets/img/Icon.svg';
import slack_icon from './assets/img/slack.svg';
import zuri_icon from './assets/img/Vector.svg';
import hng_icon from './assets/img/Footer text.svg';
import i4g_icon from './assets/img/I4G.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* profile image section */}
     <section id='profile__section'>
      <img src={profile_img_default} alt="profile__img" id='twitter' onClick={() => console.log('clicked')}/>
      <p id="twitter">team_DKs</p>
      <p id="slack">Khingz</p>
     </section>

     {/* link section */}
     <section id='link__section'>
      <a href="https://twitter.com/team_Dks" className="link__btn">Twitter Link</a>
      <a href="https://training.zuri.team/" id="btn__zuri" className="link__btn" >Books</a>
      <a href="http://books.zuri.team" id="books" className="link__btn" title='Hello world'>Find Books</a>
      <a href=" https://books.zuri.team/python-for-beginners?ref_id=Khingz" id="book__python" className="link__btn">Book Python</a>
      <a href="https://background.zuri.team" id="pitch" className="link__btn">Pitch</a>
      <a href=" https://books.zuri.team/design-rules" id="book__design" className="link__btn">Books</a>
     </section>

     {/* social section */}
     <section id='social__section' >
      <img src={slack_icon} alt="github__icon" />
      <img src={github_icon} alt="slack__icon" />
     </section>

     {/* footer section */}
     <footer>
      <img src={zuri_icon} alt="zuri__icon" />
      <img src={hng_icon} alt="hng__icon" />
      <img src={i4g_icon} alt="I4G__icon" />
     </footer>
    </div>
  );
}

export default App;
