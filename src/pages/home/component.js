import React from "react";

import HomeTemplate from "../../templates/home";

import Slider from "../../molecules/slider";

export default function HomeComponent() {
  return (
    <HomeTemplate slider={<Slider />} leftMenu={<h1>left</h1>} rightMenu={<h1>right</h1>}>
      <h1>content</h1>
    </HomeTemplate>
  );
}
