import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [text, setText] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=" + email + "&su=" + text + "&body=" + message,
      "_blank"
    );
    setEmail("");
    setMessage("");
    setText("");
  };

  return (
    <div id="contact" className="w-full bg-[#111111] py-16 px-4">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div data-aos="fade-up" className="section-heading mb-10">
          <h3>Contact</h3>
          <span className="divider"></span>
          <p className="text-gray-400 font-medium text-sm mt-1">
            Got a project in mind? Let's build it together.
          </p>
        </div>

        <div className="flex items-start gap-10 md:flex-col sm:gap-6">
          {/* Left CTA */}
          <div data-aos="fade-right" className="flex-1 flex flex-col gap-5 justify-center md:flex-row md:items-center sm:flex-col">
            <div>
              <h2 className="text-4xl font-black text-white leading-tight sm:text-2xl">
                Let's Work<br />
                <span className="gradient-text">Together</span>
              </h2>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-sm">
                Whether it's a product, a freelance project, or just a conversation — I'm always open to connecting.
              </p>
            </div>
            <a
              href="mailto:siddhant.rbl2016@gmail.com"
              className="flex items-center gap-2 w-fit bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-5 py-2.5 rounded-xl font-bold hover:bg-yellow-400 hover:text-black transition-all text-sm"
            >
              Say Hello <BsArrowRight />
            </a>
          </div>

          {/* Right Form */}
          <div className="flex-1 w-full" data-aos="fade-left">
            <form
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                className="bg-white/[0.06] border border-white/10 text-white placeholder-gray-500 px-4 py-3 rounded-xl w-full text-sm focus:outline-none focus:border-yellow-400/60 transition-all"
                type="email"
                placeholder="Your Email (e.g. example@email.com)"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
              <input
                className="bg-white/[0.06] border border-white/10 text-white placeholder-gray-500 px-4 py-3 rounded-xl w-full text-sm focus:outline-none focus:border-yellow-400/60 transition-all"
                type="text"
                placeholder="Subject (e.g. Project Collaboration)"
                onChange={(e) => setText(e.target.value)}
                required
                value={text}
              />
              <textarea
                className="bg-white/[0.06] border border-white/10 text-white placeholder-gray-500 px-4 py-3 rounded-xl w-full text-sm focus:outline-none focus:border-yellow-400/60 transition-all resize-none"
                rows="5"
                placeholder="Your message..."
                onChange={(e) => setMessage(e.target.value)}
                required
                value={message}
              />
              <button
                className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all text-sm"
                type="submit"
              >
                <span>Send Message</span>
                <RiSendPlaneFill />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
