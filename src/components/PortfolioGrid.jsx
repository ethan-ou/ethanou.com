import HoverVideoPlayer from "react-hover-video-player";

export default function PortfolioGrid({ items }) {
  return (
    <div className="mt-6 space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-6">
      {items.map((item) => (
        <a href={item.href} key={item.title} className="group relative">
          <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <HoverVideoPlayer
              videoSrc={item.video}
              className="w-full h-full object-center object-cover"
              pausedOverlay={
                <img
                  src={item.img}
                  alt=""
                  style={{
                    // Make the image expand to cover the video's dimensions
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              }
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">{item.category}</h3>
          <p className="text-base font-semibold text-gray-900">{item.title}</p>
        </a>
      ))}
    </div>
  );
}
