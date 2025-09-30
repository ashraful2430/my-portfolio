import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

const ContactMe = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (sending) return;

    const fd = new FormData(form.current);
    const name = fd.get("form_name")?.trim();
    const email = fd.get("form_email")?.trim();
    const message = fd.get("message")?.trim();

    if (!name || !email || !message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setSending(true);
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_yznlcil",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_z3kzpvs",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "iIh2-Vd6UoSmItl3-"
      );

      if (result?.status === 200) {
        toast.success("Message sent successfully 🎉");
        form.current.reset();
      } else {
        toast.error("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again later.");
    } finally {
      setSending(false);
    }
  };

 return (
    <div id="contact">
      <h3 className="text-4xl text-center mt-10 font-semibold">
        <span className="text-[#66B888]">Contact</span> Me
      </h3>

      <section className="bg-white">
        {/* Center group + set a nice max width */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Center vertically (optional) + make two equal columns on lg */}
          <div className="min-h-[70vh] grid gap-10 items-center lg:grid-cols-2">
            {/* Left: Contact info */}
            <div className="w-full rounded-lg bg-white p-8 shadow-lg">
              <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
                Contact Me For <br /> More Info
              </h1>

              <div className="mt-6 space-y-6">
                {/* address */}
                <p className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500" viewBox="0 0 24 24" fill="none">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Uttara, Dhaka, Bangladesh</span>
                </p>

                {/* phone */}
                <p className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500" viewBox="0 0 24 24" fill="none">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28l1.498 4.493-2.257 1.13a11.04 11.04 0 005.516 5.516l1.13-2.257 4.493 1.498V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+8801735407128" className="text-gray-700">+880 1735-407128</a>
                </p>

                {/* email */}
                <p className="flex items-start">
                  <svg className="w-6 h-6 mr-3 text-blue-500" viewBox="0 0 24 24" fill="none">
                    <path stroke="currentColor" strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <Link to="mailto:ashrafulislamashik960@gmail.com" className="text-gray-700">
                    ashrafulislamashik960@gmail.com
                  </Link>
                </p>
              </div>

              {/* socials */}
              <div className="mt-8">
                <h3 className="text-gray-600">Or reach me on</h3>
                <div className="flex mt-4 gap-4">
                  <a href="https://www.linkedin.com/in/ashraful-islam-ashik-7085a22a0" target="_blank" rel="noreferrer"
                     className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.2 9.6H4V19.2h3.2V9.6ZM5.6 7.2A1.6 1.6 0 1 0 5.6 4a1.6 1.6 0 0 0 0 3.2ZM20 19.2h-3.2v-5.6c0-.424-.169-.831-.469-1.131a1.6 1.6 0 0 0-2.262 0c-.3.3-.469.707-.469 1.131v5.6H10.4V9.6h3.2v1.157c.74-.882 1.834-1.357 2.96-1.325 1.126.032 2.19.56 2.89 1.45.55.684.84 1.541.84 2.418v5.9Z" />
                    </svg>
                  </a>
                  <a href="https://github.com/ashraful2430" target="_blank" rel="noreferrer"
                     className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="GitHub">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.11-.76.08-.75.08-.75 1.22.09 1.87 1.26 1.87 1.26 1.09 1.87 2.86 1.33 3.55 1.02.11-.8.43-1.33.77-1.64-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.77.84 1.23 1.91 1.23 3.23 0 4.64-2.81 5.67-5.49 5.97.44.38.83 1.12.83 2.26v3.35c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/ashrafulislam.ashik.5473" target="_blank" rel="noreferrer"
                     className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.222 20V13.778H16.778L17.667 10.222H13.222V8.444c0-.489.4-.889.889-.889h3.556V4H14.11c-2.06 0-3.711 1.651-3.711 3.711v2.511H7v3.556h3.4V20h2.822Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full">
              <div className="w-full px-8 py-10 bg-white rounded-lg shadow-2xl">
                <h1 className="text-lg font-medium text-gray-700">
                  What do you want to ask
                </h1>

                {/* your existing form/handlers */}
                <form ref={form} onSubmit={sendEmail} className="mt-6" noValidate>
                  {/* name */}
                  <div>
                    <label htmlFor="form_name" className="block mb-2 text-sm text-gray-600">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form_name"
                      type="text"
                      name="form_name"
                      placeholder="Your full name"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  {/* email */}
                  <div className="mt-6">
                    <label htmlFor="form_email" className="block mb-2 text-sm text-gray-600">
                      Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form_email"
                      type="email"
                      name="form_email"
                      placeholder="Your email address"
                      required
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  {/* message */}
                  <div className="mt-6">
                    <label htmlFor="message" className="block mb-2 text-sm text-gray-600">
                      Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="How can I help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className={`w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white rounded-md focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 transition-colors ${
                      sending ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-400"
                    }`}
                    aria-busy={sending}
                  >
                    {sending ? "Sending..." : "Get In Touch"}
                  </button>
                </form>
              </div>
            </div>
            {/* End form */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;


