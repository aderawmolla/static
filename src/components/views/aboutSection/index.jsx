export default function AboutSection() {
  return (
    <section className="py-8 bg-primary-white ">
      <div className="container max-w-5xl m-8 mx-auto">
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 rounded-t opacity-25 gradient"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 p-6 sm:w-1/2">
            <h3 className="mb-3 font-mono text-4xl font-bold leading-none text-gray-800 text-primary-black">
              <span className="border-b-4 text-primary-yellow border-primary-yellow">Who</span> We
              Are
            </h3>
            <p className="mb-8 font-mono text-xl text-gray-dark3">
              MR 24 key activities are Transport & Trade. In addition ,
MR 24 has established other businesses which
complement its core activities & In different sectors
              <br />
              <br />
            </p>
          </div>
          <div className="w-full p-6 sm:w-1/2">
            <img src="/images/whomain.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col-reverse flex-wrap items-center pb-8 sm:flex-row">
          <div className="w-full p-6 mt-6 sm:w-1/2">
            <img src="/images/whatmain.png" className="pb-8" alt="" />
          </div>
          <div className="w-full p-6 mt-6 sm:w-1/2">
            <div className="align-middle">
              <h3 className="mb-3 font-mono text-4xl font-bold leading-none text-gray-800 text-primary-black">
                <span className="border-b-4 text-primary-yellow border-primary-yellow">What</span>{" "}
                We Do
              </h3>
              <p className="mb-8 font-mono text-xl text-gray-dark3">
               
                 MR 24 key activities are Transport & Trade. In addition ,
        MR 24 has established other businesses which
                 complement its core activities & In different sectors

                <br/>
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 p-6 sm:w-1/2">
            <h3 className="mb-3 font-mono text-4xl font-bold leading-none text-gray-800 text-primary-black">
              <span className="border-b-4 text-primary-yellow border-primary-yellow">Why</span> Us
            </h3>
            <p className="mb-8 font-mono text-xl text-gray-dark3">
               MR 24 key activities are Transport & Trade. In addition ,
MR 24 has established other businesses which
complement its core activities & In different sectors
              <br />
              <br />
            </p>
          </div>
          <div className="w-full p-6 sm:w-1/2">
            <img src="./images/whymain.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
