import React from 'react'
import slika1 from '../fotografije/slika1.jpg'
import slika4 from '../fotografije/slika4.jpg'
import slika3 from '../fotografije/slika3.jpg'

const Destinations = () => {
    return (
        <>
          <section className="grid">
              <h3>We are currently in 46 countires</h3>

              <div className="grid-items">
                  <div>
                      <img src={slika1} alt=""/>
                      <h4>Fly to Bali</h4>
                      <p>Most beautiful countires of the world</p>
                  </div>

                  <div>
                      <img src={slika4} alt=""/>
                      <h4>Visit Maldives</h4>
                      <p>Most beautiful countires of the world</p>
                  </div>

                  <div>
                      <img src={slika3} alt=""/>
                      <h4>Explore Bora Bora</h4>
                      <p>Most beautiful countires of the world</p>
                  </div>

              </div>

          </section>
        </>
    )
}

export default Destinations
