import React from 'react';
import logo from './1stblog.jpg';
import logo1 from './2nd.jpg';
import logo2 from './3rd.jpg';

import './Main.css';

const Main = () => {
    return (
        <div className="Main">
            <table className="table">
                <td>
                    <div className="Blog">
                        <h2><a href="https://blogs.usafootball.com/blog/7684/parents-should-decide-if-their-kids-should-play-football">
                            Parents Should Decide If Their Kids Should Play Football</a></h2>
                        <h5>11/19/2019</h5>
                        <img src={logo} className="App-logo" alt="logo" />

                        <p>
                            My son Bradley fell in love with football at an early age and started playing youth tackle
                            football at the age of four. There’s been no turning back and after two years of middle school
                             football, he will get his first taste of high school football next year.
                            I’ve written about this in the past, but there are still people who come up to my
                             wife Sheryl and I and say “why do you let your son play football? It’s so dangerous?”

                                 Well, our son plays football because he loves it and wants to. And while I hate to give a scouting
                              report on my own son, I’ll just say that he’s had a lot of success playing center in youth football,
                              USA Football’s Middle School Bowl Game Series and middle school football. While I’ll leave the actual breakdown
                                of his game to the coaches, the fact is that he loves to play and is apparently pretty good at it.
                </p>
                    </div>
                </td>

                <td>
                    <div className="Blog">
                        <h2><a href="https://tripandtravelblog.com/how-to-discover-the-delights-of-portland-right-now/">
                            How to Discover the Delights of Portland Right Now</a></h2>
                        <h5>11/21/2019</h5>
                        <img src={logo1} className="App-logo" alt="logo" />

                        <p>
                            You need to make sure you plan your next vacation as well as you can. One of the best things you
                             can do to achieve this is to choose the best possible destination. Portland, Oregon is one of the best-kept
                              secrets in the United States, and a place that demands discovery right now.
                             So, you need to make sure you choose this city as your next destination for taking a vacation right now.

                            If you are serious about experiencing the delights of Portland as much as possible then you are going to need
                             to plan your adventure out. This means working out what it takes to get the best possible outcome from your trip.
                              So, you are going to need to plan and prepare in advance to ensure that you discover the delights of Portland in
                              the best way you possibly can; here are a few of the best ways to do that.
                </p>

                    </div>
                </td>

                <td>
                    <div className="Blog">
                        <h2><a href="https://tripandtravelblog.com/tips-on-traveling-with-babies/">
                            Tips On Traveling With Babies</a></h2>
                        <h5>11/19/2019</h5>
                        <img src={logo2} className="App-logo" alt="logo" />

                        <p>The idea of traveling with a child especially toddlers can be frightening. The stress of
                         preparing for your trip alongside considering your baby stressing you are out during your trip.
                         This can be quite overwhelming especially for families with two or more kids. Here are some helpful
                         tips that will make your trip stress free.
                         You must pack all that your baby will need during the trip. You can double pack just to be sure.
                         Most people believe that while traveling kids require a lot of items.
                          You must pack just what is essential for the trip. Here are a few things you can double-check.
                          The formula, diaper, bottles, baby food, snacks, and some cloth change.
                </p>
                    </div>
                </td>



            </table>
        </div>
    );
}

export default Main;