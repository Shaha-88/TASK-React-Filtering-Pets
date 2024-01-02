import React from "react";
import { useState } from "react";

function PetItem({ pet }) {
  const [petImage, setImage] = useState(pet.image);

  const changePetImage = () => {
    setPetImage(pet.image2);
  };

  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img
          onClick={changePetImage}
          className="image"
          alt={pet.name}
          src={petImag}
        />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info">
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
