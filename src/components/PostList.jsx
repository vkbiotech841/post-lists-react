
import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';
import Modal from './modal';
import { useEffect, useState } from 'react';

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const resData = await response.json();
            console.log("resData", resData);
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, [])

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'Post',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {
                isPosting ?
                    <Modal onClose={onStopPosting}>
                        <NewPost
                            onAddPost={addPostHandler}
                            onCancel={onStopPosting}
                        />
                    </Modal> : null
            }

            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}

            {!isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                </div>
            )}

            {isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Loading posts...</p>
                </div>
            )}
        </>
    );
}

export default PostsList;