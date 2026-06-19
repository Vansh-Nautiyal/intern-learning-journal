import Accordion from "./Accordion";
import { Link } from "react-router-dom";

function FAQ() {
  const faq = [
    {
      id: 1,
      title: "What is Netflix",
      content: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
      You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    },
    {
      id: 2,
      title: "How much does Netflix cost ?",
      content: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649/month.`,
    },
    {
      id: 3,
      title: "Where can I watch ?",
      content: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      id: 4,
      title: "How do I cancel ?",
      content: `Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
    {
      id: 5,
      title: "What can I watch on Netflix?",
      content: `Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      id: 6,
      title: "Is Netflix good for kids?",
      content: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles 
        come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];
  return (
    <div className="text-center border-t-4 border-t-[rgb(70,70,70)] border-b-2 border-b-[rgb(70,70,70)] py-[5%]">
      <h1 className="text-3xl m-[2%] font-bold">Frequently Asked Questions</h1>
      <Accordion items={faq} />{" "}
      
      <div className="m-[20px]">
        <p>
          <b>
            Ready to watch? Enter your email or create or restart your
            membership.
          </b>
        </p>

        <div className="mx-auto flex w-full max-w-[650px] items-stretch gap-0">
          <input
            className="h-12 min-w-0 flex-1 rounded-none border border-gray-300 bg-white px-4 text-black placeholder:text-gray-500 focus:outline-none"
            type="text"
            placeholder="Email Address"
          />
          <Link
            to="/signin"
            className="flex h-12 shrink-0 items-center rounded-none bg-[red] px-4 text-white no-underline"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
