import React from 'react';
import "./AddProduct.css";

const AddProduct = () => {
    return (
      <div>
        <form action="">
          <div className="Neon Neon-theme-dragdropbox">
            <input
              style={{
                opacity: "0",
                width: "320px",
                height: "200px",
                position: "absolute",
                right: "0px",
                left: "0px",
                marginRight: "auto",
                marginLeft: "auto",
                zIndex: "999",
              }}
              name="files[]"
              id="filer_input2"
              multiple="multiple"
              type="file"
            />
            <div className="Neon-input-dragDrop">
              <div className="Neon-input-inner">
                <div className="Neon-input-icon">
                  <i className="fa fa-file-image-o"></i>
                </div>
                <div className="Neon-input-text">
                  <h3>Drag&amp;Drop files here</h3>{" "}
                  <span style={{ display: "inline-block", margin: "15px 0" }}>
                    or
                  </span>
                </div>
                <a className="Neon-input-choose-btn blue" href="3">
                  Browse Files
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
};

export default AddProduct;