export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const DESTROY_REVIEW = 'DESTROY_REVIEW';
import * as ReviewApiUtil from '../util/review_api_util';
const receiveReview = ({review, user}) => {
    return {
        type: RECEIVE_REVIEW,
        review: review,
        user: user
    } 
}
const receiveReviews = ({reviews}) => {
    return {
        type: RECEIVE_ALL_REVIEWS,
        reviews: reviews
    } 
}

const destroyReview = (reviewId) => {
    
    return {
        type: DESTROY_REVIEW,
        reviewId: reviewId
    }
}

export const fetchReview = (review) => {
    return (dispatch) => {
        return ReviewApiUtil.fetchReview(review).then(payload =>{
            return dispatch(receiveReview(payload));
        })
    }
}
export const fetchReviews = () => {
    return (dispatch) => {
        return ReviewApiUtil.fetchReviews().then(payload =>{
            return dispatch(receiveReviews(payload));
        })
    }
}


export const createReview = (review) => {
    return (dispatch) => {
        return ReviewApiUtil.createReview(review).then(payload =>{
            return dispatch(receiveReview(payload));
        })
    }
}

export const updateReview = (review) => {
    return (dispatch) => {
        return ReviewApiUtil.updateReview(review).then(payload => {
            return dispatch(receiveReview(payload))
        })
    }
}

export const deleteReview = (reviewId) => {
    
    return (dispatch) => {
        return ReviewApiUtil.destroyReview(reviewId).then((payload) => {
            
            return dispatch(destroyReview(payload.review.id))
        })
    }
}