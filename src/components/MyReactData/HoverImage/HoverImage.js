export default function HoverImage({ image, text, width, height, imgStyle }) {
  return (
    <div className="relative float-left w-full group hover:border hover:border-gray-400">
      <a target="_blank" href="img_5terre.jpg">
        <img
          src={image}
          alt="Cinque Terre"
          width={width}
          height={height}
          className={imgStyle}
        />
      </a>
      <div className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out bg-blue-600 group-hover:opacity-90">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-light opacity-0 text-center group-hover:opacity-100">
          {text}
        </div>
      </div>
    </div>
  );
}
