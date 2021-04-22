import React from 'react';

const Edit = () => {
    return (
        <div className="Edit_container">
            
            <div className="jumbotron">
                <h1>Restaurant & Cafe around AIA</h1>         
                <p>ร้านอาหารหรือเครื่องดื่มที่แนะนำ ใกล้ตึก AIA Capital Center</p>
            </div>

            <h2>แก้ไขข้อมูล</h2>

            <div className="row">

                <div className="col"></div>
                <div className="container">
                <div className="col-6">
                    <form>
                    <div className="row mb-3">
                        <label for="inputName" className="col-sm-2 col-form-label">ชื่อร้าน</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputName" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label for="inputAddress" className="col-sm-2 col-form-label">ตำแหน่งที่ตั้ง</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputAddress" />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label ffor="inputText" className="col-sm-2 col-form-label">รีวิว</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputText" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">SAVE</button>

                    </form>    
                </div>

                <div className="col"></div>
                
            </div>

            </div>

        </div>
    );
};

export default Edit;