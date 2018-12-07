import React, { Component } from 'react'
import Default from './Default'
import Gallery from 'react-photo-gallery'

class Results extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let collection = this.props.collection
        let ratings = this.props.ratings
        let sorted = this.props.sorted


        //Set filtered array to be collection of images if ratings are selected with filters accordingly. 
        //If there are no filters, then the filtered array will be the original collection of images.
        let filtered = [];
        collection.length > 0 && ratings.length > 0 ? filtered = collection.filter(gif => ratings.includes(gif.rating.toUpperCase())) : filtered = collection;


        //sortedList is defaulted as the filtered array based on previous logic. If sorted is toggled on App component,
        //then sort based on import_datetime. 
        let sortedList;
        if (sorted === false) {
            sortedList = filtered
        } else {
            sortedList = filtered.slice().sort(function (a, b) {
                if (a.import_datetime < b.import_datetime) {
                    return 1
                }
                if (a.import_datetime > b.import_datetime) {
                    return -1
                }
                return 0
            })
        }


        //Add the list to React Photo Gallery Component to make all images the same size and same borders all around. 
        let gifGallery = sortedList.map((gif) => {
            return {
                src: gif.images.fixed_height.url,
                width: 3,
                height: 2
            }
        })

        return (
            <article className="container ">
                {gifGallery.length > 0 ? <Gallery photos={gifGallery} /> : <Default />}
            </article>
        )
    }
}

export default Results;


