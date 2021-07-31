import React, {useEffect, useState} from 'react';
import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyAC8IUU7fTox1vW6WZ9fTKGr9fFwVP2hBQ",
    authDomain: "skilled-eon-250517.firebaseapp.com",
    databaseURL: "https://skilled-eon-250517.firebaseio.com",
    projectId: "skilled-eon-250517",
    storageBucket: "gs://skilled-eon-250517.appspot.com",
    messagingSenderId: "215931286851",
    appId: "1:215931286851:web:a0f329f19a9360eb",
  };

const VideoLectures = (props) => {
    const [lectures, setLectures] = useState([])

    useEffect(() => {
        // if(!firebase.app.length) {
        console.log("heelpo brother");
        if(!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
    })

    useEffect(() => {
        const arr= [...lectures]
        const params = props.location.state?.data.toString();
         firebase.database().ref(`/Video_Lectures/${params}`).on('value', snapshot => {
            snapshot.forEach((child) => {
                arr.push({
                    title: child.val().title,
                    link: child.val().links
                })
            })
            setLectures(arr)
        })
    }, [props.location.state])
    return ( 
        <div>
        {lectures?.map((i, index) => (
            <div>
                <p style={{width: '100%'}}>{i.title}</p>
                <iframe src={i.link} title='video' />
            </div>
        ))}
        </div>
     );
}
 
export default VideoLectures;