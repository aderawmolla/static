export default function ContactPage() {
  return (
    <div className="pt-16 pb-16 bg-primary-light1 lg:pt-32">
      <section id="contact" className="text-primary-blackfont-mono ">
        <div className="container px-5 py-5 mx-auto">
        <div className="mx-auto text-primary-black mb-12 pt-12 lg:pt-20 max-w-[510px] text-center lg:mb-20 font-mono">
          <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
            Get in touch with
          </h2>
          <p className="text-base text-body-color">
            {/* There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form. */}
          </p>
        </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto justify-center lg:justify-between font-mono py-8 px-[5%]">
        <div className="w-full ">
          <div className="flex flex-col items-center justify-between p-4 rounded-md">
            <div className="border-8 rounded-full border-gray-dark3">
              <img className="w-20" src="/gifs/location.gif" alt="" />
            </div>
            <div>
              <h3 className="font-bold text-primary-black">Address</h3>
              <p className="text-primary-black">
                Kera Gofa Gabriel, Mauritus Street. Addis Ababa, ETHIOPIA
              </p>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex flex-col items-center justify-between p-4 rounded-md">
          <div className="border-8 rounded-full border-gray-dark3">
              <img className="w-20" src="/gifs/call.gif" alt="" />
            </div>
            <div>
              <h3 className="font-bold text-primary-black">Call Us</h3>
              <p className="text-primary-black">+251-114-70 45 74/75</p>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex flex-col items-center justify-between p-4 rounded-md">
          <div className="border-8 rounded-full border-gray-dark3">
              <img className="w-20" src="/gifs/mail.gif" alt="" />
            </div>
            <div>
              <h3 className="font-bold text-primary-black">Email Us</h3>
              <p className="text-primary-black">saduraplckt@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  justify-between px-[5%] max-w-[1500px] mx-auto  gap-8 ">
        <section className="w-full text-gray-600 rounded-lg body-font">
          <iframe
          title="map"
            className="w-full rounded-lg h-96 lg:h-full dark:bg-gray-500"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36459.65845463146!2d38.748312871675154!3d9.031875451839642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f69f9c910bb%3A0xf3b5e05243ab160f!2sPiassa!5e0!3m2!1sen!2snl!4v1682193901976!5m2!1sen!2snl"
          ></iframe>
        </section>
        <section className="rounded-lg bg-gray-light1">
          <div className="max-w-screen-md px-4 py-8 mx-auto lg:py-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-gray-900 dark:text-primary-black">
              Send us a message
            </h2>
            <p className="mb-8 font-light text-center text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">
MR 24 key activities are Transport & Trade. In addition ,
MR 24 has established other businesses which
complement its core activities & In different sectors
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-primary-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-5 py-3 text-sm font-semibold text-center rounded-lg text-primary-black bg-primary-yellow sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
