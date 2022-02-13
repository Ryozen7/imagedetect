import React from "react";

export default function Spinner({addClassName}) {

    return (
        <div className={`${addClassName} rounded-full animate-spin`}>

        </div>
    )
}