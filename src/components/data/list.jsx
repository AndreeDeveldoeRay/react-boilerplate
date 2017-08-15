/**
 * @Author: Andreee Ray <develdoe>
 * @Date:   2017-04-19T23:55:45+02:00
 * @Email:  me@andreeray.se
 * @Filename: list.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-08-15T18:35:15+02:00
 */



import React from 'react'
import {connect} from 'react-redux'

import Item from 'data/item'

export var List = React.createClass({
    render() {
        var
            {items} = this.props,

            renderItems = () => {
                if (items.length === 0) return <p className="contain__message">Nothing to do</p>
                return items.map((item, index) => { return <div className="group"><Item key={index} {...item} /> </div>})
            }

        return <div>{renderItems()}</div>
    }
})

export default connect(
    (state) => {
        return {items: state.items}
    }
)(List)