import React from "react";
import table from "./team.module.css"

function Team(){
    return(
        <div className={table.row}>
            <h1>The Team</h1>
            <div className={table.column}>
                <h1> Khalid Rajan</h1>
                <img className={table.profile} src={require('./profile_pics/Khalid_profile.png').default} />
                <p>
                    Interesting stuff about Khalid!
                </p>
            </div>
            <div className={table.column}>
                <h1> Krishna Iyer</h1>
                <img className={table.profile} src={require('./profile_pics/Krishna_profile.png').default} />
                <p>
                    Krishna is a senior computer engineering student. He enjoys watching movies, going swimming and
                    playing video games. He has experience working with embedded systems and hopes to pursue 
                    a full-time career in this field after graduation.
                </p>
            </div>
            <div className={table.column}> 
                <h1> Adib Chisty</h1>
                <img className={table.profile} src={require('./profile_pics/Adib_profile.jpeg').default} />
                <p>
                    Interesting stuff about Adib!
                </p>
            </div>
        </div>
    )
}

export default Team;