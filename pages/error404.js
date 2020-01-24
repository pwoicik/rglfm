"use strict";

export const Error404 = {
    async render() {
        return new DOMParser().parseFromString(`
                    <h1 class='display-4 text-white' >PAGE NOT FOUND!</h1>
                    <img src='assets/penguins404.jpg' class='responsive' alt="BŁĄD">
                 `,
            "text/html").body.childNodes;
    },
};
