import { InlineIcon } from "@iconify/react";
import React from "react";

const Header: React.FC = () => {
    return (
        <div>
            <h1 className={'text-primary dark:text-primary'}>
                <InlineIcon className={'inline mr-2'} icon={"eva:home-fill"}/>
                Home
            </h1>
            <hr className={'mt-3'}/>
        </div>
    )
}

export default Header