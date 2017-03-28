/*jslint node:true, browser:true, esnext:true */
'use strict';

module.exports = (path, method, callback) => {
    let xhr = new XMLHttpRequest();

    xhr.open(method, path);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
};
