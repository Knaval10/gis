import NewsletterBg from "#assets/images/NewsletterBg.png";
import { useState } from "react";
import Button from "./Button";
const SubscribeNewsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const emailRegex = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Email is required.");
    } else if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      console.log("Submitting email:", trimmedEmail);
      setEmail("");
    }
  };
  return (
    <div className="bg-white relative">
      <div className="absolute inset-0 z-0">
        <div className="h-[40%] bg-white" />
        <div className="h-[60%] bg-[#F4F4F4]" />
      </div>
      <div className="flex justify-center w-full relative container !px-4 !p-0">
        <figure className=" h-[352px] lg:h-[440px] w-full rounded-4xl">
          <img
            src={NewsletterBg}
            alt=""
            className="w-full h-full rounded-4xl"
          />
        </figure>
        <section className="absolute inset-0 text-white h-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-5 h-full"
          >
            <h2 className="text-base sm:text-[28px] lg:text-[40px] font-semibold">
              Subscribe to our Newsletter!
            </h2>
            <p className="text-xs lg:text-[18px] text-center">
              Join our subscriber list to receive latest <br /> News & Updates
            </p>
            <div className="flex flex-col items-center gap-1 w-full">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="bg-white placeholder:text-[#BDBDBD] text-xs md:text-sm text-[#333132] py-2 sm:py-3 px-5 w-2/3 sm:w-[40%] focus:outline-[#ffab00]"
              />
              {error && <span className="text-red-400 text-xs">{error}</span>}
            </div>
            <Button
              type="submit"
              text="Subscribe"
              className="font-semibold !ml-0 text-xs sm:text-base"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
