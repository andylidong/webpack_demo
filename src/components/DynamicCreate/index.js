async function create() {
  const { default: _ } = await import('lodash');
  let element = document.createElement('p');
  element.innerHTML = _.join(['Andy', 'Lee'], '-');
  return element;
}

function DynamicCreate() {
  document.addEventListener('click', () => {
    create().then(element => document.querySelector('#root').appendChild(element));
  });
  return null;
}

export default DynamicCreate;