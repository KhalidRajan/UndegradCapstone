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
                            Learning and Software Development realms. Khalid is an avid Arsenal and Toronto Raptors fan, he is a voracious reader,
                            and he enjoys binge-watching series on Netflix/Amazon Prime.
                        </p>
                    </div>
                    <div className={table.column}>
                        <h1> Krishna Iyer</h1>
                        <img className={table.profile} src={require('./profile_pics/Krishna_profile.png').default} />
                        <p>
                            Krishna is an undergraduate computer engineering student. He enjoys watching movies, going swimming and
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
                <br></br>
                <br></br>
                <div className={table.row}>
                    <h1 className="supervisor_title"><b>The Supervisors</b></h1>
                    <br></br>
                    <div className={table.column2}> 
                        <h1> Dr. Xiaodan Zhu</h1>
                        <img className={table.profile} src={require('./profile_pics/prof_Zhu_profile.jpg').default} />
                        <p>
                            Dr. Xiaodan Zhu is an Assistant Professor of the Department of Electrical and Computer Engineering. 
                            He leads the Text Analytics and Machine Learning Lab (TAML). Dr. Zhu received his Ph.D. from the Department 
                            of Computer Science at the University of Toronto in 2010 and his Masters of Engineering from the Department 
                            of Computer Science and Technology at Tsinghua University in 2000. He was a researcher of National Research 
                            Council Canada from 2010 to 2017.
                        </p>
                    </div>
                    <div className={table.column2}> 
                        <h1> Rohan Bhambhoria (PhD Candidate)</h1>
                        <img className={table.profile} src={require('./profile_pics/Rohan_profile.jpeg').default} />
                        <p>
                            Interesting stuff about Rohan!
                        </p>
                    </div>
                </div>
            </div>
            
            <div classname="cal">
                <div className="company-logo">
                    <img className="CAL_logo" src="images/Conflict_Analytics_Lab.png"/>
                    <h1><i>
                        <b>About Conflict Analytics Lab:</b>
                        <br></br>
                        <br></br>
                        The Conflict Analytics Lab is a research-based consortium concerned with the 
                        application of data science and machine learning to dispute resolution. Conflict 
                        analytics is the process of extracting actionable knowledge from negotiation, 
                        mediation and settlement agreements such as customer disputes and employment negotiation.
                    </i></h1>
                </div>
                
            </div>
        </div>
    )
}

export default Team;