'use client'
import React, { useRef, useState } from 'react'
import {  sliderLists } from '../../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const Menu = () => {
    
    const contentRef= useRef(); 
    const [currentIndex, setCurrentIndex] = useState(0)
    useGSAP(()=>{
        gsap.fromTo('#title',{
            opacity:0,
        },{
            opacity:1,
            duration:1,
        })
        gsap.fromTo('.cocktail img',{opacity:0, xPercent:-100},{opacity:1, xPercent:0,ease:"power1.inOut", duration:1})
        gsap.fromTo('.details ',{opacity:0,yPercent:100},{opacity:1,yPercent:0,ease:"power1.inOut", duration:1})
    },[currentIndex])
        useGSAP(()=>{
            const parallelxTimeline= gsap.timeline({
                scrollTrigger:{
                    trigger:"#menu",
                    start:"top 30%",
                    end:"bottom 80%",
                    scrub:true,
                }
            })
            .from('#m-left-leaf',{y:100,x:-100})
            .from('#m-right-leaf',{y: 100,x:100})
            })


    const totalCocktails= sliderLists.length;

    const gotoslide=(index)=>{
        const newIndex =(index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    }

    const getCocktailsAt=(indexOffset)=>{
        return  sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    }


    const currentcocktail= getCocktailsAt(0);
    const prevcocktail=getCocktailsAt(-1);
    const nextcocktail=getCocktailsAt(1);
  return (
    <section id='menu' aria-labelledby='menu-heading'>
        <img src="/images/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf'/>
        <img src="/images/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf' />
        <h2 id='menu-heading' className='sr-only'>Cocktails Menu</h2>
        <nav className='cocktail-tabs' aria-label='Cocktails Navigation'>
            {sliderLists.map((cocktail,index)=>{
                const isActive= index ===currentIndex;
                return (
                    <button key={cocktail.id} className={
                        `${isActive ? 
                        'text-white border-white'
                        :'text-white/50 border-white/50'}
                        `}
                        onClick={()=> gotoslide(index)}
                        >
                        {cocktail.name} 
                    </button>
                )
            })}
        </nav>
        <div className="content">
            <div className="arrows">
                <button className="text-left " onClick={()=>gotoslide(currentIndex-1)}>
                <span>{prevcocktail.name}</span>
                <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden='true'/>
                </button>
                <button className="text-right" onClick={()=>gotoslide(currentIndex+1)}>
                <span>{nextcocktail.name}</span>
                <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden='true'/>
                </button>
            </div>
            <div className="cocktail">
                <img src={currentcocktail.image} className='object-contain' />
            </div>
            <div className="recipe">
                <div ref={contentRef} className='info'>
                    <p>recipe for :</p>
                    <p id="title">{currentcocktail.name}</p>
                </div>
                <div className="details">
                    <h2>{currentcocktail.title}</h2>
                    <p>{currentcocktail.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Menu