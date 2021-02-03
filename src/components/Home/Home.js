import React from 'react';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Link to="/qr">
        <Button>
          <p>Creacion de QRs</p>
        </Button>
      </Link>
      <Link to="/rules">
        <Button>
          <p>Reglas de contagio</p>
        </Button>
      </Link>    
    </div>
  );
}