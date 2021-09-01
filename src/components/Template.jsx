import React, { useState } from 'react';
//import logo from '../images/flytech6.svg';
import WorkModal from './for-new-template/WorkModal';

export default function NewTemplate() {

    //For hidden items
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(!showResults)


    return (
        // Wrapper
        <div id="wrapper">

            {/* Header  */}
            <header id="header">
                <div className="logo">
                </div>
                <div className="content">
                    <div className="inner">
                        <h1>Умная автоматизация Вашего бизнеса</h1>
                        <p>Точечные решения, автоматизация бизнес кейсов, <br />
                            разработка программного обеспечения</p>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#intro">
                                Intro
                            </a>
                        </li>
                        <li><a aria-controls="video-modal-intro"
                            onClick={onClick} href="#work">
                                Work
                            </a>
                        </li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main */}
            <div id="main">

                {/* Intro  */}
                {/* <article id="intro">
                    <h2 className="major">Intro</h2>
                    <span className="image main"><img src="images/pic01.jpg" alt="" /></span>
                    <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                </article> */}

                {/* Work  */}
                {/* <article id="work">
                    <h2 className="major">Work</h2>
                    <span className="image main"><img src="images/pic02.jpg" alt="" /></span>
                    <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
                </article> */}
                { showResults ? <WorkModal /> : null }

                {/* About */}
                {/* <article id="about">
                    <h2 className="major">About</h2>
                    <span className="image main"><img src="images/pic03.jpg" alt="" /></span>
                    <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
                </article> */}

            </div>

            {/* Footer */}
            <footer id="footer">
                <p className="copyright">&copy; FlyTech.</p>
            </footer>

        </div>

    );
}