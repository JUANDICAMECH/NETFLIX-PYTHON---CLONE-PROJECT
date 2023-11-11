import React from "react";
import { useNavigate } from "react-router";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import ComponentsInicio from "../ComponentsInicio/ComponentsInicio";
import ComponentsLogin from "../ComponentsLogin/ComponentsLogin";
import ComponentsPerfiles from "../ComponentsPerfiles/ComponentsPerfiles";
import ComponentsRegistro from "../ComponentsRegistro/ComponentsRegistro";
import ComponentsUsuario from "../ComponentsUsuario/ComponentsUsuario";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<ComponentsLogin/>
  },
  {
    path:"/perfiles",
    element:<ComponentsPerfiles/>
  },
  
  {
    path:"/registro",
    element:<ComponentsRegistro/>
  },

  {
    path:"/usuario",
    element:<ComponentsUsuario/>
  },

]);

