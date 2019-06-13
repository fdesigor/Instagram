import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component{
    render(){
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Igor Fernandes</span>
                            <span className="place">Caraúbas, Rio Grande do Norte</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://fotografiatododia.com.br/wp-content/uploads/2016/04/7-fotografos-de-paisagem-para-seguir-no-instagram.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Curtir" />
                            <img src={comment} alt="Comentar" />
                            <img src={send} alt="Enviar" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Uma imagem...
                            <span>#react #oministack</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Igor Fernandes</span>
                            <span className="place">Caraúbas, Rio Grande do Norte</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://fotografiatododia.com.br/wp-content/uploads/2016/04/7-fotografos-de-paisagem-para-seguir-no-instagram.jpg" alt="" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Curtir" />
                            <img src={comment} alt="Comentar" />
                            <img src={send} alt="Enviar" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Uma imagem...
                            <span>#react #oministack</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    };
}

export default Feed;