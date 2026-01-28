import { Search, Mail } from "lucide-react";
import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";
import { gallery } from "#constants";

const Gallery = () => {
  const { openWindow } = useWindowStore();

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="gallery">
        <ul>
          {gallery.map(({ id, img }) => (
            <li
              key={id}
              onClick={() =>
                openWindow("imgfile", {
                  id,
                  name: "Gallery image",
                  icon: "/images/image.png", 
                  kind: "file",
                  fileType: "img",
                  imageURL: img, 
                })
              }
            >
              <img src={img} alt={`Gallery image ${id}`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");
export default GalleryWindow;
