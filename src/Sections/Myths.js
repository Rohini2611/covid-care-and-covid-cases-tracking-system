import Cart from "../Components/Cart";

let factObj = {
  "#MYTH: The COVID-19 vaccine is unsafe because it was developed so quickly.":
    "The authorized vaccines are proven safe and effective. Although they were developed in record time, they have gone through the same rigorous Food and Drug Administration process as other vaccines, meeting all safety standards. No steps were skipped.",

  "#MYTH: The COVID-19 vaccine will alter my DNA":
    "The first vaccines granted emergency use authorization contain messenger RNA (mRNA), which instructs cells to make the “spike protein” found on the new coronavirus. When the immune system recognizes this protein, it builds an immune response by creating antibodies — teaching the body how to protect against future infection. The mRNA never enters the nucleus of the cell, which is where our DNA (genetic material) is kept.",

  "#MYTH: The COVID-19 vaccine has severe side effects such as allergic reactions":
    " Some participants in the vaccine clinical trials did report side effects similar to those experienced with other vaccines, including muscle pain, chills and headache. And although extremely rare, people can have severe allergic reactions to ingredients used in a vaccine.",

  "#MYTH: The COVID-19 vaccine causes infertility in women":
    "Misinformation on social media suggests the vaccine trains the body to attack syncytin-1, a protein in the placenta, which could lead to infertility in women. The truth is, there’s an amino acid sequence shared between the spike protein and a placental protein; however, experts say it’s too short to trigger an immune response and therefore doesn’t affect fertility.",

  "#MYTH:  I’ve already been diagnosed with COVID-19, so I don’t need to receive the vaccine":
    "If you have already had COVID-19, there’s evidence that you can still benefit from the vaccine. At this time, experts don’t know how long someone is protected from getting sick again after recovering from COVID-19. The immunity someone gains from having an infection, called natural immunity, varies from person to person.",

  "#MYTH: Certain blood types have less severe COVID-19 infections, so getting a vaccine isn’t necessary":
    "Research has shown there is no reason to believe being a certain blood type will lead to increased severity of COVID-19. By choosing to get vaccinated, you are protecting not only yourself and your family but your community as well.",

  "#MYTH: You can get COVID-19 from the vaccine":
    "You cannot get COVID-19 from the vaccine because it doesn’t contain the live virus.",

  "#MYTH: Once I receive the COVID-19 vaccine, I no longer need to wear a mask":
    "Masking, handwashing and physical distancing remain necessary in public until a sufficient number of people are immune. Fully vaccinated people can meet with other fully vaccinated people without wearing masks.",
};

const Myths = () => {
  return (
    <Cart>
      <section id="sect-facts">
        <h2 id="facts-title">COVID-19 MYTHS Vs FACTS</h2>
        <div id="facts-img-container">
          <div id="facts-container">
            {Object.keys(factObj).map((key, name) => {
              return (
                <div className="fact-card">
                  <div class="fact-title">{key}</div>
                  <div class="fact-body">{factObj[key]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Cart>
  );
};

export default Myths;
