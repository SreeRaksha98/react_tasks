import React, {Component} from "react"


class FetchComponent extends Component {
    constructor() {
        super()
        this.state = {
            character: {},
            isLoading : false
        }
    }
    
    componentDidMount() {
        this.setState({
            isLoading : true
        })
        
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            this.setState({
                character: data,
                isLoading: false
            })
        })

    }
    
    render() {
        var textToBeDisplayed = this.state.isLoading ? 'Loading...' : this.state.character.title
        return (
            <div> 
                {textToBeDisplayed}
            </div>
        )
    }
}

export default FetchComponent