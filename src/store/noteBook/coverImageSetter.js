import image1 from "/cover_1.png";
import image2 from "/cover_2.jpg";
import image3 from "/cover_3.jpg";
import image4 from "/cover_4.jpg";
import image5 from "/cover_5.jpg";
import image6 from "/cover_6.png";
import image7 from "/cover_7.jpg";
import image8 from "/cover_1.png";
import image9 from "/cover_2.jpg";
import image10 from "/cover_3.jpg";
import image11 from "/cover_4.jpg";
import image12 from "/cover_5.jpg";
import image13 from "/cover_6.png";
import image14 from "/cover_7.jpg";

var id = 0;
export const getId = () => {
  return id++;
};

export const coverImageListSetter = [
  { id: getId(), image_url: image1 },
  { id: getId(), image_url: image2 },
  { id: getId(), image_url: image3 },
  { id: getId(), image_url: image4 },
  { id: getId(), image_url: image5 },
  { id: getId(), image_url: image6 },
  { id: getId(), image_url: image7 },
  { id: getId(), image_url: image8 },
  { id: getId(), image_url: image9 },
  { id: getId(), image_url: image10 },
  { id: getId(), image_url: image11 },
  { id: getId(), image_url: image12 },
  { id: getId(), image_url: image13 },
  { id: getId(), image_url: image14 },
];
