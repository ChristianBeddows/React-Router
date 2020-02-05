import React from "react";
import Form from "./components/Form"
import './App.css';

export default function App() {
    document.title = 'Chris is wicked cool';

    return (
        <>
            <div className="page-background"/>
            <div className="page-body">
                <Form/>
            </div>
        </>
    );
}
