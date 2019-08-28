import React, { Component } from 'react';
import DisplayChar from "./DisplayChar.js";
import "./Characters.css";
import Axios from "axios";


class Characters extends Component {
state = {
    characters:[],
    isLoaded: false
}
getCharacters = async () => {
    const result = await Axios.get("https://melroune.github.io/starwars-api/api/all.json")
                                   this.setState({characters: result.data, isLoaded: true})



    /*Axios.get("https://melroune.github.io/starwars-api/api/all.json")
        .then(res => this.setState({characters: res,
            isLoaded: true}))
 fetch("https://melroune.github.io/starwars-api/api/all.json")
        .then(res => res.json())
        .then(res => this.setState({characters: res,
            isLoaded: true}))*/
}

    componentDidMount(){
        this.getCharacters();

    }
    render () {
        return <>
            {!this.state.isLoaded ? (
                <div>loaded</div> ) : (

                <div>
                    {this.state.characters.map(char =>  console.log(char) ||
                        <DisplayChar char={char} key={char.id} />
                    )}
                </div>
            )}
        </>
    }
}
export default Characters;