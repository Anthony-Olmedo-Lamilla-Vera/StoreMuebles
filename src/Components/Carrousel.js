import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import NavigateNextOutlinedIcon from "@material-ui/icons/NavigateNextOutlined";
import NavigateBeforeOutlinedIcon from "@material-ui/icons/NavigateBeforeOutlined";
import "../App.css";

function Carrousel() {
  function Item(props) {
    return (
      <div className="Carrousel">
        <Paper>
          <img className="img-ca" src={props.item.description} alt="" />
        </Paper>
      </div>
    );
  }
  var items = [
    {
      description:
        "https://web.mueblescolonialclub.com/wp-content/uploads/2020/12/mueble-auxiliar-lujo-contract-muebles-colonial-club-vlc.jpg",
    },
    {
      description:
        "https://web.mueblescolonialclub.com/wp-content/uploads/2020/12/aparador-lujo-contract-muebles-colonial-club-vlc.jpg",
    },
    {
      description:
        "https://casaydiseno.com/wp-content/uploads/2018/02/bello-contraste-blanco-salones.jpg",
    },
    {
      description:
        "https://casaydiseno.com/wp-content/uploads/2018/02/muebles-bonitos-elegantes-tradicionales.jpg",
    },
    {
      description:
        "    https://i.pinimg.com/originals/3d/62/79/3d6279d1548523d80825d26c9f7d7d94.jpg",
    },
    {
      description:
        "    https://casaydiseno.com/wp-content/uploads/2018/02/muebles-bonitos-concepto-moderno.jpg",
    },
  ];

  return (
    <div className="text-carrousel">
      <Carousel
        animation="slide"
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "#ffff",
            borderWidth: 5,

            borderRadius: 50,
          },
        }}
        navButtonsAlwaysVisible={true}
        fullHeightHover={true}
        NextIcon={<NavigateNextOutlinedIcon />}
        PrevIcon={<NavigateBeforeOutlinedIcon />}
        indicatorIconButtonProps={{
          style: {
            padding: "3px", // 1
            color: "blue", // 3
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "white",
            borderBlockColor: "white",
            backgroundColor: "green", // 2
          },
        }}
        indicatorContainerProps={{
          style: {
            color: "white",
            marginTop: "50px", // 5
            textAlign: "center",

            // 4
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

export default Carrousel;
