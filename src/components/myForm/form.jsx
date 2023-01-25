export const Form = () => {
  let title = "<Contact>";
  return (
    <section className="section-form" id="contact">
      <div className="section-form__flex">
        <form className="section-form__form">
          <div class="section-form__title">
            <h1>{title}</h1>
          </div>

          <label htmlFor="">Enter Your Name: </label>
          <input type="text" required />

          <label htmlFor="">Enter Your Email: </label>
          <input type="email" required />

          <label htmlFor="">Text message: </label>
          <textarea name="" id="" cols="20" rows="7"></textarea>

          <button className="section-form__btn">Send message</button>
        </form>
      </div>
    </section>
  );
};
