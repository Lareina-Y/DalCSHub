import {
    Button,
    Container,
    TextField,
    Typography,
} from '@mui/material';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Page, Post } from "../components";

export const CreateComment = () => {
    const { post_id } = useParams();
    const [posts, setPosts] = useState([]);
    const [previousComments, setpreviousComments] = useState([]);
    const [showPost, setshowPost] = useState(true);
    const getPosts = async () => {
      try {
        const response = await fetch("/api/post");
        if (response.status === 200) {
          const result = await response.json();
          setPosts(result.data);
          console.log("Posts:", result);
        } else {
          console.error("Failed");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchComments = async () => {
        try {
          const response = await fetch("/api/postReplies/fetch");
          if (response.status === 200) {
            const result = await response.json();
            setpreviousComments(result.data);
          } else {
            console.error("Failed to fetch comments");
          }
        } catch (error) {
          console.error(error);
        }
      };
    
    
    useEffect(() => {
      getPosts();
      fetchComments();
    }, []);

    const formattedPostId = post_id.replace(':', '');
    const filteredPost = posts.filter((post) => post._id === formattedPostId);

    const [content, setContent] = useState('');

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleshowPost = () => {
       let result = !showPost;
       setshowPost(result);
    };

    
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          const res = await fetch("/api/postReplies/addComment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              replied_post_id: formattedPostId,
              commentDescription: content,
              author: "Jane Doe", // for testing purpose
              date: new Date().toISOString(),
            }),
          });
    
          const data = await res.json();
          console.log("Successfully created post: ", data);
    
          setContent("");
        } catch (error) {
          console.error("Error creating post:", error);
        }
     };

    return (
        showPost ? (
          <>
            {filteredPost.map((post) => (
              <Post
                key={post._id}
                postTitle={post.postTitle}
                postDate={post.timeCreated}
                postAuthor={post.postAuthor}
                postDescription={post.postDescription}
                postRating={post.postRating}
              >
                <Button variant="contained" color="primary" onClick={() => handleshowPost()}>
                  Reply
                </Button>
              </Post>
            ))}
          </>
        ) : (
            <Container
            maxWidth="sm"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px'
            }}
          >
            <Typography variant="h5" component="h1" gutterBottom>
              Create a New Comment
            </Typography>
            <TextField
              label="Replying to Post"
              variant="outlined"
              value={(filteredPost[0].postTitle)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Content"
              multiline
              rows={4}
              variant="outlined"
              value={content}
              onChange={handleContentChange}
              fullWidth
              margin="normal"
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between', 
                width: '100%', 
              }}
            >
              <Button onClick={handleSubmit} color="primary" variant="contained">
                Submit Comment
              </Button>
              <Button onClick={handleshowPost} color="primary" variant="contained">
                Cancel Comment
              </Button>
            </div>
          </Container>
          
        )
      );      
};

