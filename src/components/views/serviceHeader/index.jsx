import data from "../../../models/data.json";

export default function ServiceHeader() {
  return (
    <section className="py-16 bg-primary-white ">
      <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between max-w-[1800px] gap-x-8 mx-auto px-[5%] ">
        {data.services.map((item, index) => (
          <div key={index} className="shrink w-full md:w-[600px] ">
            <div className="relative flex items-center justify-center top-16 ">
              <img
                src={`/gifs/${item.image}`}
                alt=""
                className="z-10 object-cover w-40 h-40 border-8 rounded-full border-pray-dark3"
              />
            </div>
            <div className="z-0 px-4 py-2 pt-20 space-y-6 font-mono text-center rounded-lg shadow-lg bg-primary-light3 hover:bg-primary-yellow hover:scale-105 hover:duration-500">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold whitespace-nowrap">
                  {item.name}
                </h4>
                <p className="text-4xl font-bold whitespace-nowrap">{item.title}</p>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
