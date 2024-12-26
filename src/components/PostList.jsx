import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';
import Modal from './modal';

function PostsList() {
    const [modelIsVisible, setModelIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function hideModalHandler() {
        setModelIsVisible(false);
    }

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            {
                modelIsVisible ?
                    <Modal onClose={hideModalHandler}>
                        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
                    </Modal> : null
            }
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Manuel" body="Check out the full course!" />
            </ul>
        </>
    );
}

export default PostsList;