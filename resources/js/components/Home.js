import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Home = () => {

    //show post
    const [posts, setPosts] = useState(null);
   
    useEffect(() => {
        api.getAllPosts().then(res => {
            const result = res.data;
            setPosts(result.data)
        })
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
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.location}</td>
                <td>{post.review}</td>
                <td>
                    <Link
                        className="btn btn-warning"
                        to={`/posts/${post.id}`}
                    >
                        EDIT
                    </Link>
                    <button type="button" className="btn btn-danger">
                        DELETE
                    </button>
                </td>
            </tr>
        ))
    }

    //add post

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [review, setReview] = useState('');

    const onAddSubmit = () => {

    }


    return (
        <div className="Home_container">
            
            <div className="jumbotron">
                <h1>Restaurant & Cafe around AIA</h1>         
                <p>ร้านอาหารหรือเครื่องดื่มที่แนะนำ ใกล้ตึก AIA Capital Center</p>
            </div>

            
            <div className="row">

                <div className="col"></div>

                <div className="container">
                <div className="col-6">

                    <form>

                    <div className="form-group">
                        <label>ชื่อร้าน</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name}
                            onChange={e => setName(e.target.value)} 
                        />                       
                    </div>

                    <div className="form-group">
                        <label>ตำแหน่งที่ตั้ง</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={location}
                            onChange={e => setLocation(e.target.value)} 
                        />                       
                    </div>

                    <div className="form-group">
                        <label>รีวิว</label>
                        <textarea 
                            className="form-control"
                            value={review}
                            onChange={e => setReview(e.target.value)} 
                        >
                        </textarea>                       
                    </div>

                    <div className="form-group">
                        <button 
                            type="button" 
                            className="btn btn-success"
                            onClick={onAddSubmit}
                            disabled={loading}
                        >
                            ADD
                        </button>
                    </div>

                    </form>    

                </div>

                <div className="col"></div>
                
            </div>


            <div className="table-responsive ">
                <table className="table table-strped mt-4">
                    <thead>
                        <tr>
                            <th>ลำดับที่</th>
                            <th>ชื่อร้าน</th>
                            <th>ที่ตั้ง</th>
                            <th>รีวิว</th>
                            <th>แก้ไข</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPosts()}
                    </tbody>
                </table>
            </div>
            </div>

        </div>
    );
};

export default Home;