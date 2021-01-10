import React from 'react'
import GalleryCard from './GalleryCard/GalleryCard'
import classes from './Gallery.module.css'
import {connect} from 'react-redux'
const Gallery = props => {
    // const galleryData = [{
    //     id: Math.random().toString(),
    //     type: 'HANDBAG SHOPPING',
    //     img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    //     name: 'Chanda Stacker',
    //     designation: 'Food Blogger'
    // },
    // {
    //     id: Math.random().toString(),
    //     type: 'WHERE TO SEE COMEDY',
    //     img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    //     name: 'Edgar Agbayani',
    //     designation: 'Chef'
    // },
    // {
    //     id: Math.random().toString(),
    //     type: 'SCARF SHOPS ',
    //     img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    //     name: 'Carlos Muela',
    //     designation: 'SoMa StrEat Food Park'
    // },
    // {
    //     id: Math.random().toString(),
    //     type: 'WINE BARS',        
    //     img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    //     name: 'CApexer',
    //     designation: 'Artist'
    // },
    // {
    //     id: Math.random().toString(),
    //     type: 'VINTAGE DECOR',
    //     img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    //     name: 'Andrew McClintock',
    //     designation: 'Gallerist'
    // }]

    const galleryDataContent = props.galleryData.map( (gallery) => {
        return <GalleryCard key={gallery.id} gallery={gallery} />
    })
    return (
        <div className={classes.Gallery}>
            <div className="col-md-12">
                <h4>Just Booked</h4>
                <div className="">
                    <div className="row">
                        {galleryDataContent}
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        galleryData : state.home.galleryData
    }
}


export default connect(mapStateToProps)(Gallery)