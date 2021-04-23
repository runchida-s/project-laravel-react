import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../api';

const Home = () => {

    //show post
    const [posts, setPosts] = useState(null);

    const fetchPosts = () => {
        api.getAllPosts().then(res => {
            const result = res.data;
            setPosts(result.data)
        });
    }
   
    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = () => {
        if(!posts) {
            return (
                <tr>
                    <td colSpan="5">
                        Loading Posts ...
                    </td>
                </tr>
            );
        }
        if(posts.length === 0) {
            return (
                <tr>
                    <td colSpan="5">
                        There is no post yet. Add one.
                    </td>
                </tr>
            );
        }

        return posts.map((post) => (
            <tr>
                {/* <td>{post.id}</td> */}
                <td>{post.name}</td>
                <td>{post.location}</td>
                <td>{post.review}</td>
                <td>
                    <Link
                        className="btn btn-warning"
                        to={`/edit/${post.id}`}
                    >
                        EDIT
                    </Link>
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={() => {
                            api.deletePost(post.id)
                            .then(fetchPosts)
                            .catch(err => {
                                alert('Failed to delete post with id :' + post.id);
                            });
                        }}
                    >
                        DELETE
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <div className="Home_container">
            
            <div className="jumbotron text-center bg-dark text-white">
                <h1><b>FOOD Around YOU</b></h1>  
                <h3>@ AIA Capital Center</h3>        
                <p>Recommended Restaurants & Cafes near AIA Capital Center</p>
            </div>

            <br></br>
            <div className="text-center">
                <Link to="/add" className="btn btn-primary">
                    Add Restaurants & Cafes 
                </Link>
            </div>
            <br></br>
            <br></br>

            {/* <div className="text-center">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addpostmodal">
                    Add Restaurants & Cafes 
                </button>
            </div>

            <div className="modal fade" id="addpostmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Restaurants & Cafes </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        
                        <form id="addform">
                            
                            <div className="modal-body">

                                <div className="form-group">
                                    <label>Name</label>
                                    <input 
                                        id="name"
                                        type="text" 
                                        className="form-control" 
                                        name="name"
                                    />                       
                                </div>

                                <div className="form-group">
                                    <label>Location</label>
                                    <input 
                                        id="location"
                                        type="text" 
                                        className="form-control" 
                                        name="location"
                                    />                       
                                </div>

                                <div className="form-group">
                                    <label>Review</label>
                                    <input 
                                        id="review"
                                        type="text" 
                                        className="form-control" 
                                        name="review"
                                    />                       
                                </div>

                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Add Data</button>
                            </div>

                        </form>  

                    </div>
                </div>
            </div> */}
  
            <div className="row">
                <div className="col-sm-1"></div>

                <div className="col-sm-10">
                    <h2>Restaurants & Cafes List</h2>
                    <br></br>
                    <table className="table table-sm table-boedered">
                        <thead className="text-center">
                            <tr className="thead-dark">
                                {/* <th>No.</th> */}
                                <th width="20%">Name</th>
                                <th width="30%">Location</th>
                                <th width="30%">Review</th>
                                <th width="20%">Edit</th>
                            </tr>
                        </thead>
                        <tbody className="text-center" id="response">
                            {renderPosts()}
                        </tbody>
                    </table>
                </div>

                <div className="col-sm-1"></div>
            </div>
             
        </div>
    );
};

export default Home;