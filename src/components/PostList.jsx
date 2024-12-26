
import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';
import Modal from './modal';
import { useState } from 'react';

function PostsList({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
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
            <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
            </ul>
        </>
    );
}

export default PostsList;