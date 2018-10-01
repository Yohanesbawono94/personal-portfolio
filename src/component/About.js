import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../App.css';
import gamer from './logo/gamer.png';
import html5 from './logo/html5.png';
import css3 from './logo/css3.png';
import javascript from './logo/javascript.png';
import react from './logo/react.png';
import bootstrap from './logo/bootstrap.png';
import git from './logo/git.png';
import ball from './logo/ball.png';
import book from './logo/book.png';
import television from './logo/television.png';
import music from './logo/music.png';
import milk from './logo/milk.svg';
import ear from './logo/ear.svg';
import food from './logo/food.png';
import shy from './logo/shy.png';
import nosmoking from './logo/nosmoking.png';

class About extends Component {
  render() {
    return (
    <div>    
        <section id="about" className="container-fluid">
                <div id="desc" className="col-sm-12 text-center">
                    My name is Yohanes Pamungkas Bawono, everyone calls me Yohan.
                    I'm an aspiring front-end developer who aims to be a profesional.
                    My approach of work inspired by Pele, the legend of football, who once said: 
                    "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice 
                    and most of all, love of what you are doing."
                </div>
        </section>

        <section id="about-edu" className="container-fluid">
            <div id="desc-edu-title">
                <div className="col-sm-12 text-center">
                    <strong>Education</strong>
                </div>
            </div>
            <div id="desc-edu">
                <div className="col-sm-12 text-center">
                    Loyola College High School<br/>
                    Semarang City, Central Java, Indonesia<br/>
                    2009-2012
                </div>
            </div>
            <div id="desc-edu">
                <div className="col-sm-12 text-center">
                    Diponegoro University (UNDIP)<br/>
                    Bachelor of Fisheries in Aquaculture (S.Pi)<br/>
                    Semarang City, Central Java, Indonesia<br/>
                    2012-2016
                </div>
            </div>
            <div id="desc-edu-title">
                <div className="col-sm-12 text-center">
                    <strong>Contact</strong>
                </div>
            </div>
            <div id="desc-edu">
                <div className="email col-sm-12 text-center">
                    <div value={this.props.email}>Email : {this.props.email}</div> 
                    <CopyToClipboard text={this.props.email}>
                        <button onClick={this.props.onCopied} data-toggle="tooltip" data-placement="right" title="copy this email" className="btn btn-warning">
                            <i class="fas fa-copy"></i>
                        </button>
                    </CopyToClipboard>
                </div>
            </div>
            <div id="desc-edu-title">
                <div className="col-sm-12 text-center">
                    <div className="icons">
                        <div class="icon-contact">
                            <a data-toggle="tooltip" title="Twitter" data-placement="top" href="https://twitter.com/Haness_">
                                <i class="fab fa-twitter-square"></i>
                            </a>
                        </div>
                        <div class="icon-contact">
                            <a data-toggle="tooltip" title="Facebook" data-placement="top" href="https://www.facebook.com/Yohan.Pow">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                        </div>
                        <div class="icon-contact">
                            <a data-toggle="tooltip" title="Github" data-placement="top" href="https://www.github.com/Yohanesbawono94">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>  
            </div>
        </section>

        <section id="about-skill" className="container-fluid">
                <div id="desc-skill-title" className="col-sm-12 text-center">
                    <strong>Skills</strong>
                </div>
                <div className="list-skills">
                    <div className="list-skills-1">
                        <div className="skill">
                            <img width="115" alt="HTML5 logo and wordmark" src={html5}/>
                        </div>
                        <div className="skill">
                            <img width="90" alt="CSS3 logo and wordmark" src={css3}/>
                        </div>
                        <div className="skill">
                            <img width="100" alt="JavaScript-logo" src={javascript}/>
                        </div>
                    </div>
                    <div className="list-skills-2">
                        <div className="skill">
                            <img width="180" alt="React-icon" src={react}/>
                        </div>
                        <div className="skill">
                            <img width="100" alt="Boostrap logo" src={bootstrap}/>
                        </div>
                        <div className="skill">
                            <img width="100" alt="Git logo" src={git}/>
                        </div>
                    </div>
                </div>
        </section>

        <section id="about-me" className="container-fluid">
            <div id="desc-me-title" className="col-sm-12 text-center">
                I'm not good at describing myself, but there are 10 facts about me:
            </div>
            <div>
                <div id="desc-me" className="col-sm-12 text-center">
                    <div>
                        <h2>1. Gamer</h2>
                        <img alt="joystick" width="100" src={gamer}/>
                    </div>
                    <div>
                        I'm a hard gamer, mostly I play offline games which have complex stories, lores, characters and dialogues. Such as Dragon Age, Mass Effect, Skyrim. And for online games, I recently play PUBG.
                    </div>
                </div> 
            </div>
            <div>
                <div id="desc-me" className="col-sm-12 text-center">
                    <div>
                        <h2>2. Football enthusiast</h2>
                        <img alt="ball" width="100" src={ball}/>
                    </div>
                    <div>
                    I love football. Back in High School I joined football team, then in College I used to play futsal every week, and now I'm still following football news especially european leagues. My favorite teams are Barcelona FC and Borussia Dortmund.
                    </div>
                </div> 
            </div>
            <div>
                <div id="desc-me" className="col-sm-12 text-center">
                    <div>
                        <h2>3. Bookworm</h2>
                        <img alt="book" width="120" src={book}/>
                    </div>
                    <div>
                    My favorite genre are fantasy stories written by J.K. Rowling or Rick Riordan, also mystery-crime stories written by Agatha Christie, Sir Arthur Conan Doyle or Sidney Sheldon. I like any other genre/subject too. Reading makes me feel good.
                    </div>
                </div> 
            </div>
            <div>
                <div id="desc-me" className="col-sm-12 text-center">
                    <div>
                        <h2>4. Anime / manga lover</h2>
                        <img alt="televison box" width="100" src={television}/>
                    </div>
                    <div>
                    I'm following One Piece, One-Punch Man, Tokyo Ghoul, Attack on Titan and Overlord right now. Let me know if you have any other recommendations :)
                    </div>
                </div> 
            </div>
            <div>
                <div id="desc-me" className="col-sm-12 text-center">
                    <div>
                        <h2>5. Coldplayer</h2>
                        <img alt="headset" width="100" src={music}/>
                    </div>
                    <div>
                    I can listen Coldplay's songs every day. Whenever I got down, have a bad day, or.. you know... when life happens, I listen to Coldplay and it can rejuvenate me, ressurect me, burn me up and inspire me to conquer the world!
                    </div>
                </div> 
            </div>
            <div>
                <div id="desc-me" className="col-sm-12 text-center">
                    <div>
                        <h2>6. Milk holic</h2>
                        <img alt="cow" width="150" src={milk}/>
                    </div>
                    <div>
                    I like milks, it's healthy!
                    </div>
                </div> 
            </div>
            <div>
                <div id="desc-me" className="col-sm-12 text-center">
                    <div>
                        <h2>7. Big eater</h2>
                        <img alt="cake" width="130" src={food}/>
                    </div>
                    <div>
                    I eat like Dementors devouring human's souls, or a Panda swallowing 10 hectares of bamboos forest. You may not believe it, but you know what.. it's a gift. Because I can eat much and gain no weight ;)
                    </div> 
                </div> 
            </div>
            <div>
                <div id="desc-me" className="col-sm-12 text-center">
                    <div>
                        <h2>8. I can do magic with my ear</h2>
                        <img alt="ear" width="100" src={ear}/>
                    </div>
                    <div>
                    I can move it without even touching it! pretty cool isn't it?
                    </div>
                </div> 
            </div>
            <div>
                <div id="desc-me" className="col-sm-12 text-center">
                    <div>
                        <h2>9. Shy person</h2>
                        <img alt="shy person" width="100" src={shy}/>
                    </div>
                    <div>
                    I am a shy guy, it's true.
                    </div>
                </div> 
            </div>
            <div>
                <div id="desc-me" className="col-sm-12 text-center">
                    <div>
                        <h2>10. Not a smoker</h2>
                        <img alt="no smoking warning" width="100" src={nosmoking}/>
                    </div>
                    <div>
                    I was born with a healthy lungs and I don't want to ruin it.
                    </div>
                </div> 
            </div>
        </section>
    </div>
    );
  }
}

export default About;