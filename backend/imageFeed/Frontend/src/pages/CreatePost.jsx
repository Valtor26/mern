import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios.post('http://localhost:3000/create-post', formData)
    .then((res)=>{
      console.log(res)
      navigate('/feed'); // Redirect to feed page after successful post creation
    })
    .catch((err)=>{
      console.error("Error creating post:", err);
    })
  }

  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" /> 
            <input type="text" name="caption" required placeholder='Enter caption' />
            <button type="submit">Post</button>
        </form>
    </section>
  )
}

export default CreatePost