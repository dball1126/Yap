import GreetingContainer from './greeting_container';
import React from 'react';

const homepage = () => {
    
    return (
        <div>
            <div className="main-header">
                <div className="main-header-container">
                    <a href="https://help10.herokuapp.com/#/" className="main-header-link">
                        <span className="main-header-image">
                            <img src="/assets/suitcase.png" width="18" height="18"></img>
                        </span>
                        <span className="main-header-slogan">
                            Go to Help for Business Owners
                        </span>
                    </a>
                </div>
            </div>
            <div className="homepage-main-container">
                <div className="homepage-main-inner-container">
                    <div className="homepage-main-nav-container">
                        <nav className="homepage-nav-reviews">
                        </nav>
                        <nav className="homepage-nav-session">
                            <GreetingContainer path="homepage" />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default homepage;