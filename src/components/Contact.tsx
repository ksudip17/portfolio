import React, { useState } from "react";
import Section from "./ui/Section";
import Button from "./ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "sudip_khatiwada", // Replace this
        "template_mv4jlvk", // Replace this
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "pPwm8rkHOcknWckRZ" // Replace this
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSubmitSuccess(false), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          alert("Message failed to send: " + error.text);
        }
      );
  };

  return (
    <Section id="contact" className="bg-secondary-50 dark:bg-secondary-950">
      <div className="container mx-auto">
        <h2 className="text-3xl font-display font-bold text-center mb-4 text-secondary-900 dark:text-white">
          Get in Touch
        </h2>
        <div className="w-20 h-1 bg-accent-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed">
                Have a project in mind or want to collaborate? Feel free to
                reach out through the form or any of the contact methods listed
                below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-secondary-900 dark:text-white font-medium">
                    Location
                  </h4>
                  <p className="text-secondary-700 dark:text-secondary-300">
                    Dhangadhi, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-secondary-900 dark:text-white font-medium">
                    Email
                  </h4>
                  <p className="text-secondary-700 dark:text-secondary-300">
                    ksudip121@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full text-primary-600 dark:text-primary-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-secondary-900 dark:text-white font-medium">
                    Phone
                  </h4>
                  <p className="text-secondary-700 dark:text-secondary-300">
                    (977) 9767692482
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-secondary-800 rounded-xl shadow-sm dark:shadow-secondary-900/50 p-6">
            {submitSuccess ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-2">Message Sent!</h3>
                <p>
                  Thank you for contacting me. I'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white dark:bg-secondary-900 border border-secondary-300 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-colors dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white dark:bg-secondary-900 border border-secondary-300 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-colors dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-secondary-900 border border-secondary-300 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-colors dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-white dark:bg-secondary-900 border border-secondary-300 dark:border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 outline-none transition-colors resize-none dark:text-white"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
