export function borderBox() {
  return `
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
  `;
}

export function widthFlex(width) {
    return `
        -ms-flex-preferred-size: ${width};
        flex-basis: ${width};
        max-width: ${width};
    `;
}

export function rowFlexBox(){
	return `
		box-sizing: border-box;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-flex: 0;
		-ms-flex: 0 1 auto;
		flex: 0 1 auto;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	`;
}
