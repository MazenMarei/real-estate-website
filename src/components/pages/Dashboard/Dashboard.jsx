import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const [properties, setProperties] = useState([]);
  const [oldProperties, setOldProperties] = useState([]);
  const [posts, setPosts] = useState([]);
  const [oldPosts, setOldPosts] = useState([]);
  const [newProperty, setNewProperty] = useState({
    title: "",
    desc: "",
    images: [],
  });
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const handleAddProperty = () => {
    setProperties([...properties, newProperty]);
    setNewProperty({ title: "", desc: "", images: [] });
  };

  const handleDeleteProperty = (index) => {
    setProperties(properties.filter((_, i) => i !== index));
  };

  const handleUpdateProperty = (index, updatedProperty) => {
    const updatedProperties = properties.map((property, i) =>
      i === index ? updatedProperty : property
    );
    setProperties(updatedProperties);
  };

  const handleAddPost = () => {
    setPosts([...posts, newPost]);
    setNewPost({ title: "", content: "" });
  };

  const handleDeletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const handleUpdatePost = (index, updatedPost) => {
    const updatedPosts = posts.map((post, i) =>
      i === index ? updatedPost : post
    );
    setPosts(updatedPosts);
  };

  const handleMoveToOldProperties = (index) => {
    const propertyToMove = properties[index];
    setOldProperties([...oldProperties, propertyToMove]);
    handleDeleteProperty(index);
  };

  const handleMoveToOldPosts = (index) => {
    const postToMove = posts[index];
    setOldPosts([...oldPosts, postToMove]);
    handleDeletePost(index);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Dashboard</h1>

      <div className="mb-4">
        <h2>Add New Property</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Title"
            value={newProperty.title}
            onChange={(e) =>
              setNewProperty({ ...newProperty, title: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Description"
            value={newProperty.desc}
            onChange={(e) =>
              setNewProperty({ ...newProperty, desc: e.target.value })
            }
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Images (comma separated)"
            value={newProperty.images}
            onChange={(e) =>
              setNewProperty({
                ...newProperty,
                images: e.target.value.split(","),
              })
            }
          />
          <button className="btn btn-primary" onClick={handleAddProperty}>
            Add Property
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h2>Properties</h2>
        {properties.map((property, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{property.title}</h3>
              <p className="card-text">{property.desc}</p>
              <p className="card-text">{property.images.join(", ")}</p>
              <button
                className="btn btn-danger mr-2"
                onClick={() => handleDeleteProperty(index)}
              >
                Delete
              </button>
              <button
                className="btn btn-secondary mr-2"
                onClick={() =>
                  handleUpdateProperty(index, {
                    ...property,
                    title: "Updated Title",
                  })
                }
              >
                Update
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleMoveToOldProperties(index)}
              >
                Move to Old Properties
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2>Old Properties</h2>
        {oldProperties.map((property, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{property.title}</h3>
              <p className="card-text">{property.desc}</p>
              <p className="card-text">{property.images.join(", ")}</p>
              <button
                className="btn btn-danger mr-2"
                onClick={() =>
                  setOldProperties(oldProperties.filter((_, i) => i !== index))
                }
              >
                Delete
              </button>
              <button
                className="btn btn-secondary"
                onClick={() =>
                  setOldProperties(
                    oldProperties.map((prop, i) =>
                      i === index ? { ...prop, title: "Updated Title" } : prop
                    )
                  )
                }
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2>Add New Post</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Content"
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
          />
          <button className="btn btn-primary" onClick={handleAddPost}>
            Add Post
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h2>Posts</h2>
        {posts.map((post, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <p className="card-text">{post.content}</p>
              <button
                className="btn btn-danger mr-2"
                onClick={() => handleDeletePost(index)}
              >
                Delete
              </button>
              <button
                className="btn btn-secondary mr-2"
                onClick={() =>
                  handleUpdatePost(index, { ...post, title: "Updated Title" })
                }
              >
                Update
              </button>
              <button
                className="btn btn-warning"
                onClick={() => handleMoveToOldPosts(index)}
              >
                Move to Old Posts
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2>Old Posts</h2>
        {oldPosts.map((post, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h3 className="card-title">{post.title}</h3>
              <p className="card-text">{post.content}</p>
              <button
                className="btn btn-danger mr-2"
                onClick={() =>
                  setOldPosts(oldPosts.filter((_, i) => i !== index))
                }
              >
                Delete
              </button>
              <button
                className="btn btn-secondary"
                onClick={() =>
                  setOldPosts(
                    oldPosts.map((p, i) =>
                      i === index ? { ...p, title: "Updated Title" } : p
                    )
                  )
                }
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
