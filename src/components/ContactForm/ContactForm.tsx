import { ReactComponent as CrossSVG } from "../../assets/svgs/Union.svg";
import { ActionButton } from "../ActionButton";
import { GOOGLE_FORM_CONFIG } from "../../config/googleFormConfig";
import { useContactForm } from "../../hooks/useContactForm";
import "./ContactForm.scss";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouMessage = () => {
  return (
    <div className="contact-form__content__thank-you">
      <div className="contact-form__content__title">Thank You!</div>
      <div className="contact-form__content__sub-title">
        Your submission has been received. <br />
        We will contact you via email for further consideration.
      </div>
    </div>
  );
};

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const {
    formData,
    isSubmitted,
    isSubmitting,
    errors,
    formErrorMessage,
    handleChange,
    handleSubmit,
  } = useContactForm(GOOGLE_FORM_CONFIG.URL, GOOGLE_FORM_CONFIG.FIELD_IDS);

  if (!isOpen) return null;

  return (
    <div className={`contact-form ${isOpen ? "open" : ""}`}>
      <div className="contact-form__content">
        <button
          className="contact-form__content__close-button"
          onClick={onClose}
        >
          <CrossSVG className="contact-form__content__close-button__svg" />
        </button>

        {isSubmitted ? (
          <ThankYouMessage />
        ) : (
          <>
            <div className="contact-form__content__title">Contact Us.</div>
            <div className="contact-form__content__sub-title">
              After submitting this form, we will contact you <br />
              via email for further consideration.
            </div>
            <form className="contact-form__content__form-container">
              <div className="contact-form__content__form-container__united">
                <div className="input">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={errors.firstName ? "invalid" : ""}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="input">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={errors.lastName ? "invalid" : ""}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="input">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={errors.email ? "invalid" : ""}
                  disabled={isSubmitting}
                />
              </div>

              <div className="input last-input">
                <label>Tell Us About Your Idea</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={errors.message ? "invalid" : ""}
                  disabled={isSubmitting}
                />
              </div>

              {formErrorMessage && (
                <div className="form-error-message">{formErrorMessage}</div>
              )}

              <div className="button">
                <ActionButton
                  variant="form"
                  translationKey={"Submit"}
                  onClick={handleSubmit}
                  hideIcon
                />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
