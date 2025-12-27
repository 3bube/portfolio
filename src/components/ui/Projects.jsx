export default function Projects({ name, img, alt, type, link, tools }) {
  return (
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
        />
      </a>
      <div className="mt-4">
        <div className="relative mb-3 inline-flex overflow-hidden rounded-full border-2 border-secondary-600 px-4 py-1">
          {/* <BorderBeam duration={3} colorFrom="#ef4444" colorTo="#dc2626" /> */}
          <p className="relative z-10 flex items-center justify-center text-body-4 text-secondary-600 2xl:text-3xl">
            {tools}
          </p>
        </div>
        <div className="2xl:space-y-3">
          <h3 className="text-works-title font-medium uppercase text-primary-200 2xl:text-5xl">
            {name}
          </h3>
          <p className="text-body-2 font-light text-primary-400 2xl:text-4xl">
            {type}
          </p>
        </div>
      </div>
    </div>
  );
}
