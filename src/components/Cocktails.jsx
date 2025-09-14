import React from 'react'
import { cocktailLists , mockTailLists} from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const cocktails = () => {
  useGSAP(()=>{
    const parallelxTimeline= gsap.timeline({
      scrollTrigger:{
          trigger:"#cocktails",
          start:"top 30%",
          end:"bottom 80%",
          scrub:true,
      }
  })
  .from('#c-left-leaf',{y:100,x:-100})
  .from('#c-right-leaf',{y: 100,x:100})
  })
  return (
    <section className='noisy' id='cocktails'>
      <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id='c-left-leaf' />
      <img src="/images/cocktail-right-leaf.png" alt="l-leaf" id='c-right-leaf' />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Cocktails :</h2>
          <ul>
            {cocktailLists.map(({name, country ,price , detail}) => (
              <li key={name}>
                <div className='me-28'>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Popular Mocktails :</h2>
          <ul>
            {mockTailLists.map(({name, country ,price , detail}) => (
              <li key={name}>
                <div className='me-28'>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default cocktails