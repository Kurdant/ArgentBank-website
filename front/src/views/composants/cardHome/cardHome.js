import '../cardHome/cardHome.css'

export function CardHome(props) {
    return(
        <div class="feature-item">
          <img
            src={props.img}
            alt={props.alt}
            class="feature-icon"
          />
          <h3 class="feature-item-title">{props.title}</h3>
          <p>
          {props.texte}
          </p>
        </div>
    );
}

export default CardHome;