import React from 'react'
import bali from '../fotografije/bali.jpg'
import maldivi from '../fotografije/maldivi.jpg'
import borabora from '../fotografije/borabora.jpg'

const Destinations = () => {
    return (
        <>
          <section className="grid">
              <h3>You are as rich as you have traveled! Become a millionaire!</h3>

              <div className="grid-items">
                  <div>
                      <img src={bali} alt=""/>
                      <h4>Fly to Bali</h4>
                      <p>Most beautiful countries of the world</p>
                  </div>

                  <div>
                      <img src={maldivi} alt=""/>
                      <h4>Visit Maldives</h4>
                      <p>Explore real mother nature</p>
                  </div>

                  <div>
                      <img src={borabora} alt=""/>
                      <h4>Explore Bora Bora</h4>
                      <p>Feel the freedom</p>
                  </div>

              </div>

          </section>
        </>
    )
}

export default Destinations
