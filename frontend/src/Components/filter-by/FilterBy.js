import React from 'react'
import { useState } from 'react'
import './filterBy.css'

const FilterBy = () => {
    const [expanded, setexpanded] = useState(false)

    function showCheckboxes() {
        setexpanded(!expanded)
    }
    return (
        <div>
            <div class="multiselect">
                <div class="selectBox" onClick={showCheckboxes} >
                    <select >
                        <option>Filter By</option>
                    </select>
                    <div class="overSelect"></div>
                </div>
                <div id="checkboxes" style={{ display: expanded ? 'block' : 'none' }}>
                    <h1>Categorie</h1>
                    <br/>
                    <label for="one">
                        <input type="checkbox" id="one" />Basic UX</label>
                    <label for="two">
                        <input type="checkbox" id="two" />Advanced UX</label>
                    <label for="three">
                        <input type="checkbox" id="three" />Leadership</label>
                    <span>____________________</span>
                </div>
            </div>
        </div>
    )
}

export default FilterBy
