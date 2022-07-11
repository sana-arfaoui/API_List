import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Profile = () => {
    const [userPost, setUserPost] = useState();
    let { id } = useParams();
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) =>
                setUserPost(response.data.find((post) => post.id == id))
            )
            .catch((error) => console.log(error));
    }, []);
    console.log(userPost);
    return (
        <div>
            {userPost ? (
                <article>
                    <h2 className="title">Post</h2>
                    <h3> {userPost.title} </h3>
                    <h4> {userPost.body} </h4>
                </article>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default Profile;
