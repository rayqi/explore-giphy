import React, { Component } from 'react'
import Default from './Default'
import Gallery from 'react-photo-gallery'

class Results extends Component {
    constructor(props) {
        super(props)
        this.state = { ratings: [], sorted: "false" }

    }

    updateRatings = (event) => {
        if (!this.state.ratings.includes(event.target.value)) {
            this.setState({ ratings: [...this.state.ratings, event.target.value] })
        } else {
            this.setState({
                ratings: this.state.ratings.filter((elem) => elem !== event.target.value)
            })
        }
    }

    handleClick = () => {
        this.setState({ sorted: !this.state.sorted })
    }
    render() {
        let collection = this.props.collection
        let ratings = this.state.ratings
        let sorted = this.state.sorted
        console.log('props', this.props)
        console.log('ratings', this.state.ratings)




        //Set filtered array to be collection of images if ratings are selected with filters accordingly. 
        //If there are no filters, then the filtered array will be the original collection of images.
        let filtered = [];
        collection.length > 0 && ratings.length > 0 ? filtered = collection.filter(gif => ratings.includes(gif.rating.toUpperCase())) : filtered = collection;

        console.log('filtered', filtered)
        //sortedList is defaulted as the filtered array based on previous logic. If sorted is toggled on App component,
        //then sort based on import_datetime. 
        let sortedList = filtered;
        console.log('...', sortedList)
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
            <div>
                <div className="results container ">
                    <div className="custom-row">
                        <div className="sort-button col s2">
                            <a class="waves-effect waves-light btn-small" onClick={this.handleClick}>Most Recent</a>

                        </div>
                        <div className="filters-checklist">
                            <form className="filter-list flex-row" action="#">
                                <p>
                                    <label className="filter-label">
                                        <input type="checkbox" name="rating" value="PG-13" onChange={this.updateRatings} />
                                        <span>PG-13</span>
                                    </label>
                                </p>
                                <p>
                                    <label className="filter-label">
                                        <input type="checkbox" name="rating" value="PG" onChange={this.updateRatings} />
                                        <span>PG</span>
                                    </label>
                                </p>
                                <p>
                                    <label className="filter-label">
                                        <input type="checkbox" name="rating" value="Y" onChange={this.updateRatings} />
                                        <span>Y</span>
                                    </label>
                                </p>
                                <p>
                                    <label className="filter-label">
                                        <input type="checkbox" name="rating" value="G" onChange={this.updateRatings} />
                                        <span>G</span>
                                    </label>
                                </p>
                                <p>
                                    <label className="filter-label">
                                        <input type="checkbox" name="rating" value="R" onChange={this.updateRatings} />
                                        <span>R</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <article className="container ">
                    {gifGallery.length > 0 ? <Gallery photos={gifGallery} /> : <Default />}
                </article>
            </div>
        )
    }
}

export default Results;


