const actionWITHAwait = async () => {
  changeDisplay('Starting Action WITH await');
  changeDisplay('F | Before calling Promise');

  await functionWithPromise();

  changeDisplay('F | After calling Promise');
  changeDisplay();
};


const actionWITHOUTAwait = () => {
  changeDisplay('Starting Action WITHOUT await');
  changeDisplay('F | Before calling Promise');

  functionWithPromise();

  changeDisplay('F | After calling Promise');
};


const actionWithERROR = async () => {
  changeDisplay('Starting Action with ERROR');

  changeDisplay('F | Before calling Promise');
  try {

    await functionWithPromise(withError);

  } catch (error) {
    changeDisplay('F | There was an error !!');
    changeDisplay(error);
  }

  changeDisplay('F | After calling Promise');
  changeDisplay();
};


const functionWithPromise = (withError) => {
  return new Promise((resolve, reject) => setTimeout(() => {
    changeDisplay('P | After waiting 2 seconds in Promise');

    if (withError) {
      changeDisplay('P | oops..');
      reject('The error is ...');
    } else {
      changeDisplay('P | The Promise is all right');
      resolve();
    }

  }, twoSeconds));
}

const changeDisplay = (message) => {
  const element = document.getElementById(elementId);
  if (!element) { return }

  element.innerHTML += `<br/>`;
  if (message) {
    const messageId = (id < 10 ? '0' : '') + id
    element.innerHTML += `Message ${messageId} : ${message}`;
    id++;
  }
}

const cleanMessages = () => {
  document.getElementById(elementId).innerHTML = '';
  id = 1;
}

let id = 1;
const twoSeconds = 2 * 1000;
const withError = true;
const elementId = 'display';