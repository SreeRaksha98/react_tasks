import React from "react"

class IncDecComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            msg:''
        }
        this.buttonClick = this.buttonClick.bind(this)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.count !== this.props.count){
            this.props.count % 2 === 0 ?
            this.setState({
                msg:'This is even number'
            }) :
            this.setState({
                msg:'This is odd number'
            })
        }
    }

    buttonClick(params) {
        // console.log('clicked', this.props)
        this.props.countInc()
    }

    render(){
        // console.log('rrr render',this.props.count)
        return(
            <div>
                <button onClick={this.buttonClick}>
                    {this.props.title ? this.props.title : 'click'}
                </button>
                <p>{this.state.msg}</p>

            </div>
        )
    }

}

export default IncDecComponent