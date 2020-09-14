import React, { Component } from 'react';

export default class Operators extends Component {
  constructor() {
    super();
    this.state = {
      verification: false,
      operators: true,
      primeDice: false,
      stake: false,
      bitvest: false,
      enterAPIStake: false
    }
  }

  handleClickStake = () => {
    this.setState({ operators: false });
    let data = { stake: true, primeDice: false, bitvest: false, enterAPIStake: true, enterAPI: false }
    this.props.callback(data);
  };

  handleClickPrimedice = () => {
    this.setState({ operators: false });
    let data = { stake: false, primeDice: true, bitvest: false, enterAPIStake: true, enterAPI: false }
    this.props.callback(data);
  };

  handleClickBitvest = async () => {
    this.setState({ operators: false })
    let data = { stake: false, primeDice: false, bitvest: true, enterAPIStake: false, enterAPI: true }
    this.props.callback(data);
  };

  render() {
    const { operators, verification } = this.state;
    return (
      <div className="Operators-UI table-responsive" style={{ display: !verification && operators ? 'block' : 'none' }}>
        <div className="operators-icons">
          <div className="m-3" onClick={this.handleClickStake}>
            <svg xmlns="http://www.w3.org/2000/svg" width="66.95" height="33.47"><title>Stake</title> <path d="M4.34,9.62c0-4.48,2.85-7,8.1-7,3.79,0,4.46,2.47,4.47,3.36,0,1.73-2.44,3.56-2.44,3.56s.14,1.07,2.23,1.06,4.13-1.39,4.12-4.85c0-4-4.18-5.78-8.29-5.77C9.09,0,0,.5,0,9.56c0,8,15.2,8.75,15.22,13.91,0,5.59-6.26,7.1-8.37,7.11a2.72,2.72,0,0,1-3-2.35c0-4.53,4.49-5.79,4.49-5.79a1.89,1.89,0,0,0-2-1.84c-4.5,0-6.29,3.89-6.28,7.66,0,3.21,2.29,5.22,5.71,5.21,6.56,0,14-3.22,13.92-10.33C19.67,16.49,4.36,14.76,4.34,9.62Z" fill="currentColor"></path><path d="M66.83,27.42c-.06-.12-.2-.09-.4.07A8.8,8.8,0,0,1,60,29.86c-7.26,0-8.51-11.94-8.51-11.94s5.52-4.13,6.39-5.79-1.89-2-1.89-2-3.86,4.71-6.61,6.09c.3-2,2.32-6.71,2.45-9.39s-3.23-2-3.77-1.78c0,1.18-3,11.81-4,17.66-.63,1-1.54,2.18-2.35,2.18-.47,0-.64-.87-.65-2.12,0-1.73,1-4.51,1-6.19,0-1.17-.54-1.24-1-1.24l-.75,0c-1.19,0-.8-1-1.86-1-3.26,0-7.41,3.57-7.59,9a9.36,9.36,0,0,1-3.43,1.65c-.82,0-1-.77-1-1.43,0-1.15,1.88-8,1.88-8s2.38-.61,3.42-.81c.79-.15,1-.21,1.32-.59s.91-1.17,1.39-1.87,0-1.26-.89-1.25a31,31,0,0,0-4.31.74S30.65,5.16,30.65,5s-.18-.2-.43-.2A8.7,8.7,0,0,0,28,5.37a3.8,3.8,0,0,0-2,2.15c-.17.57-1.3,5-1.3,5s-6,2.09-6.87,2.4a.13.13,0,0,0-.09.12s.7,2.7,2.11,2.69a19,19,0,0,0,4-1.22s-1.53,6.1-1.53,8.12c0,1.3.62,2.83,3.16,2.82a10,10,0,0,0,5.6-2.07,3.28,3.28,0,0,0,3.15,2,6.46,6.46,0,0,0,4.28-2.08,2.89,2.89,0,0,0,2.61,2.05c.9,0,1.84-1,2.53-2a4.06,4.06,0,0,0,0,.62c.28,2.52,4,1,4.22.69.13-1.83,0-5.56.78-7.86C49.63,26.72,53.3,32,59.89,32c3.69,0,5.58-1.08,6.37-1.95A2.73,2.73,0,0,0,66.83,27.42ZM35.19,24.84c-3.16,0,1-8.2,3.67-8.21C38.86,17.68,38.8,24.82,35.19,24.84Z" fill="currentColor"></path><path d="M60.89,27.35a7.58,7.58,0,0,0,5.48-2.5c.52-.8-.61-2-1-2a5.12,5.12,0,0,1-4,1.91c-2.5,0-1.93-2.73-1.93-2.73s4.8.62,6.73-2.83a4.65,4.65,0,0,0,.39-3.29,3.85,3.85,0,0,0-3.87-1.69c-2.72.23-6.16,3.08-6.92,6.5C55.24,23.48,56.38,27.37,60.89,27.35Zm3-11.51c.45,0,.41.72.29,1.49-.17,1.05-1.61,3.72-4.36,3.62C60.05,19.4,62.1,15.9,63.94,15.84Z" fill="currentColor"></path></svg>
          </div>
          <div className="m-3" style={{ cursor: 'pointer' }} onClick={this.handleClickPrimedice}>
            <svg width="144.95" height="50" viewBox="0 0 1896 327"><title>Prime Dice</title><path d="M1750 263a74 74 0 0 1-23 17q-13 6-31 6t-31-6a63 63 0 0 1-23-14 66 66 0 0 1-15-24 86 86 0 0 1-5-29 74 74 0 0 1 6-29 72 72 0 0 1 15-23 71 71 0 0 1 23-16 80 80 0 0 1 61 0 71 71 0 0 1 23 17l-22 22a43 43 0 0 0-14-11 41 41 0 0 0-18-4 38 38 0 0 0-17 4 37 37 0 0 0-12 10 39 39 0 0 0-7 13 56 56 0 0 0-3 16 53 53 0 0 0 3 16 42 42 0 0 0 7 14 36 36 0 0 0 29 14 44 44 0 0 0 19-4 42 42 0 0 0 14-11l21 22zm-489-103a69 69 0 0 0-14 23 76 76 0 0 0-5 28 87 87 0 0 0 5 30 66 66 0 0 0 37 39 77 77 0 0 0 30 6q16 0 28-4a88 88 0 0 0 19-7 57 57 0 0 0 11-9l-19-21a41 41 0 0 1-8 5 73 73 0 0 1-13 5 71 71 0 0 1-18 1 42 42 0 0 1-13-2 39 39 0 0 1-12-7 35 35 0 0 1-9-10 28 28 0 0 1-4-14h103v-5a118 118 0 0 0-4-29 74 74 0 0 0-11-25 59 59 0 0 0-21-18q-13-7-32-7c-19 0-37 7-50 21zm80 28a29 29 0 0 1 2 10h-67a26 26 0 0 1 2-10 30 30 0 0 1 7-10 35 35 0 0 1 11-7 39 39 0 0 1 15-3 34 34 0 0 1 14 3 31 31 0 0 1 10 7 30 30 0 0 1 6 10zm459-43a67 67 0 0 0-22 15 69 69 0 0 0-14 23 76 76 0 0 0-6 28 87 87 0 0 0 6 30 66 66 0 0 0 37 39 77 77 0 0 0 30 6q16 0 28-4a88 88 0 0 0 19-7 57 57 0 0 0 11-9l-19-21a42 42 0 0 1-9 5 73 73 0 0 1-12 5 71 71 0 0 1-18 1 42 42 0 0 1-13-2 40 40 0 0 1-13-7 35 35 0 0 1-8-10 28 28 0 0 1-4-14h103v-5a118 118 0 0 0-4-29 74 74 0 0 0-11-25 59 59 0 0 0-21-18q-13-7-32-7a70 70 0 0 0-28 6zm58 43a29 29 0 0 1 2 10h-67a26 26 0 0 1 2-10 30 30 0 0 1 7-10 36 36 0 0 1 11-7 38 38 0 0 1 15-3 34 34 0 0 1 14 3 31 31 0 0 1 10 7 30 30 0 0 1 6 10zm-446-22a73 73 0 0 0-12 21q-5 12-5 28 0 17 6 30a70 70 0 0 0 13 23 57 57 0 0 0 20 13 55 55 0 0 0 22 5 53 53 0 0 0 14-2 60 60 0 0 0 11-4 47 47 0 0 0 9-6 69 69 0 0 0 7-6v13h34V86h-34v61l-7-2a39 39 0 0 0-7-2c-25-6-54 3-71 23zm73 7a28 28 0 0 1 12 5v42a45 45 0 0 1-2 13 36 36 0 0 1-6 11 29 29 0 0 1-10 9 31 31 0 0 1-15 3q-16 0-25-12t-9-29a52 52 0 0 1 3-16 46 46 0 0 1 6-14c12-14 28-17 46-12zM669 86v196h36v-73h29c16 0 32-5 44-14a56 56 0 0 0 15-20c8-14 8-32 3-47a53 53 0 0 0-10-20 70 70 0 0 0-54-22zm36 92v-60h26q13 0 22 8c12 11 12 32 1 44q-9 8-23 8zm121-34h33l1 17a67 67 0 0 1 6-6 51 51 0 0 1 42-13v33a31 31 0 0 0-4-1 55 55 0 0 0-9 0 39 39 0 0 0-13 2 32 32 0 0 0-11 7 33 33 0 0 0-10 24v74h-35V144zm109-58h37v36h-37V86zm1 58h34v137h-34V144zm66 0h33l1 16c12-13 22-19 40-19q27 0 41 20 11-11 22-15t25-5q26 0 40 15t14 42v83h-34v-83q0-13-7-20t-18-7a30 30 0 0 0-23 10 34 34 0 0 0-6 12 45 45 0 0 0-3 14v74h-34v-83q0-13-7-20c-11-12-31-8-41 3a35 35 0 0 0-6 12 45 45 0 0 0-2 14v74h-35V144zm559-58h37v36h-37V86zm2 58h34v137h-34z"></path><rect width="417" height="41" x="53" y="285" rx="8" ry="8"></rect><path d="M62 259l128-1a9 9 0 0 0 6-2 12 12 0 0 0 3-4 13 13 0 0 0 1-5 10 10 0 0 0-3-7L17 68a10 10 0 0 0-7-3 10 10 0 0 0-7 2 9 9 0 0 0-3 4 13 13 0 0 0 0 6l51 174c1 6 5 8 11 8zm399 0l-128-1a9 9 0 0 1-6-2 12 12 0 0 1-3-4 13 13 0 0 1-1-5 10 10 0 0 1 3-7L506 68a10 10 0 0 1 7-3 10 10 0 0 1 7 2 9 9 0 0 1 3 4 14 14 0 0 1 0 6l-51 174c-1 6-5 8-11 8zm-75-141L272 4a15 15 0 0 0-22 0L136 118a15 15 0 0 0 0 22l114 114c6 6 17 6 23 0l113-114a15 15 0 0 0 0-22zm-193 30a19 19 0 1 1 19-19 19 19 0 0 1-19 19zm68 68a19 19 0 1 1 19-19 19 19 0 0 1-19 19zm0-68a19 19 0 1 1 19-19 19 19 0 0 1-19 19zm0-68a19 19 0 1 1 19-19 19 19 0 0 1-19 19zm68 68a19 19 0 1 1 19-19 19 19 0 0 1-19 19z"></path></svg>
          </div>
          <div className="m-3" style={{ cursor: 'pointer' }} onClick={this.handleClickBitvest}>
            <img alt="Bitvest" src="https://cdn.worldvectorlogo.com/logos/bitvest.svg" style={{ width: '35%' }} title="Bitvest" />
          </div>
        </div>
      </div>
    )
  }
}