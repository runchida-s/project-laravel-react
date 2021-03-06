import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../api';

const Edit = () => {

    const {id} = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [review, setReview] = useState('');

    const onEditSubmit = async () => {
        setLoading(true);
        try{
            await api.updatePost({
                name, location, review,
            }, id);
            history.push('/');
        }catch {
            alert('Failed to edit post!')
        }finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        api.getOnePost(id).then(res => {
            const result = res.data;
            const post = result.data;
            setName(post.name);
            setLocation(post.location);
            setReview(post.review);
        })
    }, []);

    return (
        <div className="edit_container">
            
            <div className="jumbotron text-center bg-dark text-white">
                <h1><b>FOOD Around YOU</b></h1>  
                <h3>@ AIA Capital Center</h3>        
                <p>Recommended Restaurants & Cafes near AIA Capital Center</p>
            </div>
            
            <div className="row">

                <div className="col-sm-3"></div>

                <div className="col-sm-6">
                    <div className="container">

                        <h2>Edit Information</h2>
                        <br></br>

                        <form>

                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                    id="name"
                                    type="text" 
                                    className="form-control" 
                                    value={name}
                                    onChange={e => setName(e.target.value)} 
                                />                       
                            </div>

                            <div className="form-group">
                                <label>Location</label>
                                <input 
                                    id="location"
                                    type="text" 
                                    className="form-control" 
                                    value={location}
                                    onChange={e => setLocation(e.target.value)} 
                                />                       
                            </div>

                            <div className="form-group">
                                <label>Review</label>
                                <textarea 
                                    id="review"
                                    className="form-control"
                                    value={review}
                                    onChange={e => setReview(e.target.value)} 
                                >
                                </textarea>                       
                            </div>

                            <div className="text-center">
                                <button 
                                    id="submit"
                                    type="submit" 
                                    className="btn btn-success"
                                    onClick={onEditSubmit}
                                    disabled={loading}
                                >
                                    {loading ? 'LOADING...' : 'SAVE'}
                                </button>
                            </div>

                        </form>    

                    </div>
                </div>

                <div className="col-sm-3"></div>
                
            </div>

        </div>
    );
};

export default Edit;