const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

let count = 0;

const increment = () => {
	count += 1;
	countEl.textContent = count;

	if (count > 11) {
		count += 2;
		countEl.innerText = count;
	}
};

const decrement = () => {
	count -= 1;
	countEl.textContent = count;
};

const reset = () => {
	let resetNumber;
	resetNumber = 0;
	countEl.textContent = resetNumber;
	count = 0;
	saveEl.textContent = "Previous Enteries: ";
};

const save = () => {
	let saveNumber = ` ${count} - `;
	saveEl.textContent += saveNumber;
};
