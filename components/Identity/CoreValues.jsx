export default function CoreValues() {

    const values = [

        {
            number: "01",
            title: "Innovation",
            description:
                "Creative thinking supported by technical excellence to develop meaningful architectural solutions."
        },

        {
            number: "02",
            title: "Functionality",
            description:
                "Every design is shaped around the people who experience the space every day."
        },

        {
            number: "03",
            title: "Timeless Design",
            description:
                "Architecture created to remain relevant beyond changing trends and generations."
        },

        {
            number: "04",
            title: "Craftsmanship",
            description:
                "Meticulous attention to detail from concept development through project completion."
        }

    ];

    return (

        <section className="core-values">

            <div className="section-title">

                <p>
                    OUR VALUES
                </p>

                <h2>

                    Principles That Shape
                    Every Project

                </h2>

            </div>

            <div className="values-grid">

                {values.map((value) => (

                    <div
                        key={value.number}
                        className="value-card"
                    >

                        <span className="value-number">

                            {value.number}

                        </span>

                        <h3>

                            {value.title}

                        </h3>

                        <p>

                            {value.description}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}