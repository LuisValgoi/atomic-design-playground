import React from "react";
import { Route } from "react-router-dom";

import AtomicComponent from "./component";

export const route = <Route exact component={AtomicComponent} path="/atomic" key="atomic" />;
