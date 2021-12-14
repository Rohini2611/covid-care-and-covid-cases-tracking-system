import Cart from "../Components/Cart";
import dotenv from "dotenv";

const SpreadOfCovid = () => {
  dotenv.config();
  var BLOB_KEY = process.env.REACT_APP_BLOB_KEY;

  var coughing = `https://${BLOB_KEY}.blob.core.windows.net/images/coughing.svg`;
  var hand_shake = `https://${BLOB_KEY}.blob.core.windows.net/images/hand_shake.svg`;
  var touching_surface = `https://${BLOB_KEY}.blob.core.windows.net/images/touching_surface.svg`;

  return (
    <Cart>
      <section id="sect-awareness">
        <h2>HOW DOES COVID-19 SPREAD?</h2>
        <div id="cards-container-awareness">
          <div class="card">
            <img src={coughing} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>Coughing/Sneezing</h4>
              <p class="card-text">
                The virus is transmitted through direct contact with respiratory
                droplets of an infected person
              </p>
            </div>
          </div>
          <div class="card">
            <img src={hand_shake} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>Close Contact</h4>
              <p class="card-text">
                Direct skin-to-skin contact and then touching face eg.eyes, nose
                increases likelihood of infection
              </p>
            </div>
          </div>
          <div class="card">
            <img src={touching_surface} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>Touching Infected Surfaces</h4>
              <p class="card-text">
                Individuals can also be infected from and touching surfaces
                contaminated with the virus
              </p>
            </div>
          </div>
        </div>
      </section>
    </Cart>
  );
};

export default SpreadOfCovid;
