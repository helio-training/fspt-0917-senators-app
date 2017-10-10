import React, { Component } from 'react';
import SenatorsData from './data/senators.json'
import SenatorComponent from './SenatorComponent'

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
                            <SenatorComponent senatorData={senator} />
                        )})}</div>
                </div>
        )
    }
}  

export default Senators;