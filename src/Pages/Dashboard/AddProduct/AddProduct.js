import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  

const imageHostKey = "a4aaeaa90358c3b82f8146583ad4c398";

  const handleAddCard = data =>{
    const image = data.img[0];
     const formData = new FormData();
     formData.append("image", image);
     const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
     fetch(url, {
       method: "POST",
       body: formData,
     })
     .then((res) => res.json())
     .then(imgData => {
      if(imgData.success){
        console.log(imgData.data.url);
        const productData = {
          name: data.name,
          price: data.price,
          img: imgData.data.url,
        };

        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productData),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if(result.acknowledged){
              toast.success("Item Added Successfully !!");
              navigate("/");
            }
          });
      }
     })
    
  }
    return (
      <div>
        <h2 className="add-title">Add Product</h2>

        <form onSubmit={handleSubmit(handleAddCard)}>
          <div>
            <input type="file" {...register("img")} />
          </div>
          <div>
            <input type="text" {...register("name")} id="" />
          </div>
          <div>
            <input type="text" {...register("price")} id="" />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
};

export default AddProduct;