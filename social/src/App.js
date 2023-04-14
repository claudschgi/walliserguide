import iconlogo from './images/icon-walliserguide.svg';
import textlogo from './images/text-walliserguide.svg';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={iconlogo} className="logo logo--icon" alt="logo" />
        <img src={textlogo} className="logo logo--text" alt="logo" />
        <p> Dein Guide fürs Wallis. </p>
        <p> Your Valais Guide. </p>
      </header>
      <main>
        <div class="content">
          <div class="content__wavy"></div>
          <div class="content__main">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
