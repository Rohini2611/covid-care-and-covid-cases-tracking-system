import Cart from "../Components/Cart";

import dotenv from "dotenv";

const CovidDiet = () => {

  dotenv.config();
  var BLOB_KEY = process.env.REACT_APP_BLOB_KEY;

  var breakfast = `https://${BLOB_KEY}.blob.core.windows.net/images/breakfast.jpg`;
  var lunch = `https://${BLOB_KEY}.blob.core.windows.net/images/lunch.jpg`;
  var evening = `https://${BLOB_KEY}.blob.core.windows.net/images/evening.jpg`;
  var dinner = `https://${BLOB_KEY}.blob.core.windows.net/images/dinner.jpg`;

  return (
    <Cart>
      <section id="sect-diet">
        <h2>Diet For Covid-19 Positive</h2>
        <p>
          The main diet focus for COVID patients is to consume foods that would
          help rebuild muscle, immunity and energy levels. Whole grains like
          ragi, oats or amaranth are rich sources of complex carbohydrates.
          Chicken, fish, eggs, paneer, soya, nuts and seeds are some good
          sources of protein. Healthy fats like walnuts, almonds, olive oil,
          mustard oil are recommended during these days. To boost one’s
          immunity, one should take turmeric milk once a day.
        </p>
        <p>
          Five serving of all coloured fruits and vegetables are a must to get
          adequate vitamins and minerals when you are COVID positive. You can
          have small amounts of dark chocolate with at least 70% cocoa which can
          lift your mood, get rid of anxiety and will also boost your immunity.
        </p>
        <h2>Sample Diet</h2>
        <div id="food">
          <div class="card">
            <img src={breakfast} class="card-img-top" alt="..." />
            <div class="card-body">
              <h2>Breakfast</h2>
              <p class="card-text">
                Veg Poha / Chila/ Veg upma/ Namkeen veg seviya/ idli + 2 egg
                whites/ Golden milk with haldi and ginger powder
              </p>
            </div>
          </div>
          <div class="card">
            <img src={lunch} class="card-img-top" alt="..." />
            <div class="card-body">
              <h2>Lunch</h2>
              <p class="card-text">
                Amaranth / ragi or multi grain flour Chapati/ Rice/ Veg Pulao/
                khicadi/ dal , green vegs , Curd Salad ( carrot and cucumber)
              </p>
            </div>
          </div>
          <div class="card">
            <img src={evening} class="card-img-top" alt="..." />
            <div class="card-body">
              <h2>Evening</h2>
              <p class="card-text">
                Ginger tea/ veg or chicken or immunity soup/ sprouts chaat can
                be taken in the evening
              </p>
            </div>
          </div>
          <div class="card">
            <img src={dinner} class="card-img-top" alt="..." />
            <div class="card-body">
              <h2>Dinner</h2>
              <p class="card-text">
                Amaranth/ ragi/ multigrain flour Chapati/ soya beans/ paneer/
                chicken or green veggies Salad ( carrot and cucumber)
              </p>
            </div>
          </div>
        </div>
      </section>
    </Cart>
  );
};

export default CovidDiet;
