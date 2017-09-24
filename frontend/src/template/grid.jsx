import React, { Component } from 'react'


export default class Grid extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if ( cols[0] ) classes += `col-xr-${cols[0]}`
        if ( cols[1] ) classes += ` col-xr-${cols[1]}`
        if ( cols[2] ) classes += ` col-xr-${cols[2]}`
        if ( cols[3] ) classes += ` col-xr-${cols[3]}`

        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return(
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}