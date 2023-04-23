import iconlogo from './images/icon-walliserguide.svg';
import textlogo from './images/text-walliserguide.svg';

function App() {
  return (
    <div className="wg-social">
      <header class="section section--header">
        <div class="container">
          <img src={iconlogo} className="logo logo--icon" alt="logo" />
          <img src={textlogo} className="logo logo--text" alt="logo" />
          <p> Dein Guide fürs Wallis. </p>
          <p> Your Valais Guide. </p>
        </div>
      </header>

    <main>
      <section class="section section--more">
        <div class="content">
          <div class="content__wavy"></div>
          <div class="content__main">
            <div class="container">
              <p>Entdecke mehr / Discover more</p>
              <div className='socialLinks'>
                {/* <a className="btn btn--primary" href="https://www.walliserguide.ch" target="_blank" rel="noopener noreferrer">
                  <span className='btn__icon btn__icon--link'></span>Website
                </a> */}
                <a className="btn btn--primary" href="https://www.youtube.com/channel/UC0X0jME-wEQ3DwOZMEAZSrg" target="_blank" rel="noopener noreferrer">
                  <span className='btn__icon btn__icon--youtube'></span>Youtube
                </a>
                <a className="btn btn--primary" href="https://www.tiktok.com/@walliserguide" target="_blank" rel="noopener noreferrer">
                  <span className='btn__icon btn__icon--tiktok'></span>Tiktok
                </a>
                <a className="btn btn--primary" href="https://www.facebook.com/people/Walliserguide/100092317773385/" target="_blank" rel="noopener noreferrer">
                  <span className='btn__icon btn__icon--facebook'></span>Facebook
                </a>
                <a className="btn btn--primary" href="https://www.instagram.com/walliserguide/" target="_blank" rel="noopener noreferrer">
                  <span className='btn__icon btn__icon--instagram'></span>Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>


    </div>
  );
}

export default App;
