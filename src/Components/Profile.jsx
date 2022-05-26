import React, { useState } from "react";
import video from '../Image/video.mp4'
import video1 from '../Image/video.mp4'
import video2 from '../Image/video.mp4'
import video3 from '../Image/video.mp4'

function Profile() {

    return (
        <div className="profile">
            <div className="infor"></div>
            <div className="main">
                <video src={video} width="1000px" height="600px" controls="controls" autoPlay="false"></video>
                <p className="text">Hello. I'm Kim Aeyong. This is my first portfolio movement. Thank you very much. Hello. I'm Kim Aeyong. This is  my first portfolio movement. Thank you very much. Hello. I'm Kim Aeyong. This is my first portfolio movement. Thank you very much. Hello. I'm Kim Aeyong. This is my first portfolio movement. Thank you very much.</p>
                <video src={video} width="800" height="500px" controls="controls" autoPlay="false"></video>
                <video src={video} width="800px" height="500px" controls="controls" autoPlay="false"></video>
                <video src={video} width="800px" height="500px" controls="controls" autoPlay="false"></video>
            </div>
        </div>
    )
}

export default Profile