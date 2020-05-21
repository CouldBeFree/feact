/*const target = {
	someProp: 1
}

const handler = {
	get: function (target, key) {
		return key in target ? target[key] : 'Doesnt exists'
	}
}
const proxy = new Proxy(target, handler);
console.log(proxy.someProp);*/

/*const input = document.querySelector('#username');

const inputState = {
	id: 'username',
	value: ''
}

const handler = {
	set: function (target, key, value) {
		if(target.id === 'username') {
			target[key] = value;
			document.querySelector(`#${target.id}`).value = value;
			return true;
		}
		return false;
	}
}

const proxy = new Proxy(inputState, handler);
proxy.value = 'John Doe';

input.addEventListener('input', (e) => {
	proxy.value = e.target.value;
	console.info('result', proxy.value, input.value);
})

console.info('result', proxy.value, input.value);*/
