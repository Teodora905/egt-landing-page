import React from "react";
import { FaRegCopyright } from 'react-icons/fa';

function SiteRights() {

    return (
        <section className="site-rights">
            <div className="red-box">
                <FaRegCopyright style={{ marginRight: "4px" }} />
                {new Date().getFullYear()} EGT Digital. All rights reserved.
            </div>
        </section>
        
    )
}

export default SiteRights;


