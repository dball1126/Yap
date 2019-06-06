import React from 'react';
import Search from '../search/main_search';
import RedBanner from '../greeting/top_banner_red';
import {Link} from 'react-router-dom';
import BusinessShowSearch from '../search/business_show_search';
class BusinessShow extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
        this.props.fetchBusiness(this.props.businessId);
    }

    

    render(){
        const defaultBusiness = {name: "", address: "", city: "", state: "", zipcode: "", phone_number: "",
        website: "", latitude: "", longitude: "", imageLinks: []}
        const business = this.props.business || defaultBusiness;

        const reviewButton = `/businesses/${this.props.businessId}/review`;

        const images = () => {
            if (!business.imageLinks){
                return "";
            }   else {
                return (
                    <div>
                        <ul className="ul-images">
                            {business.imageLinks.map((image, i) => {
                                return (
                                    <li key={i}><img src={image} className="image"></img></li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }
        }

        return (
            <div>
                <RedBanner />
                <div className="business-show-header">
                    <div className="business-header-container">
                        <div className="business-header-logo">
                        </div>
                        <BusinessShowSearch  />
                        <div className="business-show-login-signup">
                            <div className="business-show-login-box">
                            <Link to="/login" className="business-show-login">Log In</Link>
                            </div>
                            <div className="business-show-signup-box">
                            <Link to="/signup" className="business-show-signup">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="categories-main-header">
                    <div className="business-show-categories-container">
                        <ul className="ul-categories-business-show">
                            <li className="categories-restaurants"><span className="restaurants">Restaurants</span></li>
                            <li className="categories-home-services"><span>Home Services</span></li>
                            <li className="categories-auto-services"><span>Auto Services</span></li>
                            <li className="categories-more"><span>More</span></li>
                            <li className="categories-separator"></li>
                            <li className="categories-review"><span>Write a Review</span></li>
                            <li className="categories-business"><span>For Businesses</span></li>
                        </ul>
                    </div>
                </div>
                <div className="business-main-content-container">
                    <div className="business-content-container">
                        <div className="actual-business-header">
                            <div className="business-name-header">
                                <div className="business-name">{business.name}
                                </div>
                                    <div className="business-ratings">
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="reviews-count"> 0 reviews</span>
                                    </div>
                                </div>
                                <div className="business-review-header">

                                <button className="write-a-review-button">
                                    <span className="star" >&#9733;</span>
                                    <Link to={reviewButton} >Write A Review</Link>
                                    </button>

                                    <button className="add-photo-button">Add Photo</button>
                                    <button className="share-photo-button">Share</button>
                                    <button className="save-button">Save</button>
                                </div>
                            </div>
                        <div className="business-show-sub-header">
                            <div className="business-show-map">
                                <div className="image-placeholder">
                                </div>
                                <div className="address-box">
                                    <span className="full-address">{business.address}</span><br />
                                    <span className="full-address">{business.city}, {business.state} {business.zipcode}</span><br />
                                    <span>{business.phone_number}</span><br />
                                    <span><Link to={business.website}>{business.website}</Link></span>
                                </div>
                            </div>
                            <div className="business-pictures-container">
                                <div className="business-pictures-showcase">
                                    {images()}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="business-bottom-container">
                    <div className="business-bottom-inner-container">
                        <div className="business-secion-container">
                            <div className="business-left-section">
                                <div className="review-highlights">
                                    <div className="review-highlights-header">
                                        <div className="review-highlights-header-text">
                                            <span>Recommended Reviews</span>
                                        </div>
                                        <div className="review-trust-banner">
                                            <div className="trust-banner-data">
                                                <span>Your trust is our top concern,</span>
                                                <span>so businesses can't pay to alter or remove their reviews</span>
                                                <a href="">Learn more.</a>
                                            </div>
                                        </div>
                                        <div className="trust-banner-search">
                                            <div className="trust-search-bar">
                                                <input type="text" placeholder="Search within Reviews" className="trust-search-input"/>
                                                <div className="trust-search-button">
                                                    <button className="trust-button-img">
                                                        <div className="trust-button-img-div"></div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="business-right-section">
                                <div className="order-food">
                                    <div className="order-food-header">
                                        <h3>Order Food</h3>
                                    </div>
                                    <div className="make-order-box">
                                        <div className="option-selection">
                                            <label className="delivery-radio">
                                                <input type="radio" checked />
                                                <span>Delivery</span>
                                            </label>
                                            <label className="takeout-radio">
                                                <input type="radio"/>
                                                <span>Takeout</span>
                                            </label>
                                        </div>
                                        <div className="order-options">
                                            <ul className="ul-order-option">
                                                <li className="free-delivery">
                                                    <div className="delivery-span-box">
                                                    <span>Free</span><br />
                                                    <span>Delivery</span>
                                                    </div>
                                                </li>
                                                <li className="delivery-min">
                                                    <div className="delivery-min-span-box">
                                                        <span>Delivery Min</span><br />
                                                        <span>$20</span>
                                                    </div>
                                                </li>
                                                <li className="arrives">
                                                    <div className="arrives-box">
                                                        <span>Arrives in</span><br />
                                                        <span>55-65 Mins</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="delivery-address-box">
                                            <div className="delivery-address-header">
                                                <span>Delivery Address</span>
                                            </div>
                                            <div className="actual-address">
                                                <label>
                                                    <input type="text" placeholder='1 Yap St., New York, NY 11212' className="input-actual-address"/>
                                            </label>
                                            <div className="start-order">
                                                <button className="start-order-button">Start Order</button>
                                            </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default BusinessShow;