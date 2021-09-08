import React, { useState } from 'react';
//import logo from '../images/flytech6.svg';
import WorkModal from './for-new-template/WorkModal';
import ContactModal from './for-new-template/ContactModal';
import AboutModal from './for-new-template/AboutModal';

export default function NewTemplate() {

    //For hidden items
    const [showResultsContact, setShowResultsContact] = React.useState(false)
    //const onClickContact = () => setShowResultsContact(!showResultsContact)
    const onClickContact = function () {
        setShowResultsContact(!showResultsContact);
        setShowResultsWork(false);
        setShowResultsAbout(false);

    }

    const [showResultsWork, setShowResultsWork] = React.useState(false)
    //const onClickWork = () => setShowResultsWork(!showResultsWork)
    const onClickWork = function(){
        setShowResultsContact(false);
        setShowResultsWork(!showResultsWork);
        setShowResultsAbout(false);
    }

    const [showResultsAbout, setShowResultsAbout] = React.useState(false)
    //const onClickAbout = () => setShowResultsAbout(!showResultsAbout)
    const onClickAbout = function(){
        setShowResultsContact(false);
        setShowResultsWork(false);
        setShowResultsAbout(!showResultsAbout);
    }

    const onClickMain = function () {
        setShowResultsContact(false);
        setShowResultsWork(false);
        setShowResultsAbout(false);
    }


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
                                onClick={onClickContact} >
                                Contact
                            </a>
                        </li>
                        <li><a
                            onClick={onClickWork} >
                            Work
                        </a>
                        </li>
                        <li><a onClick={onClickAbout} >About</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main */}
            <div id="main" onClick={onClickMain}>

                {/* Contact  */}
                {showResultsContact ? <ContactModal /> : null}

                {/* Work  */}
                {showResultsWork ? <WorkModal /> : null}

                {/* About */}
                {showResultsAbout ? <AboutModal /> : null}

            </div>

            {/* Footer */}
            <footer id="footer">
                <p className="copyright">&copy; FlyTech.</p>
            </footer>

        </div>

    );
}