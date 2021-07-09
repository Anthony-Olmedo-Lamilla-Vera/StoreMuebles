import React from "react";
import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: "600px",
  height: ["250px", "170px"],
  layout: [1, 4],
  photos: [
    {
      source:
        "https://www.mobiliariohd.com/wp-content/uploads/2018/10/sofa-modelo-genio.jpg",
    },
    {
      source:
        "https://www.mobiliariohd.com/wp-content/uploads/2018/10/sofa-modelo-genio.jpg",
    },
    {
      source:
        "https://www.mobiliariohd.com/wp-content/uploads/2018/10/sofa-modelo-genio.jpg",
    },
    {
      source:
        "https://www.mobiliariohd.com/wp-content/uploads/2018/10/sofa-modelo-genio.jpg",
    },
    {
      source:
        "https://www.mobiliariohd.com/wp-content/uploads/2018/10/sofa-modelo-genio.jpg",
    },
    {
      source:
        "https://www.mobiliariohd.com/wp-content/uploads/2018/10/sofa-modelo-genio.jpg",
    },
    {
      source:
        "https://www.mobiliariohd.com/wp-content/uploads/2018/10/sofa-modelo-genio.jpg",
    },
  ],
  showNumOfRemainingPhotos: true,
};
function GaleriaCatalogo() {
  function Collage() {
    return (
      <div>
        <ReactPhotoCollage {...setting} />
      </div>
    );
  }
  return (
    <div className="container--collage">
      <div className="collage">{Collage()}</div>
      <div className="texto--collage">
        <div className="titulo--collage">
          <h3>Variedas de Muebleria Para el Hogar</h3>
        </div>
        <div className="opciones--collage">
          <div className="opcion--collage">
            <p>1</p> <h4>Muebles </h4>
          </div>
          <div className="opcion--collage">
            <p>2</p> <h4>Mueblesaaaaaaaaa </h4>
          </div>
          <div className="opcion--collage">
            <p>3</p> <h4>Mueblesaaaaaaaaaaaaaaaaaaaaa </h4>
          </div>
          <div className="opcion--collage">
            <p>4</p> <h4>Mueblesasasasaasa </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GaleriaCatalogo;
