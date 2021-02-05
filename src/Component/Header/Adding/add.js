import React, { useState } from "react"
import Modal from "react-modal"
import './add.css'

Modal.setAppElement("#root");
const AddMovie = ({ AddNewMovie }) => 
    {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(""); 
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [rating, setRating] = useState("");
 

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>ADDING MOVIE </button>
      <Modal className="add-modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
        
        <form>
          <label>Movie Name</label>
          <input type="text" name="name" required onChange={(e) => setName(e.target.value)}/>
          <label>Movie Rate</label>
          <input type="text" name="rating" required onChange={(e) => setRating(e.target.value)}/>
          <label>Movie Release Date</label>
          <input type="text" name="date" required onChange={(e) => setDate(e.target.value)}/>
          <label>Movie Image</label>
          <input type="url" name="image" required onChange={(e) => setImage(e.target.value)} />
          <label>Movie Summary</label>
          <textarea type="text" name="description" required onChange={(e) => setDescription(e.target.value)}/>
        </form>
        <button className="Modal-btn" onClick={() =>{
              AddNewMovie({
                image: image,
                name: name,
                description: description,
                date: date,
                rating: rating,
                });
              closeModal()}}>Submit</button>
        <button className="Modal-btn" onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default AddMovie;
