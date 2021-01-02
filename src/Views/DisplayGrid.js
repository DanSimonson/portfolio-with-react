import React, { useEffect } from 'react'
import './DisplayGrid.scss'
import DisplayFooter from '../Components/Footer/DisplayFooter'
import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink, Link } from 'react-router-dom'
function DisplayGrid() {
    let cards = [
        {
            id: '1',
            title: 'Philippine Seafarers Union - PSU',
            content: 'I created a rich text editor and document control system, allowing the Philippine Seafarers Union to better track their members.',
            src: 'https://fakeimg.pl/400x300/009578/fff/',
        },
        {
            id: '2',
            title: 'Macys',
            content: 'I helped develep a web application allowing Macy\'s employees to track logistical shipping data for products sent to Macy\'s Backstage stores.',
            src: 'https://fakeimg.pl/400x300/009578/fff/',
        },
        {
            id: '3',
            title: 'Monsanto',
            content: 'Primary Front End Developer creating a sales dashboard allowing Monsanto to organize and track their farm business partners.',
            src: 'https://fakeimg.pl/400x300/009578/fff/',
        },
        {
            id: '4',
            title: 'auctionOS',
            content: 'Full-Stack Developer updating auctionos.com\'s operating system for car auctions.',
            src: 'https://fakeimg.pl/400x300/009578/fff/',
        },
        {
            id: '5',
            title: 'Next Egg',
            content: 'The next egg hatched could be your business. Call or Email me for more information.',
            src: 'https://fakeimg.pl/400x300/009578/fff/',
        },
        /*{
            id: '6',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.',
            src: 'https://fakeimg.pl/400x300/009578/fff/',
        }*/
    ]
    useEffect(() => {
        const cardElement = document.querySelector(".card__inner");
        const toggleButton = document.getElementsByClassName('displaygrid_toggle_button')[0]
        const navbarLinks = document.getElementsByClassName('displaygrid_navbar_links')[0]
        cardElement.addEventListener("click", function (e) {
            cardElement.classList.toggle('is-flipped');
        });
        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        })
    }, [])

    return (
        <React.Fragment>
            <div className='bodyWrap'>
                <div className='heroImage'>
                    <div className='bg-image'></div>
                </div>
                <nav className='displaygrid_navbar'>
                    <div className='displaygrid_brand_title'>
                        MARIPOSAWEB
                    </div>
                    <a href='#' className='displaygrid_toggle_button'>
                        <span className='displaygrid_bar'></span>
                        <span className='displaygrid_bar'></span>
                        <span className='displaygrid_bar'></span>
                    </a>
                    <div className='displaygrid_navbar_links'>
                        <ul>
                            {/*<li><a href='#'>Home</a></li>*/}
                            <NavLink to='/' className='displaygrid_navlink'
                                activeClassName='displaygrid_navlink_active'>
                                Home
                            </NavLink>
                            <NavLink to='/blog' className='displaygrid_navlink'
                                activeClassName='displaygrid_navlink_active'>
                                Blog
                            </NavLink>
                            {/*<li><a href='#'>Blog</a></li>*/}
                        </ul>
                    </div>
                </nav>
                <div className='accomplishments'>
                    <h1>Contracting </h1>
                    <h1> Accomplishments</h1>
                    <h5 className='paragraph'>Focusing on web and application development, I have leveraged my years of experience to help my clients achieve their goals. </h5>
                </div>
                <div className="card_outer">
                    <div className="card__inner">
                        <div className="card__face card__face--front">
                            <div className="card__content">
                                <div className="card__body">
                                    <h3>Front End developer</h3>
                                    <p>I have many Years of experince using JavaScript, React, Vue and CSS to create beautiful websites and UI elements for my clients</p>
                                    <p className='more'>Click To See More</p>
                                </div>
                            </div>

                        </div>
                        <div className="card__face card__face--back">
                            <div className="card__content">
                                <div className="card__body">
                                    <h3>Back End Developer</h3>
                                    <p>I am a full-stack developer skilled in the use of Node, MongoDB, and Express. I have used my knowledge to help many clients who needed help creating and consuming API's</p>
                                    <p className='more'>Click To See More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="display-container">
                    {cards.map((card, index) => (
                        <ScrollAnimation
                            delay={400}
                            duration={3}
                            initiallyVisible={false}
                            animateIn='tada'>
                            <div key={card.id} className="display-card">

                                {/*<img className="display-image"  src="https://fakeimg.pl/400x300/009578/fff/" alt="card image"/>*/}
                                {/*<div className='display-image'></div>*/}
                                <div className='display-content'>
                                    <h3>{card.title}</h3>
                                    <p>{card.content}</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
                <DisplayFooter />
            </div>

        </React.Fragment>
    )
}


export default DisplayGrid

