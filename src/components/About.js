import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
constructor(props){
    super(props);

    console.log("Parent Constructor");
}

componentDidMount(){
    console.log("Parent component did mount");
}

    render() {
        console.log("Parent Render");
        return (
            <div className="about-sec">
                {/* <User name = {"Shristy suman(Function)"} location = {"hazaribagh"}/> */}
                {/* <UserClass name = {"Shristy suman(Class)"} location = {"hazaribagh"}/> */}
                <UserClass/>
            </div>
        );
}
}



export default About;