import React from "react";

import Input from "../../atoms/input";
import { ButtonPrimary } from "../../atoms/button";

export default function SearchKeyword() {
  return (
    <form className="form-inline my-2 my-lg-0">
      <Input className="mr-2" />
      <ButtonPrimary>Pesquisar</ButtonPrimary>
    </form>
  );
}
