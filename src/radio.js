function storeRadios(storage) {
  bindStorageRadiosHandler(storage);
  setStorageRadiosChecked(storage);
}

function bindStorageRadiosHandler(storage) {
  document.querySelectorAll('input[type=radio]').forEach(function(node) {
    node.onchange = function(e) {
      if (e.target.checked) {
        storage[e.target.name] = e.target.value;
      }
    };
  });
}

function setStorageRadiosChecked(storage) {
  Object.keys(storage).forEach(function(name) {
    try {
      setRadioChecked(name, storage[name]);
    } catch(err) {
      // Do nothing.
    }
  });
}

function setRadioChecked(name, value) {
  document.querySelector(`input[name='${name}'][value='${value}']`).checked = true;
}

export { storeRadios };
