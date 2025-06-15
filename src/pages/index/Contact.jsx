import Layout from "../../layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-[#ecf8f3] mt-16 py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-medium text-center">CONTACT US</h1>
          <p className="text-center text-muted-foreground mt-4">
            Have questions or inquiries? We're here to help!
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container-custom mx-52">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="mb-8 text-muted-foreground">
                Have questions about our products, wholesale inquiries, or just want to say hello? Fill out the form and we'll get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-sage-100 rounded-full flex items-center justify-center text-primary bg-[#d5f0e5]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-muted-foreground">123 Herbal Lane, Green Valley, CA 94123</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-sage-100 rounded-full flex items-center justify-center text-primary bg-[#d5f0e5]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">info@naturesoap.example</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-sage-100 rounded-full flex items-center justify-center text-primary bg-[#d5f0e5]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-medium">Name</label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded p-2"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-medium">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full border border-gray-300 rounded p-2"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    className="w-full border border-gray-300 rounded p-2"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-[#2D6E53] text-white py-2 rounded">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
          <div className="text-center mb-12 space-y-2">
            <h1 className="text-4xl font-medium">Frequently Asked Questions</h1>
            <p>Find answers to commonly asked questions about our products.</p>
          </div>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">Are your soaps suitable for sensitive skin?</h3>
            <p className="text-muted-foreground">Yes! Our soaps are made with gentle, natural ingredients that are suitable for most skin types, including sensitive skin. Our Oatmeal & Honey soap is especially recommended for sensitive skin.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">How long do your soaps last?</h3>
            <p className="text-muted-foreground">With proper care (using a soap dish that allows drainage), our soaps typically last 4-6 weeks with daily use. To extend the life of your soap, keep it dry between uses.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">Do you offer wholesale options?</h3>
            <p className="text-muted-foreground">Yes, we offer wholesale options for retailers. Please contact us through our contact form or email for more information about our wholesale program.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-2">Are your products cruelty-free?</h3>
            <p className="text-muted-foreground">Absolutely! We never test our products on animals and only source ingredients from suppliers who share our commitment to cruelty-free practices.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;