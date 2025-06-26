import companyLogo from "#assets/icons/naxa-logo.png";
import { ContactData } from "#lib/constants/footerData";
import Messenger from "#assets/icons/Messenger.svg";
import Whatsapp from "#assets/icons/Whatsapp.svg";

interface ContactType {
  address: string;
  phoneNumbers: string[];
  emails: {
    general: string;
    business: string;
  };
}
const ContactSection = () => {
  const { address, phoneNumbers, emails }: ContactType = ContactData;
  return (
    <section className="flex flex-col items-center md:items-start">
      <figure className="mb-8">
        <img src={companyLogo} alt="" />
      </figure>
      <div className="flex flex-col gap-4">
        <span className="heading">Naxa pvt. ltd.</span>
        <article className="flex flex-col menu">
          <span className="menu--item cursor-pointer">{address}</span>
          <div className="flex justify-center md:justify-start gap-1 flex-wrap ">
            {phoneNumbers.map((item, idx) => (
              <a href={`tel:${item}`} key={idx} className="menu--item">
                {item}
                {idx !== phoneNumbers.length - 1 ? "," : ""}
              </a>
            ))}
          </div>
          <a href={`mailTo:${emails.general}`} className="menu--item">
            {emails.general}
          </a>
          <a href={`mailTo:${emails.business}`} className="menu--item">
            {emails.business}
          </a>
        </article>
        <div className="flex flex-col gap-[10px]">
          <h2 className="heading">Chat With Us Now!</h2>
          <div className="flex gap-3.5">
            <figure className="bg-[#15955c] hover:bg-[#117f4b] cursor-pointer rounded-full p-3 h-[46px] w-[46px]">
              <a href="">
                <img src={Whatsapp} alt="whatsapp" />
              </a>
            </figure>
            <figure className="bg-[#0078ff] hover:bg-[#0061cc] cursor-pointer rounded-full p-3 h-[46px] w-[46px]">
              <a href="">
                <img src={Messenger} alt="messenger" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
