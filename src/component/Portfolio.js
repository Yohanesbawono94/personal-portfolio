import React, { Component } from 'react';
import '../App.css';
import drummachine from './logo/drummachine.png';
import romanconverter from './logo/romanconverter.png';
import quotegenerator from './logo/quotegenerator.png';
import markdown from './logo/markdown.png';

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio" className="container-fluid">
                <div id="portfolio-container">
                    <div id="app-container">
                        <div id="desc-portfolio">Drum Machine</div>
                        <img src={drummachine} alt="drum machine app"/>
                        <a href="https://yohanesbawono94.github.io/drum-machine">
                            <button type="button" class="btn btn-warning btn-lg">Try it</button>
                        </a>
                    </div>
                    <div id="app-container">
                        <div id="desc-portfolio">Roman Number Converter</div>
                        <img src={romanconverter} alt="roman converter app"/>
                        <a href="https://Yohanesbawono94.github.io/roman-number-converter">
                            <button type="button" class="btn btn-warning btn-lg">Try it</button>
                        </a>
                    </div>
                    <div id="app-container">
                        <div id="desc-portfolio">Random Quote Generator</div>
                        <img src={quotegenerator} alt="random quote app"/>
                        <a href="https://yohanesbawono94.github.io/quote-generator">
                            <button type="button" class="btn btn-warning btn-lg">Try it</button>
                        </a>
                    </div>
                    <div id="app-container">
                        <div id="desc-portfolio">Markdown Previewer</div>
                        <img src={markdown} alt="markdown previewer app"/>
                        <a href="https://Yohanesbawono94.github.io/markdown-previewer">
                            <button type="button" class="btn btn-warning btn-lg">Try it</button>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;