import React from "react";
import ReactDOM from 'react-dom';
import "./index.scss";
import Comment from "./Comment";


const rootElem = document.querySelector('#root');
const authorInfo = {
    name: 'Tom',
    avatarUrl: 'https://github.com/Slavon0007'
};


ReactDOM.render(
    <Comment
        user={authorInfo}
        text="Good job!"
        date={new Date("2020-02-06T22:38:20.566Z")}
    />,
     rootElem
    );