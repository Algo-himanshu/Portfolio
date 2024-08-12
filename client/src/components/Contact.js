import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button clicked!!");
    let response;

    setButtonDisabled(true);

    try {
      response = await axios.post(
        "http://localhost:8000/api/contact",
        formData
      );
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch ({ response }) {
      if (response.status === 400) {
        toast.error(response.data);
      } else {
        toast.error("Failed to send email");
      }
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Love my work? Let's Collab.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <i className="bi bi-geo-alt flex-shrink-0" />
                <div>
                  <h3>Address</h3>
                  <p>Raebareli, Uttar Pradesh</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <i className="bi bi-telephone flex-shrink-0" />
                <div>
                  <h3>Call Us</h3>
                  <p>+91 7456020565</p>
                </div>
              </div>

              <div
                className="info-item d-flex"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <i className="bi bi-envelope flex-shrink-0" />
                <div>
                  <h3>Email Us</h3>
                  <p>Himanshut909@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay={200}
              onSubmit={handleSubmit}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    id="message-field"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isButtonDisabled}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
