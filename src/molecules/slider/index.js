import React from "react";

import { ButtonTransparent } from "../../atoms/button";

const IMAGE_URI = "https://via.placeholder.com/500x200?text=Image+Placeholder";

export default function Slider() {
  return (
    <div className="form-inline my-2 my-lg-0 justify-content-center max-ph-200 min-ph-200">
      <ButtonTransparent className="m-4">&lt;</ButtonTransparent>
      <img src={IMAGE_URI} />
      <ButtonTransparent className="m-4">&gt;</ButtonTransparent>
    </div>
  );
}
