import img1 from "../../assets/img-form.svg";

export const Form = () => {
    return (
        <section className="section-form">
            <div className="flex">
                {/* <figure className="form_img">
                    <img src={img1} alt="" />
                </figure> */}
                <form className="form">
                    <h1 className="form__title">Contact me</h1>

                    <label htmlFor="">Enter Your Name: </label>
                    <input type="text" required />

                    <label htmlFor="">Enter Your Email: </label>
                    <input type="email" required />

                    <label htmlFor="">Text message: </label>
                    <textarea name="" id="" cols="20" rows="7"></textarea>

                    <button className="form__btn">Send message</button>
                </form>
            </div>
        </section>
    )
}