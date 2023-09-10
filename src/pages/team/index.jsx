import InstagramIcon from "../../components/icons/instagram";
import LinkedinIcon from "../../components/icons/linkedin";
import TelegramIcon from "../../components/icons/telegram";
import data from "./../../models/data.json";
export default function TeamPage() {
  return (
    <section className="py-16 bg-gray-dark3 ">
      <div className="mx-auto font-mono text-center text-primary-white">
        <h2 className="text-4xl font-bold "> Our Team</h2>
        Talented People Behind the Scenes of the Organization
        <p></p>
      </div>
      <div className="flex flex-wrap xl:flex-nowrap justify-center xl:justify-between max-w-[1800px] gap-x-8 mx-auto px-[5%]">
        {data.team.map((item, index) => (
          <div key={index} className="shrink w-full md:w-[600px] ">
            <div className="relative flex items-center justify-center top-16 ">
              <img
                src={item.image}
                alt=""
                className="z-10 object-cover w-40 h-40 border-8 rounded-full border-gray-dark3"
              />
            </div>
            <div className="z-0 px-4 py-2 pt-20 space-y-6 font-mono text-center rounded-lg shadow-lg bg-primary-white hover:bg-secondary-light2 hover:scale-105 hover:duration-500">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold whitespace-nowrap">
                  {item.name}
                </h4>
                <p className="text-sm whitespace-nowrap">{item.role}</p>
              </div>
              <p>{item.description}</p>
              <div className="flex items-center justify-center gap-x-8">
                <a href="/" className="hover:animate-bounce">
                  <LinkedinIcon />
                </a>
                <a href="/" className="hover:animate-bounce">
                  <TelegramIcon />
                </a>
                <a href="/" className="hover:animate-bounce">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
