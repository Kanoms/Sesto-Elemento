import nnpc from "../assets/nnpc.png";
import total from "../assets/total.png";
import saipem from "../assets/saipem.png";
import mairetecnimont from "../assets/mairetecnimont.png";
import lng from "../assets/lng.png";
import chec from "../assets/chec.png";
import egbin from "../assets/egbin.png";
import eroton from "../assets/eroton.png";
import entrepose from "../assets/entrepose.png";
import netco from "../assets/netco.png";
import africancircle from "../assets/africancircle.png";
import deuxproject from "../assets/deuxproject.png";
import shell from "../assets/shell.png";

const clients = [
  nnpc,
  total,
  saipem,
  mairetecnimont,
  lng,
  chec,
  egbin,
  eroton,
  entrepose,
  netco,
  africancircle,
  deuxproject,
  shell,
];

const ClientsSection = () => {
  return (
    <section className="bg-offWhite py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl text-center font-medium text-dkBlue mb-8">
          Clients we’ve worked with
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {clients.slice(0, 8).map((client, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="h-20 md:h-24 lg:h-32 xl:h-full"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {clients.slice(8, 11).map((client, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="h-20 md:h-24 lg:h-32 xl:h-full"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
          {clients.slice(11, 13).map((client, index) => (
            <div key={index} className="flex justify-center items-center p-4">
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="h-20 md:h-24 lg:h-32 xl:h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
