import Image from "next/image"

type Clinician = {
  name: string
  credentials: string[]
  role: string
  image: string
}

const clinicians: Clinician[] = [
  {
    name: "Dr. Favour Ayeboua",
    credentials: ["MBBS", "Obstetrics", "Gynaecology"],
    role: "Obstetrics and Gynaecology and Fertility Specialist",
    image: "/images/team/clinical-favour.webp",
  },
  {
    name: "Dr. Smart Akuma",
    credentials: ["MD", "Reproductive Endocrinology"],
    role: "Obstetrics and Gynaecology Doctor and Fertility Advisor",
    image: "/images/team/clinical-akuma.webp",
  },
  {
    name: "Dr. Christelle Giraneza",
    credentials: ["MD", "MSc"],
    role: "Doctor and Sexual and Reproductive Health Advisor",
    image: "/images/team/clinical-christelle.webp",
  },
]

/* Row 1 and row 2 show the same three clinicians in a different order so the two rows read as a staggered team wall. */
const rows: Clinician[][] = [
  [clinicians[0], clinicians[1], clinicians[2]],
  [clinicians[2], clinicians[0], clinicians[1]],
]

function Card({ person }: { person: Clinician }) {
  return (
    <article className="clinical-card">
      <div className="clinical-card__photo">
        <Image src={person.image} alt={person.name} width={160} height={160} sizes="80px" />
      </div>
      <div className="clinical-card__body">
        <h3 className="clinical-card__name">{person.name}</h3>
        <ul className="clinical-card__tags" aria-label="Qualifications">
          {person.credentials.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="clinical-card__role">{person.role}</p>
      </div>
    </article>
  )
}

export function HomeClinicalTeam() {
  return (
    <section className="clinical-section" aria-labelledby="clinical-team-title">
      <div className="clinical-section__head">
        <h2 id="clinical-team-title">
          Direct access to a <em>world-class</em> clinical team.
        </h2>
        <p>
          Talk to our Obstetrician and Gynaecologists for clarity on your results. Supported by dedicated Fertility
          Advisors and Sexual and Reproductive Health Advisors to guide your next steps.
        </p>
      </div>

      <div className="clinical-wall">
        {rows.map((row, rowIndex) => (
          <div className="clinical-row" data-row={rowIndex} key={rowIndex}>
            {[0, 1, 2, 3].map((copy) => (
              <div className="clinical-row__group" key={copy} aria-hidden={copy > 0 ? "true" : undefined}>
                {row.map((person) => (
                  <Card person={person} key={`${person.name}-${copy}`} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
