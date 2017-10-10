import React, {Component} from 'react'

class SenatorComponent extends Component{
    render(){
        const senator = this.props.senatorData

        return (
            <div>
                <div>{senator.person.name}</div>
                <div>{senator.state}</div>
                <div>{senator.startdate}</div>
            </div>
        )
    }
}

export default SenatorComponent