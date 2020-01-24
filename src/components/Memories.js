import React from 'react';
import './Memories.css';
import uniparty from '../images/uniparty.jpeg'
import unipic from '../images/unipic.jpeg'
import graduation from '../images/graduation.jpeg'


class Memories extends React.Component{
    render(){
        return(
            <div className="mem">
                <h1>My University Pictures</h1>
                <img id="prtypic" src={uniparty} alt="partypic" />
                <img id="unipicture" src={unipic} alt="universitypic" />
                <img id="gradpic" src={graduation} alt="graduationpic" />

            </div>
        )
    }
}

export default Memories;