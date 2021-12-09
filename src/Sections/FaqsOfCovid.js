import Cart from "../Components/Cart";

const FaqsOfCovid = () => {
  return (
    <Cart>
      <h2 id="FAQ-title">COVID-19 FAQs</h2>
      <section id="sect-FAQs">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What is COVID-19?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                COVID-19, otherwise known as coronavirus disease 2019, is a new
                infectious disease caused by a previously unknown virus called
                SARS-CoV-2. The virus is part of a family of coronaviruses which
                are responsible for lots of different illnesses from the common
                cold to the flu. But this new strain can be more severe in some
                people.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                When did COVID-19 start?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                The virus was discovered in Wuhan, China in December 2019 and
                has since spread around the world. It was declared a pandemic by
                the World Health Organization in March 2020.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What happens in serious cases of COVID-19?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                In some cases, people will become more seriously ill with
                COVID-19. Symptoms of severe COVID-19 include shortness of
                breath, loss of speech or mobility, confusion, chest pain or a
                high temperature. If you experience any of these symptoms, it’s
                important to seek medical care straight away. In critical cases,
                COVID-19 can lead to death.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Who is more vulnerable to COVID-19?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Anyone can get COVID-19 and become seriously ill. The likelihood
                becoming severely ill is higher for people over 60 and those
                with certain underlying health issues, including high blood
                pressure, heart or lung problems, diabetes, obesity or cancer.
                People with a weakened immune system – for example if they are
                having chemotherapy treatment for cancer, or have a low CD4
                count as a result of HIV – are also at a higher risk of serious
                illness.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Are there long-term effects of COVID-19?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Some people have reported experiencing continued symptoms after
                having COVID-19, such as fatigue, breathing problems and
                neurological problems. This includes people with less severe
                cases of COVID-19, as well as those who have needed hospital
                care. Research is currently underway to better understand how
                many people experience long-term effects of COVID-19, and the
                nature of these symptoms.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Cart>
  );
};
export default FaqsOfCovid;
