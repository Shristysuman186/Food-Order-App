import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("Child Constructor");
        //creating state varibales 
        this.state = {
            useInfo:{
                name: 'Default',
                bio: 'Default'
            }
        }
    };

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/shristysuman186');
        const json = await data.json();
        console.log(json);
        this.setState({
            useInfo : json
        })
    }

    componentDidUpdate(){
        console.log('updated called');
    }

    componentWillUnmount(){
        console.log('unmounted');
    }
    
    render() {
        //const { name, location } = this.props; //destructuring....otherwise can be written directly as {this.props.name}
        // const {count2} = this.state;
        console.log("Child Render");
        return (
            <div className="user-card">
                <h2>Name: {this.state.useInfo.name}</h2>
                <h3>Bio: {this.state.useInfo.bio}</h3>
            </div>
        );
    }
}

export default UserClass;