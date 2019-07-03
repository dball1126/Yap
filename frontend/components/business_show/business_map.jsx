import React from 'react';

// const mapCenter = { lat: 40.7831, lng: 73.9712 };

class BusinessMap extends React.Component{
    constructor(props){
        super(props);
        this.position = this.props.position || "";
        this.center = this.props.center || { lat: 40.70569, lng: -73.99639 };
        this.businesses = this.props.businesses || "";
        
    }

    componentDidMount(){
        
        // const map = ReactDOM.findDOMNode(this.refs.map);
        let zoom = 10;
        if (this.position) zoom = 13;
        
        const mapOptions = {
            center: this.center,
            zoom: zoom,
            marker: this.marker
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        this.pos = new google.maps.LatLng(this.position.lat, this.position.lng);
        
        this.marker = new google.maps.Marker({
            position: this.pos,
            map: this.map
        });
        
        // this.map.document.addEventListener('touchstart', this.marker, { capture: true });
        
        

        if(this.businesses){
            zoom = 5;
            this.businesses.forEach(business => {
            // const pos = new google.maps.LatLng(business.latitude, business.longitude);
            
                

            return (
                
                //  this.marker = new google.maps.Marker({
                //     position: pos,
                //     map: this.map
                // })
                this.addBusiness(business)
                 
            )
        });
        }

        


        // const options = { center: this.props.center}
    }

    componentDidUpdate() {
        let zoom = 10;
        if (this.position) zoom = 13;

        const mapOptions = {
            center: this.center,
            zoom: zoom,
            marker: this.marker
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);

        this.pos = new google.maps.LatLng(this.position.lat, this.position.lng);

        this.marker = new google.maps.Marker({
            position: this.pos,
            map: this.map
        });

        this.props.businesses.forEach(business => {
            return (
                this.addBusiness(business)
            )
        })
        debugger
            // if (this.props.businesses) {
                
            //     this.props.businesses.forEach(business => {
            //         // const pos = new google.maps.LatLng(business.latitude, business.longitude);



            //         return (

            //             //  this.marker = new google.maps.Marker({
            //             //     position: pos,
            //             //     map: this.map
            //             // })
            //             this.addBusiness(business)

            //         )
            //     });
            // }
        
    }

    addBusiness(business){
        const pos = new google.maps.LatLng(business.latitude, business.longitude)
        const marker = new google.maps.Marker({
            position: pos,
            map: this.map
        });

        const infowindow = new google.maps.InfoWindow({
            content: business.name
        })
        // document.addEventListener('touchstart', handler, {passive: true});
        // marker.addEventListener('touchstart', handler, { passive: true });
        marker.addListener('click', () => {
            infowindow.open(this.map, marker);
                    
                })

    }

    render(){
        
        return (
            <div ref={ map => this.mapNode = map} id="map">
                
            </div>
        )
    }

}

export default BusinessMap;