export type SocialCardProp = {
  title: string;
  url: string;
  imagePath: string;
};

export default function SocialCard({ title, url, imagePath }: SocialCardProp) {
  return (
    <div className="flex items-center justify-center h-10 md:h-16 gap-3 w-52 pl-1 md:w-1/3">
      <div className="w-10 h-10 md:h-16 md:w-16 flex items-center">
        <img
          src={imagePath}
          alt={title}
          className="object-contain rounded-md"
        />
      </div>
      <div className="w-44 h-full flex flex-col justify-around">
        <span className="text-sm md:text-lg text-boomco-bold-text font-bold">
          {title}
        </span>
        <span className="text-xs md:text-sm text-boomco-light-text">{url}</span>
      </div>
    </div>
  );
}
