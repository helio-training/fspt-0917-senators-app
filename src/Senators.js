import React, { Component } from 'react';
import SenatorsData from './data/senators.json'
import SenatorComponent from './SenatorComponent'

class Senators extends Component {

    state = {
        nameQuery: '',
        stateQuery: ''
    }

    getByFilters(party) {
        console.log(this.state.nameQuery)
        console.log(this.state.stateQuery)

        return SenatorsData.filter((senator) => {
            return senator.party === party
        }).filter((senator) => {
            return senator.state.toLowerCase().includes(this.state.stateQuery.toLowerCase())
        }).filter((senator) => {
            return senator.person.lastname.toLowerCase().includes(this.state.nameQuery.toLowerCase())
                || senator.person.firstname.toLowerCase().includes(this.state.nameQuery.toLowerCase())
        })
    }

    getDemacrats(){
        return this.getByFilters("Democrat")
            .map((senator, i)=> {
                return (
                    <SenatorComponent key={i} senatorData={senator} />
                )
            })
    }

    getRepublicans(){
        return this.getByFilters("Republican")
            .map((senator, i)=> {
                return (
                    <SenatorComponent key={i} senatorData={senator} />
                )
            })
    }

    render() {
        return (
            <div>
                <div>
                    <h4>Search by first or last name here:</h4>
                    <input type="search" placeholder="Name Here"
                           onChange={(event)=> this.setState({nameQuery: event.target.value})}/>
                </div>
                <div>
                    <h4>Search by state here:</h4>
                    <input type="search" placeholder="Name Here"
                        onChange={(event)=> this.setState({stateQuery: event.target.value})}/>
                </div>
                <div>
                    <h1>Democrats</h1>
                    {this.getDemacrats()}
                </div>
                <div>
                    <h1>Republicans</h1>
                    {this.getRepublicans()}
                </div>
            </div>
        )
    }
}  

export default Senators;