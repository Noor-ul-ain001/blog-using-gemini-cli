const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-background to-secondary/40"
    >
      {/* Decorative Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_70%)] pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-background/70 backdrop-blur-md border border-border shadow-xl rounded-2xl p-8 sm:p-10">
          <h2 className="text-4xl font-merienda font-extrabold text-center text-foreground">
            Contact Us
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Have questions or ideas? We’d love to hear from you.  
            Fill out the form below and we’ll get back to you soon.
          </p>

          <form className="mt-10 space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-muted-foreground"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-muted-foreground"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-primary/50 focus:outline-none transition-all placeholder:text-muted-foreground"
                placeholder="Your Message"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-gradient-to-r from-primary to-purple-500 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
