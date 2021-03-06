import React from 'react'
import {Link, Redirect} from 'react-router-dom';
class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.catTracker = 0;
        this.state = {hasMounted: false, business: ""}
        this.linkTracker = "true";
    }
    
    shouldComponentUpdate(ownProps) {
        // return true;
        let catUpdater = this.props.history.location.state;
        if (ownProps.searching === "true") return false;
        if (catUpdater === "flushDeal") {
            
           
            return true;
        }
        
        let tracking = this.props.location.linkTracker || undefined;

        if (tracking !== undefined && this.props.catLocation === "true") return true;
        
    
        if ((this.props.catLocation === "true" && this.catTracker < 2)) {
            this.catTracker++;
            return true;
        }
       if(this.state.hasMounted === false){
           return true;
       } else {
           return false;
       }
    }
    componentDidMount(){
        this.setState({hasMounted: true, business: this.props.business})
    }
    
    reloadPage() {
       

        this.props.history.go('/null')
            
    }
    
    render(){
        
        const stars = () => {
            let starColorTop;
            let starCounter = business.average_rating;
            if (business.length < 1) {
                return ""
            } else {
            return (
                <div className="star-review-item-rating" >
                    {[...Array(5)].map((ele, i) => {
                        starCounter -= 1;
                        if (starCounter < 0) starColorTop = "stary";
                        return (
                            <div className="star-box" key={i}>
                                <span className="fa fa-star" id={starColorTop} ></span>
                            </div>
                        )
                    })}
                </div>
            )
                }

        }
        // const images = () => {
        //     if (!business.imageLinks) {
        //         return "";
        //     } else {
        //         return (
        //             <div>
        //                 <ul className="ul-images">
        //                     {business.imageLinks.map((image, i) => {
        //                         return (
        //                             <li key={i} ><img src={image} className="image"></img></li>
        //                         )
        //                     })}
        //                 </ul>
        //             </div>
        //         )
        //     }
        // }

        const categories = () => {
            if (!business.categories) {
                return "";
            } else {
                return (
                    <div>
                        <ul className="ul-business-index-category">
                            {business.categories.map((category, i) => {
                                let comma = ", "
                                if (i+1 === business.categories.length) comma = "";
                                return (
                                    <li key={i} className="business-index-category-li"><Link to={{pathname: `/categories/${category.id}`, linkTracker: this.linkTracker, state: "flushDeal"}}>{category.name}{comma}</Link></li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }
        }
        
        const business = this.props.business;
        
        const image = () => {
            if (business.length < 1) {
                return ""
            } else {
                
           return business.imageLinks[Math.ceil(Math.random() * 2)] || {};
            }
        }
        const review = () => {
            
            if(business.review === undefined){
                return ""
            } else {
                return `"${business.review}"`
            }
        }
        
        
        return (
            <li className="business-index-li">
                <div className="index-li-picture">
                    <div className="index-li-img">
                        <Link to={`/businesses/${business.id}`}><img src={image()} className="index-image"></img></Link>
                    </div>
                </div>
                    <div className="index-li-info-container">
                        <div className="index-li-top-container">
                            <div className="index-li-top-left">
                            <div className="index-name-div">
                                <Link to={`/businesses/${business.id}`} className="business-index-show-link">{business.name}</Link>
                            </div>
                            <div className="star-index-box">
                                {stars()}<span className="span-reviews-count">{business.reviews_count} Reviews</span>
                            </div>
                            <div className="index-li-category-box" >
                                {categories()}
                            </div>
                        </div>
                        <div className="index-li-top-right">
                            <span className="index-address-top">{business.phone_number}</span>
                            <span className="index-address">{business.address}</span>
                            <span className="index-address">{business.city}</span>
                        </div>
                    </div>
                    <div className="index-li-bottom-container">
                            <span>
                                 {review()}
                            </span>
                    </div>
                </div>
            </li>
        )
    }
}

export default BusinessIndexItem;