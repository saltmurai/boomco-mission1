import { Inter } from "next/font/google";
import SocialCard, { SocialCardProp } from "@/components/SocialCard";

const inter = Inter({ subsets: ["latin"] });

const socialCards: SocialCardProp[] = [
  {
    title: "채미닝의 페이스북",
    url: "https://twitter.com/test",
    imagePath: "facebook.png",
  },
  {
    title: "채미닝의 트위터",
    url: "https://twitter.com/test",
    imagePath: "twitter.png",
  },
  {
    title: "채미닝의 유투브",
    url: "https://youtube.com/test",
    imagePath: "youtube.png",
  },
  {
    title: "채미닝의 인스타그램",
    url: "https://instagram.com/test",
    imagePath: "instagram.png",
  },
];

export default function Home() {
  return (
    <div className={`h-screen w-screen flex flex-col ${inter.className}`}>
      <div className="h-2/5 relative flex items-center justify-center">
        <div
          className="relative w-full h-full bg-boomco-purple flex items-center justify-center"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% calc(max(10%, 100% - 90vw)), 0% 100%)",
          }}
        ></div>
        <img
          src="image.jpg"
          alt="Image"
          className="absolute rounded-full w-24 h-24 md:w-32 md:h-32 object-cover"
        />
        <div className="absolute w-5/12 md:w-full top-1/2 mt-12 md:mt-16 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold md:text-4xl mt-3 text-boomco-bold-text">
            chaemining
          </span>
          <span className="text-boomco-light-text">
            Le your content live longer than the feed
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-3">
        {socialCards.map((card) => (
          <SocialCard {...card} key={card.title} />
        ))}
      </div>
    </div>
  );
}
