import React, { useState } from "react";
import Heart from "react-animated-heart";

export default function Like() {
    const [isClick, setClick] = useState(false);
    return (
        <div className="like">
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>
    );
}