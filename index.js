// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )
class ColorBox extends React.Component {
	state = {
		color: this._randomColor(),
		isLocked: false,
		lockText: 'Lock',
	};

	_randomColor() {
		return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
	}

	randomizeColors() {
		this.setState({ color: this._randomColor() });
	}

	render() {
		const style = {
			// border: "2px solid black",
			backgroundColor: this.state.color,
			// width: "100px",
			// height: "200px"
		};

		let lockColor = e => {
			e.stopPropagation();
			if (this.state.isLocked === false) {
				this.setState({ isLocked: true, lockText: 'Unlock' });
			} else if (this.state.isLocked === true) {
				this.setState({ isLocked: false, lockText: 'Locks' });
			}
			console.log(this);
		};

		const clickHandler = () => {
			if (this.state.isLocked === false) {
				this.randomizeColors();
			} else return null;
		};

		return (
			<div
				onClick={clickHandler}
				style={style}
				className="w-100 d-flex flex-column align-items-center justify-content-center"
			>
				<h3>{this.state.color}</h3>
				<button onClick={lockColor} className="btn btn-dark">
					{this.state.lockText}
				</button>
			</div>
		);
	}
}

const App = function() {
	return (
		<div className="container">
			<div className="text-center bg-dark fixed-top">
				<button className="btn btn-secondary m-1">RANDOMIZE All COLORS</button>
				<div className="w-100 d-flex" style={{ height: '100vh' }}>
					<ColorBox name="First Box" />
					<ColorBox name="Second Box" />
					<ColorBox name="Third Box" />
					<ColorBox name="Fourth Box" />
					<ColorBox name="Fifth Box" />
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

// // Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )
// function ColorBox(props) {
// 	const style = {
// 		border: '2px solid black',
// 		backgroundColor: props.color,
// 		width: '100px',
// 		height: '200px',
// 	};
// 	const clickHandler = () => this.randomizeColors();

// 	return (
// 		<div onClick={clickHandler} style={style}>
// 			<h1>{props.color}</h1>
// 		</div>
// 	);
// }

// class App extends React.Component {
// 	state = {
// 		boxes: [{ color: this._randomColor() }, { color: this._randomColor() }, { color: this._randomColor() }],
// 	};

// 	_randomColor() {
// 		return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
// 	}

//     randomize() {
//         console.log('you clicked randomize. ')
//         const currentBoxes = this.state.boxes
//         const newBoxes = currentBoxes.map((box) => { return {color: this._randomColor()} })
//         const newState = {boxes: newBoxes}
//         this.setState(newState)
//     }

// 	render() {
// 		return (
// 			<div className="container">
// 				<div className="text-center ">
//                     <button onClick={() => this.randomize()}>Randomize!</button>
// 					<div className="d-flex justify-content-center">
// 						{this.state.boxes.map(ColorBox)}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// // const App = function(){
// //     return (<div className="container">

// //                 <div className="text-center ">
// //                     <div className="d-flex justify-content-center">
// //                         <ColorBox name="First Box" />
// //                         <ColorBox name="Second Box" />
// //                         <ColorBox name="Third Box" />
// //                         <ColorBox name="Fourth Box" />
// //                         <ColorBox name="Fifth Box" />
// //                     </div>

// //                 </div>
// //            </div>

// //     )
// // }

// ReactDOM.render(<App />, document.getElementById('root'));

// // // Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )

// // class ColorSwatch extends React.Component {
// //     state = {
// //         color: "#FF00FF"
// //     }

// //     // let randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

// //     // randomColor = () => {

// //     // }

// // 	render(props) {
// // 		return (
// //         <div style={{backgroundColor:this.state.color}} className="w-100 d-flex flex-column align-items-center justify-content-center">
// //         <h1>#FF00FF</h1>
// //         <button className="btn btn-dark">UNLOCK</button>
// //         </div>
// //         );
// // 	}
// // }

// // const App = props => {
// // 	return (
// // 		<div>
// //             <div className="text-center bg-dark fixed-top">
// //             <button className="btn btn-secondary m-1">RANDOMIZE COLORS</button>
// //             <div>
// //                 <div className="w-100 d-flex" style={{height: "100vh"}}>
// //                     <ColorSwatch/>
// //                     <ColorSwatch/>
// //                     <ColorSwatch/>
// //                     <ColorSwatch/>
// //                     <ColorSwatch/>
// //                 </div>
// //             </div>
// // 		</div>
// //         </div>
// // 	)
// // };

// // ReactDOM.render(<App />, document.getElementById('root'));
