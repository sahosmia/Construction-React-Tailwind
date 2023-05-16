
function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-10 sm:py-16 lg:py-20">
      <div className="container text-center"></div>

      <div className="container flex flex-col lg:flex-row gap-10 py-10">
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8310.395682876113!2d-101.49664371546366!3d58.61909131203472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52440eda0902bde7%3A0xff8c22b7eee8696!2sLac%20Brochet%2C%20MB%20R0B%202E0%2C%20Canada!5e0!3m2!1sen!2sbd!4v1684140515623!5m2!1sen!2sbd"
           className='w-full h-80 lg:h-full rounded'
          ></iframe>
        </div>

        <div className="flex-1 w-full lg:w-1/2">
          <p className="mb-2 text-main font-semibold">
            Feel free to contact me anytimes
          </p>
          <h3 className="text-5xl font-bold text-white mb-8">
            Have an upcoming project?
          </h3>
          <form action="">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col md:flex-row justify-around w-full gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full md:w-1/2 outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded-lg py-4 px-3"
                />

                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full md:w-1/2 outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded-lg py-4 px-3"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-around w-full gap-5">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="w-full md:w-1/2 outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded-lg py-4 px-3"
                />

                <input
                  type="text"
                  placeholder="Your Subject"
                  className="w-full md:w-1/2 outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded-lg py-4 px-3"
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Write Your Massage Here"
                  className="w-full outline outline-1 outline-slate-300 focus:outline-main focus:outline-1 rounded-lg py-4 px-3"
                ></textarea>
              </div>
              <div>
                <button className="bg-main text-white rounded-full px-14 py-4 w-full sm:w-auto">
                  Submit Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact