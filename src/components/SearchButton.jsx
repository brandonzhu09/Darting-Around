import React from 'react';

function SearchButton(props) {
    return ( 
        <div class="flex bg-gray-300 rounded py-2">
            <img class="px-2" src={props.image}/>
            <input class="bg-transparent after:bg-transparent pr-8" type="text" name={props.name} placeholder={props.placeholder} required></input>
        </div>
     );
}

export default SearchButton;