export const Form = () => {
  return (
    <section className="section-form">
      <div className="section-form__flex">
        <form className="section-form__form">
          <h1 class="section-form__title">Contact me</h1>

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
