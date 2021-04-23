import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../api';

const Add = () => {

    //add post

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [review, setReview] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try{
            await api.addPost({
                name, location, review,
            })
            history.push('/');
        }catch {
            alert('Failed to add post!')
        }finally {
            setLoading(false);
        }
    };


    return (
        <div className="Add_container">
            
            <div className="jumbotron text-center bg-dark text-white">
                <h1><b>FOOD Around YOU</b></h1>  
                <h3>@ AIA Capital Center</h3>        
                <p>Recommended Restaurants & Cafes near AIA Capital Center</p>
            </div>
           
            <div className="row">

                <div className="col-sm-3"></div>

                <div className="col-sm-6">
                    <div className="container">

                        <h2>Add Restaurants & Cafes</h2>
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
                                    onClick={onAddSubmit}
                                    disabled={loading}
                                >
                                    {loading ? 'LOADING...' : 'ADD'}
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

export default Add;