import Cart from "../Components/Cart";

const Vaccine = () => {
  return (
    <Cart>
      <section id="sect-vaccines">
        <h3>WHAT YOU NEED TO KNOW ABOUT COVID VACCINE</h3>
        <div id="content">
          <p>
            COVID-19 vaccines are safe and effective. You may have side effects
            after vaccination. These are normal and should go away in a few
            days. It typically takes two weeks after vaccination for the body to
            build protection (immunity) against the virus that causes COVID-19.
            You are not fully vaccinated until 2 weeks after the 2nd dose of a
            two-dose vaccine or two weeks after a one-dose vaccine.
          </p>
          <p>
            Studies show that COVID-19 vaccines are effective at keeping you
            from getting COVID-19. Getting a COVID-19 vaccine will also help
            keep you from getting seriously ill even if you do get COVID-19.
            COVID-19 vaccination is an important tool to bring you closer to
            enjoying the activities you have missed.
          </p>
          <p>
            COVID-19 vaccines teach our immune systems how to recognize and
            fight the virus that causes COVID-19. It typically takes 2 weeks
            after vaccination for the body to build protection (immunity)
            against the virus that causes COVID-19.
          </p>
        </div>
        <button id="vaccine-btn">
          <a href="https://www.cowin.gov.in/home">GET VACCINATED</a>
        </button>
      </section>
    </Cart>
  );
};

export default Vaccine;
