import React from "react";
import table from "./team.module.css"
import "./team.css"

function Team(){
    return(
        <div className="team">
            <h1 className="title">The Team</h1>
            <div className="profiles">
                <div className={table.row}>
                    <div className={table.column}>
                        <h1> Khalid Rajan</h1>
                        <img className={table.profile} src={require('./profile_pics/Khalid_profile.png').default} />
                        <p>
                            Khalid is an undergraduate computer engineering student.  He has experience and interest in the Machine
                            Learning and Software Development realms.  Khalid is an avid Arsenal and Toronto Raptors fan, he is a voracious reader,
                            and he enjoys binge-watching series on Netflix/Amazon Prime.
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
            </div>
            <h1>The Supervisors</h1>
            <div className="supervisors">

            </div>
            <div classname="cal">
                <div className="company-logo">
                    <img className="CAL_logo" src="images/Conflict_Analytics_Lab.png"/>
                </div>
            </div>
        </div>
    )
}

export default Team;