import React, { Component } from 'react';
import SenatorsData from './data/senators.json'

class Senators extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Democrats</h1>
                {SenatorsData.filter((senator) => {
                return senator.party === 'Democrat'
            }).map((senator)=> {
                    return (
                        <div>{senator.party + senator.person.name + senator.startdate}</div>
            )})}</div>
               </div>
        )
    }
}  

export default Senators;