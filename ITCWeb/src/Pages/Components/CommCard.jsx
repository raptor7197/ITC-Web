import React from "react"

export default function CommCard(props){
    return (
    <a href={props.link}>
    <div class="w-48">
        <div>
            <img src={props.img}></img>
        </div>
        <div className='text-green-600 flex flex-row justify-center text-center text-lg font-semibold'>{props.name}</div>
        <div>
            <div className='text-green-700 flex flex-row justify-center text-center text-lg font-semibold'>{props.company}</div>
        </div>
    </div>
    </a>
    );
}

