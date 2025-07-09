import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import MainLayout from "./mainLayout";

export default class Login extends React.Component<{ token: string }, {}> {
    private static readonly BASEURL = "http://localhost:3000";

    constructor(props: { token: string }) {
        super(props);
    }
    async login() {
        const resp = await fetch("https://acres0.auth0.com/authorize?response_type=token&client_id=aXbGbrkrZTLH7M6B1KMg6jPRMfHf09ZH", {
            method: 'GET',
            redirect: 'follow'
        });
        console.log(await resp.json());
    }

    render() {
        return (
            <div>
                <h1>Login Page</h1>
            </div>
        );
    }
}