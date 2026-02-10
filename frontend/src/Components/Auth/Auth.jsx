import React, { useEffect, useState } from "react";
import "./Auth.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { uploadToCloudinary } from "../cloudinary/cloudinary";
import { API_BASE } from "../../api";

function Auth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [isActive, setIsActive] = useState("All-product");
  // create Product api fetch start from here
  const [addProductData, setAddFormData] = useState({
    name: "",
    des: "",
    img: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addProductapi = async (e) => {
    e.preventDefault();
    if (!addProductData.img || (typeof addProductData.img === "object" && !addProductData.img.name)) {
      toast.error("Please select an image to upload.");
      return;
    }
    if (!addProductData.name?.trim()) {
      toast.error("Please enter a product name.");
      return;
    }
    if (!addProductData.category) {
      toast.error("Please select a category.");
      return;
    }
    let loading = toast.loading("Uploading product...");
    try {
      const PublicUrl = await uploadToCloudinary(addProductData.img);
      if (!PublicUrl) {
        toast.dismiss(loading);
        toast.error("Image upload failed. Check the file format and try again.");
        return;
      }
      const payload = {
        name: addProductData.name.trim(),
        des: addProductData.des,
        img: PublicUrl,
        category: addProductData.category,
      };

      const apiUrl = `${API_BASE}/api/createProducts`;
      const response = await axios.post(apiUrl, payload, {
        headers: { "Content-Type": "application/json" },
        timeout: 60000,
      });
      if (response.data?.success !== true && response.status !== 201 && response.status !== 200) {
        throw new Error(response.data?.message || "Upload failed.");
      }
      toast.dismiss(loading);
      setAddFormData({
        name: "",
        des: "",
        img: "",
        category: "",
      });
      toast.success("Product added successfully");
      window.location.reload();
    } catch (error) {
      toast.dismiss(loading);
      const status = error.response?.status;
      const msg = error.response?.data?.message || error.message;
      const isNetwork = !status && (error.code === "ERR_NETWORK" || error.message?.toLowerCase().includes("network"));
      const isCors = msg.toLowerCase().includes("cors") || (isNetwork && error.message?.includes("Failed"));
      let userMsg = msg;
      if (isCors || (isNetwork && status === undefined)) {
        userMsg = "Cannot reach API. Check if api.digitalstriker.in is running and allows CORS from this site.";
      } else if (status === 404) {
        userMsg = "API route not found (404). Backend may use a different URL for create product.";
      } else if (status >= 500) {
        userMsg = "Server error from API (" + status + "). " + (msg || "Try again later.");
      } else if (status === 400) {
        userMsg = msg || "Invalid data sent to API.";
      } else if (error.code === "ECONNABORTED" || (msg && msg.toLowerCase().includes("timeout"))) {
        userMsg = "Request timed out. Try again (first upload can take a moment).";
      } else if (msg) {
        userMsg = msg;
      }
      console.error("Upload error:", { status, message: msg, full: error.response?.data });
      toast.error("Something went wrong! " + userMsg);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setAddFormData((prevData) => ({
      ...prevData,
      img: file,
    }));
  };
  // create Product api fetch end here

  // get all product api fetch start from here

  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    const getallproduct = async () => {
      try {
        const response = await axios.get(
          `${API_BASE}/api/allProduct`
        );
        const list = response.data?.data;
        setAllProduct(Array.isArray(list) ? list : []);
      } catch (error) {
        console.error("Failed to load products:", error);
        toast.error("Failed to load products. Check your connection.");
        setAllProduct([]);
      }
    };

    getallproduct();
  }, []);

  // get all product api fetch end here

  // delete one product api fetch start from here

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(
        `${API_BASE}/api/deleteProduct/${id}`
      );
      toast.success("Product deleted successfully");
      const updatedProducts = allProduct.filter((p) => (p._id ?? p.id) !== id);
      setAllProduct(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
      const msg = error.response?.data?.message || error.message;
      toast.error("Delete failed: " + msg);
    }
  };

  // delete one product api fetch end here

  // contact detail fetch api

  const [EmailData, setEmailData] = useState([]);

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await axios.get(
          `${API_BASE}/api/getcontact`
        );
        setEmailData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmail();
  }, []);

  // delete mail

  const handleMailDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${API_BASE}/api/delete-mail/${id}`
      );
      console.log(res);
      toast.success("Email deleted successfully");
      // Update the product list after deletion
      const updatedEmail = EmailData.filter((Email) => Email._id !== id);
      setEmailData(updatedEmail);
    } catch (error) {
      console.error("Error deleting Email:", error);
      toast.error("Something went wrong!" + error);
    }
  };

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("ToKeN");
    if (token !== "$Kdie&-Thekd>dkd*k3_kd6^%") {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="auth-section">
      <div className="container">
        <div className="heading">
          <span>Admin</span>
        </div>
        <div className="down">
          <div className="buttons">
            <button onClick={() => setIsActive("Add-product")}>
              Add Product
            </button>
            <button onClick={() => setIsActive("All-product")}>
              All Product
            </button>
            <button onClick={() => setIsActive("All-Email")}>Email</button>
            <button
              onClick={() => {
                localStorage.clear();
                window.location.href = "/";
              }}
              style={{
                backgroundColor: "#e74c3c",
                color: "#fff",
                padding: "8px 16px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#c0392b")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#e74c3c")
              }
            >
              Logout
            </button>
          </div>
          <div className="main-container">
            {isActive === "Add-product" ? (
              <form onSubmit={addProductapi} action="">
                <div className="up-field">
                  <div className="name same-field">
                    <label htmlFor="product-name">Product Name:</label>
                    <input
                      value={addProductData.name}
                      name="name"
                      onChange={handleChange}
                      type="text"
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="image-upload same-field">
                    <label htmlFor="image">Upload Product Image:</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="img"
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>
                <div className="mid-field">
                  <label htmlFor="category">Category:</label>
                  <select
                    name="category"
                    value={addProductData.category}
                    onChange={handleChange}
                    className="category"
                  >
                    <option>--Select Your Category--</option>
                    <option value="Active Product">Active Product</option>
                    <option value="Passive Product">Passive Product</option>
                    <option value="Optical Fiber Tools">
                      Optical Fiber Tools
                    </option>
                  </select>
                </div>
                <div className="down-field">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    value={addProductData.des}
                    name="des"
                    onChange={handleChange}
                    id="description"
                  ></textarea>
                </div>
                <div className="btns">
                  <button type="reset">Reset</button>
                  <button type="submit">Add Product</button>
                </div>
              </form>
            ) : isActive === "All-product" ? (
              <div className="main-product-box">
                {allProduct &&
                  allProduct.map((item) => {
                    const productId = item._id ?? item.id;
                    return (
                      <div className="auth-product-item" key={productId || item.name}>
                        <div className="auth-product-card">
                          <div className="img">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="des-box">
                            <div className="detail">
                              <h4>{item.name}</h4>
                              <p>{item.category}</p>
                            </div>
                          </div>
                        </div>
                        <div className="auth-product-delete-row">
                          <button
                            type="button"
                            className="auth-delete-btn"
                            onClick={() => productId && handleDelete(productId)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : isActive === "All-Email" ? (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone No</th>
                      <th>Message</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {EmailData &&
                      EmailData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.Name}</td>
                          <td>{item.Email}</td>
                          <td>{item.PhoneNumber}</td>
                          <td>{item.Message}</td>
                          <td>
                            <button onClick={() => handleMailDelete(item._id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>Page Not Found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Auth;
