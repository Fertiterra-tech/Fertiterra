import Link from "next/link"

const pillRows = [
  ["PCOS", "Endometriosis", "Fibroids", "Pelvic pain", "Hormonal imbalance"],
  ["Ovulation disorders", "Irregular periods", "Thyroid and fertility", "Male fertility"],
  ["Fertility assessment", "Ultrasound scan", "Gynaecologist consult", "Egg freezing"],
  ["IVF support", "Counselling", "Nutrition support", "Menopause care"],
]

export function HomeTreatmentBand() {
  return (
    /* Photo: "Back view of woman sitting topless" by Fireworks Uche, Pexels #20094332. Free for commercial use. */
    <div className="treatment-band" role="region" aria-label="World-class treatment, without the wait">
      <div className="treatment-band__inner">
        <div className="treatment-band__pills">
          {pillRows.map((row, rowIndex) => (
            <div className="treatment-row" key={row[0]} data-row={rowIndex}>
              <div className="treatment-row__group">
                {row.map((pill) => (
                  <span className="treatment-pill" key={pill}>
                    {pill}
                  </span>
                ))}
              </div>
              <div className="treatment-row__group" aria-hidden="true">
                {row.map((pill) => (
                  <span className="treatment-pill" key={`${pill}-copy`}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="treatment-band__content">
          <h2 className="treatment-band__title">
            World-class treatment, <em>without the wait</em>
          </h2>
          <p className="treatment-band__stat">
            Specialist-led care, from your first test result to a plan built around you.
          </p>
          <Link className="treatment-band__cta" href="/screening">
            Start my free assessment
          </Link>
        </div>
      </div>
    </div>
  )
}
