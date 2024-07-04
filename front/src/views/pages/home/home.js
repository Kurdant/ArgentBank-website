import { React } from 'react';
import './home.css'
import Header from '../../composants/header/header.js';
import CardHome from '../../composants/cardHome/cardHome.js';
import IconChat from '../../../assets/icon-chat.png'
import IconMoney from '../../../assets/icon-money.png'
import IconSecurity from '../../../assets/icon-security.png'
import Footer from '../../composants/footer/footer.js';


function Home() {
  const CardHomeTableau = [
    {
      title: "You are our #1 priority",
      texte: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      img: IconChat,
      alt: "iconChat"
    },
    {
      title: "More savings means higher rates",
      texte: "The more you save with us, the higher your interest rate will be!",
      img: IconMoney,
      alt: "iconMoney"
    },
    {
      title: "Security you can trust",
      texte: "We use top of the line encryption to make sure your data and money is always safe.",
      img: IconSecurity,
      alt: "iconSecurity"
    }
  ];

  return (
    <div className="App home">
      <Header></Header>
      <div id='homeBanner'>
        <div className='homeBannerBlock'>
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </div>
      </div>
      <div className='CardHomeCss'>
        {CardHomeTableau.map((card, index) => (
          <CardHome 
            key={index} 
            title={card.title} 
            texte={card.texte} 
            img={card.img} 
            alt={card.alt} 
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;