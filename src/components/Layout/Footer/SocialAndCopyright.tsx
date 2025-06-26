import { socialMediaData } from "#lib/constants/footerData";

const SocialAndCopyright = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4">
        {socialMediaData?.length > 0 &&
          socialMediaData.map((social) => (
            <a
              key={social.id}
              href=""
              className="text-[#ffab00] hover:text-[#c4a36b]"
            >
              <social.component />
            </a>
          ))}
      </div>
      <a href="" className="text-[11px] text-[#a2a2a2]">
        © NAXA 2025. All Rights Reserved
      </a>
    </div>
  );
};

export default SocialAndCopyright;
