import Head from 'next/head'
import Image from 'next/image';
import logo from 'public/images/logo-bookmark.svg';
import mockup from 'public/images/illustration-hero.svg';
import object from 'public/images/bg-dots.svg';
import chrome from 'public/images/logo-chrome.svg';
import firefox from 'public/images/logo-firefox.svg';
import opera from 'public/images/logo-opera.svg';
import tab1 from 'public/images/illustration-features-tab-1.svg';
import tab2 from 'public/images/illustration-features-tab-2.svg';
import tab3 from 'public/images/illustration-features-tab-3.svg';
import dots from 'public/images/bg-dots.svg';
import fb from 'public/images/icon-facebook.svg';
import twt from 'public/images/icon-twitter.svg';
import arrow from 'public/images/icon-arrow.svg';
import close from 'public/images/icon-close.svg';
import hamburger from 'public/images/icon-hamburger.svg';

import React, { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const accordQ = document.querySelectorAll('.accordion-question');
    const answer = document.querySelectorAll('.answer');
    const tab1 = document.querySelector('.tab1');
    const tab2 = document.querySelector('.tab2');
    const tab3 = document.querySelector('.tab3');
    const tab1Div = document.querySelector('.tab1-div');
    const tab2Div = document.querySelector('.tab2-div');
    const tab3Div = document.querySelector('.tab3-div');
    const openBurger = document.querySelector('.openBurger');
    const closeBurger = document.querySelector('.closeBurger');
    const mobileNav = document.querySelector('.mobile-nav');
    const brandLogo = document.querySelector('.brand-logo');

    accordQ.forEach((ques) => {
      ques.addEventListener('click', (e) => {
        const answer = e.currentTarget.nextElementSibling;
        if(answer.classList.contains('hidden')){
           answer.classList.remove('hidden')
        }
      });
    });
    answer.forEach((answer) => {
      answer.addEventListener('click', (e) => {
        const answer = e.currentTarget;
        answer.classList.add('hidden')
      });
    });
    tab1.addEventListener('click', () => {
      if(tab3.classList.contains('border-b-softRed') || tab2.classList.contains('border-b-softRed')) {
        tab3.classList.remove('border-b-softRed');
        tab2.classList.remove('border-b-softRed');
      }
      if(tab1Div.classList.contains('-translate-x-[80rem]')){
        tab1Div.classList.remove('-translate-x-[80rem]');
      }
      if(tab2Div.classList.contains('-translate-x-[80rem]')){
        tab2Div.classList.add('translate-x-[80rem]');
        tab2Div.classList.remove('-translate-x-[80rem]');
      }
      tab2Div.classList.add('translate-x-[80rem]');
      tab3Div.classList.add('translate-x-[80rem]');
      tab1.classList.add('border-b-softRed');

    })

    tab2.addEventListener('click', () => {
      if(tab1.classList.contains('border-b-softRed') || tab3.classList.contains('border-b-softRed')) {
        tab1.classList.remove('border-b-softRed');
        tab3.classList.remove('border-b-softRed');
      }
      if(tab2Div.classList.contains('translate-x-[80rem]')){
        tab2Div.classList.remove('translate-x-[80rem]');
      }
      if(tab2Div.classList.contains('-translate-x-[80rem]')){
        tab2Div.classList.remove('-translate-x-[80rem]');
      }
      tab1Div.classList.add('-translate-x-[80rem]');
      tab3Div.classList.add('translate-x-[80rem]');
      tab2.classList.add('border-b-softRed');

    })

    tab3.addEventListener('click', () => {
      if(tab1.classList.contains('border-b-softRed') || tab2.classList.contains('border-b-softRed')) {
        tab1.classList.remove('border-b-softRed');
        tab2.classList.remove('border-b-softRed');
      }
      if(tab3Div.classList.contains('translate-x-[80rem]')){
        tab3Div.classList.remove('translate-x-[80rem]');
      }
      tab1Div.classList.add('-translate-x-[80rem]');
      if(tab2Div.classList.contains('translate-x-[80rem]')){
        tab2Div.classList.add('-translate-x-[80rem]');
        tab2Div.classList.remove('translate-x-[80rem]');
      }
      tab2Div.classList.add('-translate-x-[80rem]');
      tab3.classList.add('border-b-softRed');

    })

    openBurger.addEventListener('click', function(){
      mobileNav.classList.remove("hidden");
      mobileNav.classList.add("flex");
      openBurger.classList.add("hidden");
      brandLogo.classList.add("hidden");
    })

    closeBurger.addEventListener('click', function(){
      mobileNav.classList.add("hidden");
      mobileNav.classList.remove("flex");
      openBurger.classList.remove("hidden");
      brandLogo.classList.remove("hidden");
    })

    window.addEventListener("scroll", function(){
      mobileNav.classList.add("hidden");
      mobileNav.classList.remove("flex");
      openBurger.classList.remove("hidden");
      brandLogo.classList.remove("hidden");
    })
  }, []);


  return (
    <div className='bg-gray-100 text-black'>
      <Head>
        <title>Bookmark Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div>
          <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100">
            <nav className='px-1 md:px-0 flex items-center justify-between py-2 container'>
              <a><Image src={logo} className="w-8 brand-logo" alt=""/></a>
              <ul className='hidden md:flex items-center justify-center gap-3'>
                <li className='hover:text-softRed transition-all ease-in-out duration-300'><a href="#features"><small>FEATURES</small></a></li>
                <li className='hover:text-softRed transition-all ease-in-out duration-300'><a href="#pricing"><small>PRICING</small></a></li>
                <li className='hover:text-softRed transition-all ease-in-out duration-300'><a href="#contact"><small>CONTACT</small></a></li>
                <a href="#" className='py-[.5rem] px-2.5 rounded-md text-white border-2 border-transparent bg-softRed hover:text-softRed hover:border-softRed hover:bg-transparent hover:shadow-md transition-all ease-in-out duration-300'><small>LOGIN</small></a>
              </ul>
              <a className='md:hidden'><Image src={hamburger} className="w-1 openBurger" alt=""/></a>
            </nav>
          </header>

          <nav className="hidden flex-col items-stretch fixed top-0 bottom-0 left-0 right-0 z-[9999] text-center mobile-nav transition-all ease-in-out duration-500">
            <ul className='divide-y-[1px] divide-white px-2 py-2 min-h-screen bg-[#252b46ef]'>
              <li className='flex justify-between p-1 items-center mb-2'>
                <a><svg width="148" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="white" fill-rule="nonzero"/><g><circle fill="white" cx="12.5" cy="12.5" r="12.5"/><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="darkBlue"/></g></g></svg></a>
                <Image src={close} className="w-1 h-1 closeBurger" alt=""/>
              </li>
              <li className='p-1 text-white text-xl'><a href="#features"><small>FEATURES</small></a></li>
              <li className='p-1 text-white text-xl'><a href="#pricing"><small>PRICING</small></a></li>
              <li className='p-1 text-white text-xl'><a href="#contact"><small>CONTACT</small></a></li>
              <li className='p-1 text-white text-xl pt-2'><a href=""><small className=' py-[10px] px-7 border-2 border-white rounded-md'>LOGIN</small></a></li>
            </ul>
            <ul className='flex gap-2 absolute bottom-4 justify-center w-full'>
              <li className='hover:scale-[1.2] transition-all ease-in-out duration-300 cursor-pointer'><a><Image src={fb} className="w-1.5" alt=""/></a></li>
              <li className='hover:scale-[1.2] transition-all ease-in-out duration-300 cursor-pointer'><a><Image src={twt} className="w-1.5" alt=""/></a></li>
            </ul>
          </nav>

          <section className='relative'>
            <div className='flex-col-reverse flex md:flex-row items-center justify-center container py-[10rem] '>

              <div className='w-full md:w-1/2 flex flex-col gap-2 '>
                <h1 className='text-center text-2xl md:text-left md:text-3xl font-semibold text-darkBlue'>A Simple Bookmark Manager</h1>
                <p className='text-grayBlue text-center md:text-left'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                <div className='flex justify-center md:justify-start gap-1'>
                  <a href="#" className='py-[.5rem] px-1 rounded-md border-2 border-transparent text-white bg-softBlue hover:text-softBlue hover:bg-transparent hover:border-softBlue hover:shadow-md hover:shadow-[#5368df7c]transition-all ease-in-out duration-300'><small>Get it on Chrome</small></a>
                  <a href="#" className='py-[.5rem] px-1 font-semibold rounded-md text-gray-700 shadow-lg border-2 border-transparent hover:border-gray-700 hover:bg-transparent hover:text-gray-700 hover:shadow-md transition-all ease-in-out duration-300'><small>Get it on Firefox</small></a>
                </div>
              </div>

              <div className='w-full md:w-1/2 z-[1]'>
                <div className='mr-0 md:-mr-[8rem]'>
                  <Image src={mockup} className="w-full" alt=""/>
                </div>
              </div>

            </div>

            <div className="absolute w-4/5 bottom-[28rem] md:bottom-[10rem] right-0 md:w-2/5 bg-softBlue h-1/5 md:h-2/5 rounded-l-full"></div>
          </section>

          <section className='relative' id="features">
            <div className="container flex flex-col gap-3 pb-[15rem] ">
                <div className='px-1 md:px-[10rem] text-center'>
                  <h2 className='text-darkBlue text-2xl font-semibold'>Features</h2>
                  <p className='text-grayBlue'>Our aim is to make it quick and easy for you to access your favourite websites.Your bookmarks sync between your devices so you can access them on the go.</p>
                </div>

                <ul className='flex-col px-1 md:px-0 text-center md:text-left flex md:flex-row justify-between md:mx-[10rem] border-2 border-b-gray-200 border-t-0 border-l-0 border-r-0'>
                  <li className='border-2 border-b-softRed border-gray-100 p-1 hover:text-softRed cursor-pointer transition-all ease-in-out duration-300 tab1'><a>Simple Bookmarking</a></li>
                  <li className='border-2 border-gray-100 p-1 hover:text-softRed cursor-pointer transition-all ease-in-out duration-300 tab2'><a>Speedy Searching</a></li>
                  <li className='border-2 border-gray-100 p-1 hover:text-softRed cursor-pointer transition-all ease-in-out duration-300 tab3'><a>Easy Sharing</a></li>
                </ul>

                <div className='flex relative h-[23rem]'>

                  <div className='w-full flex items-center z-10 gap-1 absolute top-0 tab1-div transition-all ease-in-out duration-300 flex-col md:flex-row px-2 md:px-0'>
                    <div className='w-5/5 md:w-3/5 md:pr-3'>
                      <Image src={tab1} className="w-[95%]" alt=""/>
                    </div>
                    <div className='w-5/5 md:w-2/5 flex flex-col gap-1 pt-4 md:pt-0'>
                      <h3 className='text-center md:text-left text-2xl font-semibold text-darkBlue'>Bookmark in one click</h3>
                      <p className='text-center md:text-left text-grayBlue'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                      <div>
                        <a href="#" className='hidden py-[.5rem] px-1.5 rounded-md text-white bg-softBlue md:inline-block border-2 border-transparent hover:text-softBlue hover:bg-transparent hover:border-softBlue hover:shadow-md hover:shadow-[#5368df7c] transition-all ease-in-out duration-300'><small>More Info</small></a>
                      </div>

                    </div>
                  </div>
                  <div className='w-full flex items-center gap-1 absolute top-0 tab2-div z-10 translate-x-[80rem] transition-all ease-in-out duration-300 flex-col md:flex-row px-2 md:px-0'>
                    <div className='w-5/5 md:w-3/5 md:pr-3'>
                      <Image src={tab2} className="w-[95%]" alt=""/>
                    </div>
                    <div className='w-5/5 md:w-2/5 flex flex-col gap-1 pt-4 md:pt-0'>
                      <h3 className='text-center md:text-left text-2xl font-semibold text-darkBlue'>Intelligent search</h3>
                      <p className='text-center md:text-left text-grayBlue'>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                      <div>
                        <a href="#" className='hidden py-[.5rem] px-1.5 rounded-md text-white bg-softBlue md:inline-block border-2 border-transparent hover:text-softBlue hover:bg-transparent hover:border-softBlue hover:shadow-md hover:shadow-[#5368df7c] transition-all ease-in-out duration-300'><small>More Info</small></a>
                      </div>

                    </div>
                  </div>
                  <div className='w-full flex items-center z-10 gap-1 absolute top-0 tab3-div translate-x-[80rem] transition-all ease-in-out duration-300 flex-col md:flex-row px-2 md:px-0'>
                    <div className='w-5/5 md:w-3/5 md:pr-3'>
                      <Image src={tab3} className="w-[95%]" alt=""/>
                    </div>
                    <div className='w-5/5 md:w-2/5 flex flex-col gap-1 pt-4 md:pt-0'>
                      <h3 className='text-center md:text-left text-2xl font-semibold text-darkBlue'>Share your bookmarks</h3>
                      <p className='text-center md:text-left text-grayBlue'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                      <div>
                        <a href="#" className='hidden py-[.5rem] px-1.5 rounded-md text-white bg-softBlue md:inline-block border-2 border-transparent hover:text-softBlue hover:bg-transparent hover:border-softBlue hover:shadow-md hover:shadow-[#5368df7c] transition-all ease-in-out duration-300'><small>More Info</small></a>
                      </div>

                    </div>
                  </div>

                </div>
            </div>
            <div className="absolute w-4/5 bottom-[23rem] md:bottom-[10rem] left-0 md:w-2/5 bg-softBlue h-1/5 md:h-2/5 rounded-r-full"></div>
          </section>


          <section className='container flex flex-col gap-1 py-[10rem]' id="pricing">

            <div className='px-1 md:px-[10rem] text-center'>
              <h2 className='text-darkBlue text-2xl font-semibold'>Download the extension</h2>
              <p className='text-grayBlue'>We’ve got more browsers in the pipeline. Please do let us know if you’ve
          got a favourite you’d like us to prioritize.</p>
            </div>

            <div className='flex-col px-2 md:px-0 flex md:flex-row gap-1 md:gap-2 py-5'>

              <div className="shadow-lg p-2 flex flex-col gap-2 justify-center items-center h-fit">
                <Image src={chrome} className="w-2/5" alt=""/>
                <div className='text-center'>
                  <h4 className='text-xl font-semibold text-darkBlue'>Add to Chrome</h4>
                  <small className='text-grayBlue'>Minimum version 62</small>
                </div>

                <div className='flex flex-col gap-1.5 justify-center items-center'>
                  <Image src={dots} className="w-full" alt=""/>
                  <a href="#" className='py-[.8rem] px-1 rounded-md text-white bg-softBlue w-full text-center border-2 border-transparent hover:text-softBlue hover:bg-transparent hover:border-softBlue hover:shadow-md hover:shadow-[#5368df7c]transition-all ease-in-out duration-300'><small>Add & Install Extension</small></a>
                </div>
              </div>
              <div className="shadow-lg p-2 flex flex-col gap-2 justify-center items-center md:mt-6 h-fit">
                <Image src={firefox} className="w-2/5" alt=""/>
                <div className='text-center'>
                  <h4 className='text-xl font-semibold text-darkBlue'>Add to Firefox</h4>
                  <small className='text-grayBlue'>Minimum version 55</small>
                </div>

                <div className='flex flex-col gap-1.5 justify-center items-center'>
                  <Image src={dots} className="w-full" alt=""/>
                  <a href="#" className='py-[.8rem] px-1 rounded-md text-white bg-softBlue w-full text-center border-2 border-transparent hover:text-softBlue hover:bg-transparent hover:border-softBlue hover:shadow-md hover:shadow-[#5368df7c]transition-all ease-in-out duration-300'><small>Add & Install Extension</small></a>
                </div>
              </div>
              <div className="shadow-lg p-2 flex flex-col gap-2 justify-center items-center md:mt-[9rem]">
                <Image src={opera} className="w-2/5" alt=""/>
                <div className='text-center'>
                  <h4 className='text-xl font-semibold text-darkBlue'>Add to Opera</h4>
                  <small className='text-grayBlue'>Minimum version 46</small>
                </div>

                <div className='flex flex-col gap-1.5 justify-center items-center'>
                  <Image src={dots} className="w-full" alt=""/>
                  <a href="#" className='py-[.8rem] px-1 rounded-md text-white bg-softBlue w-full text-center border-2 border-transparent hover:text-softBlue hover:bg-transparent hover:border-softBlue hover:shadow-md hover:shadow-[#5368df7c]transition-all ease-in-out duration-300'><small>Add & Install Extension</small></a>
                </div>
              </div>

            </div>

          </section>



          <section className='container flex flex-col pb-[10rem] px-1 md:px-[10rem] divide-y-2 divide-gray-300' id="contact">

            <div className='flex flex-col gap-1 text-center mb-3'>
              <h2 className='text-darkBlue text-2xl font-semibold'>Frequently Asked Questions</h2>
              <p className='text-grayBlue'>Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.</p>
            </div>

            <div>
              <div className='accordion-question p-1 flex justify-between items-center cursor-pointer hover:text-softRed transition-all ease-in-out duration-300'>
                <p>What is Bookmark?</p>
                <Image src={arrow} alt=""/>
              </div>
              <p className='hidden text-grayBlue py-2 px-1 answer cursor-pointer'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
              </p>
            </div>

            <div>
              <div className='accordion-question p-1 flex justify-between items-center cursor-pointer hover:text-softRed transition-all ease-in-out duration-300'>
                <p>How can I request a new browser?</p>
                <Image src={arrow} alt=""/>
              </div>
              <p className='hidden text-grayBlue py-2 px-1 answer cursor-pointer'>
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
              </p>
            </div>

            <div>
              <div className='accordion-question p-1 flex justify-between items-center cursor-pointer hover:text-softRed transition-all ease-in-out duration-300'>
                <p>Is there a mobile app?</p>
                <Image src={arrow} alt=""/>
              </div>
              <p className='hidden text-grayBlue py-2 px-1 answer cursor-pointer'>
                Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
                urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                sollicitudin ex et ultricies bibendum.
              </p>
            </div>


            <div>
              <div className='accordion-question p-1 flex justify-between items-center cursor-pointer hover:text-softRed transition-all ease-in-out duration-300'>
                <p>What about other Chromium browsers?</p>
                <Image src={arrow} alt=""/>
              </div>

              <p className='hidden text-grayBlue py-2 px-1 answer cursor-pointer'>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
              vitae neque eget nisl gravida pellentesque non ut velit.
              </p>
            </div>


            <div className='flex justify-center items-center'>
              <a href="#" className='py-[.5rem] px-1.5 rounded-md text-white bg-softBlue inline-block mt-3 border-2 border-transparent hover:text-softBlue hover:bg-transparent hover:border-softBlue hover:shadow-md hover:shadow-[#5368df7c]transition-all ease-in-out duration-300'><small>More Info</small></a>
            </div>
          </section>

          <footer>

            <div className='bg-softBlue'>
              <div className="py-4 flex flex-col items-center gap-2 px-1 md:px-[10rem] container ">
                <small className='uppercase tracking-widest text-white'>35,000+ already joined</small>
                <h2 className='text-center md:text-left text-2xl text-white'>Stay up-to-date with what we’re doing</h2>
                <form className='flex-col flex md:flex-row gap-1 w-full px-1 md:px-3'>
                  <input type="email" className='outline-none py-[.8rem] px-1.5 rounded-md w-5/5 md:w-4/5' placeholder='Enter your email address' required/>
                  <button type="submit" className='py-[.5rem] px-1 rounded-md text-white bg-softRed w-5/5 md:w-1/5 flex justify-center items-center border-2 border-transparent hover:bg-gray-200 hover:text-softRed hover:border-softRed hover:bg-transparent hover:shadow-md transition-all ease-in-out duration-300'><small>Contact Us</small></button>
                </form>
              </div>
            </div>

            <div className='bg-darkBlue'>
              <div className='flex-col flex md:flex-row justify-between container items-center py-2 gap-2 md:gap-0'>
                <div className='flex-col flex md:flex-row gap-2 md:gap-3'>
                  <a><svg width="148" height="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M37 6.299h5.227c.746 0 1.434.155 2.062.466.629.311 1.123.735 1.484 1.27s.542 1.12.542 1.754c0 .672-.165 1.254-.495 1.746-.33.491-.762.868-1.297 1.129v.15c.697.248 1.25.643 1.661 1.185.41.541.616 1.191.616 1.95 0 .735-.196 1.385-.588 1.951a3.817 3.817 0 0 1-1.587 1.307c-.665.305-1.403.457-2.212.457H37V6.299zm5.04 5.45c.548 0 .986-.152 1.316-.457.33-.305.495-.688.495-1.148 0-.448-.159-.824-.476-1.13-.318-.304-.738-.457-1.26-.457H39.52v3.192h2.52zm.28 5.619c.61 0 1.086-.159 1.428-.476.342-.317.513-.731.513-1.241 0-.51-.174-.927-.522-1.251-.349-.324-.847-.485-1.494-.485H39.52v3.453h2.8zm12.927 2.595c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.511-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.915-3.528a6.711 6.711 0 0 1 2.51-2.529C52.756 6.308 53.94 6 55.248 6c1.306 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.915 3.528a6.711 6.711 0 0 1-2.51 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.258-.578 4.177 4.177 0 0 0 1.615-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.615-1.624 4.52 4.52 0 0 0-2.258-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.605 1.624 4.47 4.47 0 0 0 2.25.578zm15.353 2.39c-1.307 0-2.492-.308-3.556-.924a6.711 6.711 0 0 1-2.51-2.53c-.61-1.07-.915-2.246-.915-3.528 0-1.281.305-2.457.914-3.528a6.711 6.711 0 0 1 2.511-2.529C68.108 6.308 69.294 6 70.6 6c1.307 0 2.492.308 3.556.924a6.711 6.711 0 0 1 2.51 2.53c.61 1.07.915 2.246.915 3.527 0 1.282-.305 2.458-.914 3.528a6.711 6.711 0 0 1-2.511 2.53c-1.064.616-2.25.924-3.556.924zm0-2.39a4.52 4.52 0 0 0 2.259-.578 4.177 4.177 0 0 0 1.614-1.624c.392-.697.588-1.494.588-2.39 0-.896-.196-1.692-.588-2.389a4.177 4.177 0 0 0-1.614-1.624 4.52 4.52 0 0 0-2.259-.579 4.47 4.47 0 0 0-2.25.579 4.195 4.195 0 0 0-1.605 1.624c-.392.697-.588 1.493-.588 2.39 0 .895.196 1.692.588 2.389a4.195 4.195 0 0 0 1.606 1.624 4.47 4.47 0 0 0 2.249.578zM79.83 6.3h2.52v5.73h.15l4.89-5.73h3.043v.149L85.6 11.973l5.338 7.542v.149h-3.08l-3.994-5.693-1.512 1.773v3.92h-2.52V6.299zM93.779 6h3.248l3.546 9.39h.15L104.268 6h3.267v13.365h-2.501v-6.589l.15-2.221h-.15l-3.398 8.81h-1.96l-3.416-8.81h-.149l.15 2.221v6.59h-2.483V6zm20.8 0h2.894l5.021 13.365h-2.781l-1.12-3.192h-5.115l-1.12 3.192h-2.781L114.579 6zm3.193 7.859l-1.176-3.36-.486-1.606h-.149l-.485 1.606-1.195 3.36h3.49zM124.553 6h4.872c.871 0 1.646.18 2.324.541.678.361 1.204.862 1.577 1.503.374.64.56 1.366.56 2.175 0 .858-.27 1.62-.812 2.286a4.617 4.617 0 0 1-2.044 1.447l-.018.13 3.584 5.134v.15h-2.894l-3.453-5.022h-1.176v5.021h-2.52V6zm4.853 6.03c.573 0 1.04-.175 1.4-.523.361-.349.542-.79.542-1.326 0-.51-.172-.945-.514-1.306-.342-.361-.806-.542-1.39-.542h-2.371v3.696h2.333zm7.23-6.03h2.52v5.73h.15l4.89-5.73h3.043v.15l-4.835 5.525 5.34 7.541v.15h-3.08l-3.996-5.694-1.512 1.773v3.92h-2.52V6z" fill="white" fill-rule="nonzero"/><g><circle fill="#5267DF" cx="12.5" cy="12.5" r="12.5"/><path d="M9 9v10l3.54-3.44L16.078 19V9a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2z" fill="#FFF"/></g></g></svg></a>

                  <ul className='flex-col flex md:flex-row items-center justify-center gap-1 md:gap-3 text-white'>
                    <li><a href="#" className=' hover:text-softRed cursor-pointer transition-all ease-in-out duration-300'><small>FEATURES</small></a></li>
                    <li><a href="#" className=' hover:text-softRed cursor-pointer transition-all ease-in-out duration-300'><small>PRICING</small></a></li>
                    <li><a href="#" className=' hover:text-softRed cursor-pointer transition-all ease-in-out duration-300'><small>CONTACT</small></a></li>
                  </ul>
                </div>

                <ul className='flex gap-2'>
                  <li className='hover:scale-[1.2] transition-all ease-in-out duration-300 cursor-pointer'><a><Image src={fb} className="w-1.5" alt=""/></a></li>
                  <li className='hover:scale-[1.2] transition-all ease-in-out duration-300 cursor-pointer'><a><Image src={twt} className="w-1.5" alt=""/></a></li>
                </ul>
              </div>
            </div>


            <div className='text-center py-[1px] bg-softBlue shadow-inner shadow-darkBlue'>
              <small className='text-darkBlue font-medium'><a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='hidden md:inline-block'>
                Challenge by Frontend Mentor. </a>
                 Coded by <a href="https://robindc.vercel.app/" className='text-darkBlue font-bold' target="_blank">@robindelacruz.</a>
              </small>
            </div>

          </footer>
        </div>

      </main>
    </div>
  )
}
