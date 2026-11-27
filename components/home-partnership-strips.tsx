import Image from "next/image"

const partnerLogos = [
  {
    name: "The Forge",
    src: "/images/partners/theforge-logo.svg",
    width: 842,
    height: 595,
    className: "partner-marquee__item--forge",
  },
  {
    name: "Westerwelle Foundation, WSH Kigali",
    src: "/images/partners/westerwelle-logo.webp",
    width: 600,
    height: 240,
    className: "",
  },
  {
    name: "MIT Solve",
    src: "/images/partners/mit-solve-logo.svg",
    width: 115,
    height: 27,
    className: "",
  },
  {
    name: "STAND Festival",
    src: "/images/partners/stand-logo.svg",
    width: 194,
    height: 45,
    className: "",
  },
  {
    name: "PIF Africa",
    src: "/images/partners/pif-africa-logo.webp",
    width: 1200,
    height: 499,
    className: "partner-marquee__item--pif",
  },
]

function PartnerLogoSet({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className={`partner-marquee__set${duplicate ? " partner-marquee__set--duplicate" : ""}`}
      aria-label={duplicate ? undefined : "FertiTerra partner organizations"}
      aria-hidden={duplicate}
    >
      {partnerLogos.map((partner) => (
        <li className="partner-marquee__item" key={partner.name}>
          <Image
            className={partner.className}
            src={partner.src}
            alt={`${partner.name} logo`}
            width={partner.width}
            height={partner.height}
            sizes="(max-width: 600px) 140px, 140px"
          />
        </li>
      ))}
    </ul>
  )
}

export function HomePartnershipStrips() {
  return (
    <div className="home-partnership-strips">
      <section className="partners-strip" aria-labelledby="partners-strip-title">
        <h2 className="partners-strip__title" id="partners-strip-title">
          Partnered with
        </h2>
        <div className="partner-marquee">
          <div className="partner-marquee__viewport">
            <div className="partner-marquee__track">
              <PartnerLogoSet />
              <PartnerLogoSet duplicate />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
