import {React, useState} from "react";
// import axios from 'Axios';

const UsersFetch = (callback) => {
    
    const setUsers = undefined;
    
    const data = fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            callback(response.json());
            return response.json();
    
        })
        // .then(data => {
        //     return data;
        // });

    return data;
}

export { UsersFetch }