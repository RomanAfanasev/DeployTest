import React, { useState } from 'react';
//import logo from '../images/flytech6.svg';
import WorkModal from './for-new-template/WorkModal';
import ContactModal from './for-new-template/ContactModal';

export default function NewTemplate() {

    //For hidden items
    const [showResultsWork, setShowResultsWork] = React.useState(false)
    const onClickWork = () => setShowResultsWork(!showResultsWork)

    const [showResultsContact, setShowResultsContact] = React.useState(false)
    const onClickContact = () => setShowResultsContact(!showResultsContact)


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
                            <a 
                                onClick={onClickContact} href="#contact">
                                Contact
                            </a>
                        </li>
                        <li><a 
                            onClick={onClickWork} href="#work">
                            Work
                        </a>
                        </li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main */}
            <div id="main">

                {/* Contact  */}                
                {showResultsContact ? <ContactModal /> : null}

                {/* Work  */}
                {showResultsWork ? <WorkModal /> : null}

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