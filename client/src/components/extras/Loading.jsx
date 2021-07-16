import React from 'react';
import styled from 'styled-components'

const Div = styled.div `
    width: 70px;
    height: 70px;
    border: 10px solid #C04C4B;
    border-top: 10px solid #464646;
    border-radius: 50%;
    animation-name: girar;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    scale: 2;
  }
  @keyframes girar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }`

export default function Loading() {
    return (
        <Div></Div>
    );
}
