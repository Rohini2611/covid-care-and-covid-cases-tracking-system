import Cart from "../Components/Cart";

import dotenv from "dotenv";

const Precautions = () => {

  dotenv.config();
  var BLOB_KEY = process.env.REACT_APP_BLOB_KEY;

  var wash_hands = `https://${BLOB_KEY}.blob.core.windows.net/images/wash_hands.svg`;
  var wear_mask = `https://${BLOB_KEY}.blob.core.windows.net/images/wear_mask.svg`;
  var keep_distance = `https://${BLOB_KEY}.blob.core.windows.net/images/keep_distance.svg`;
  var medical = `https://${BLOB_KEY}.blob.core.windows.net/images/medical.svg`;
  var stay_home = `https://${BLOB_KEY}.blob.core.windows.net/images/stay_home.svg`;
  var cover = `https://${BLOB_KEY}.blob.core.windows.net/images/cover.svg`;

  return (
    <Cart>
      <section id="sect-precautions">
        <h2>STOPPING THE SPREAD STARTS WITH YOU</h2>
        <p>
          Protect yourself and others around you by knowing the facts and taking
          appropriate precautions
        </p>
        <div id="cards-container-precautions">
          <div class="card">
            <img src={wash_hands} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>Wash Hands</h4>
              <p class="card-text">
                Clean your hands often. Use soap and water, or an alcohol-based
                hand rub
              </p>
            </div>
          </div>
          <div class="card ">
            <img src={wear_mask} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>Wear Mask</h4>
              <p class="card-text">
                Wear a mask when physical distancing is not possible
              </p>
            </div>
          </div>
          <div class="card ">
            <img src={keep_distance} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>Maintain Distance</h4>
              <p class="card-text">
                Maintain a safe distance from anyone who is coughing or
                sneezing.
              </p>
            </div>
          </div>
          <div class="card ">
            <img src={medical} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>Medical Attention</h4>
              <p class="card-text">
                If you have a fever, cough and difficulty breathing, seek
                medical attention
              </p>
            </div>
          </div>
          <div class="card dark">
            <img src={stay_home} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>Stay Home</h4>
              <p class="card-text">Stay home if you feel unwell</p>
            </div>
          </div>
          <div class="card">
            <img src={cover} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4>Cover Your Nose</h4>
              <p class="card-text">
                Cover your nose and mouth with your bent elbow or a tissue when
                you cough or sneeze
              </p>
            </div>
          </div>
        </div>
      </section>
    </Cart>
  );
};
export default Precautions;
