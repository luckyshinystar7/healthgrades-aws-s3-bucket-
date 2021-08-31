import React from 'react'

export default function HomeContent() {
  return (
    <section className="container">
        <div className="columns features">
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Energy conservation</h4>
                            <p>Energy conservation is the decision and practice of using less energy. Turning off the light when you leave the room, unplugging appliances when they’re not in use and walking instead of driving are all examples of energy conservation. The two main reasons people conserve energy are to gain more control over their energy bill and reduce the demand on the earth’s natural resources.</p>
                            <p><a href="https://www.constellation.com/energy-101/what-is-energy-conservation.html">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                    <div className="card-content">
                        <div className="content">
                            <h4>Water conservation</h4>
                            <p>Conserving water reduces wear and tear on major resources such as water and wastewater treatment plants and the distribution systems that deliver water to the public. Using less water can also enable us to become more flexible during times when there is a water shortage.</p>
                            <p><a href="https://www2.gnb.ca/content/gnb/en/departments/elg/environment/content/water/content/water_conservation.html">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="column is-4">
                <div className="card is-shady">
                     <div className="card-content">
                        <div className="content">
                            <h4>Solar energy</h4>
                            <p>Solar power is energy from the sun that is converted into thermal or electrical energy. Solar energy is the cleanest and most abundant renewable energy source available, and the U.S. has some of the richest solar resources in the world. Solar technologies can harness this energy for a variety of uses, including generating electricity, providing light or a comfortable interior environment, and heating water for domestic, commercial, or industrial use.</p>
                            <p><a href="https://www.seia.org/initiatives/about-solar-energy">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
