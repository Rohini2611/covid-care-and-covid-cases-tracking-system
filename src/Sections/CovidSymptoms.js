import Cart from "../Components/Cart";

const CovidSymptoms = () => {
  return (
    <Cart>
      <section id="sect-symptoms">
        <h2>SYMPTOMS OF COVID-19</h2>
        <div id="symptoms">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Most Common Symptoms</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Fever</li>
              <li class="list-group-item">Dry Cough</li>
              <li class="list-group-item">Tiredness</li>
            </ul>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Less Common Symptoms</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Rash on skin</li>
              <li class="list-group-item">Loss of taste or smell</li>
              <li class="list-group-item">Sore throat</li>
            </ul>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Severe Symptoms</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Shortness of breath</li>
              <li class="list-group-item">Chest pain</li>
              <li class="list-group-item">Difficulty in breathing</li>
            </ul>
          </div>
        </div>
      </section>
    </Cart>
  );
};

export default CovidSymptoms;
