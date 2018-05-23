function store_radios(storage) {
  bind_storage_radios_handler(storage);
  set_storage_radios_checked(storage);
}

function bind_storage_radios_handler(storage) {
  document.querySelectorAll('input[type=radio]').forEach(function(node) {
    node.onchange = function(e) {
      if (e.target.checked) {
        storage[e.target.name] = e.target.value;
      }
    }
  })
}

function set_storage_radios_checked(storage) {
  Object.keys(storage).forEach(function(name) {
    try {
      set_radio_checked(name, storage[name])
    } catch(err) {
      // Do nothing.
    }
  });
}

function set_radio_checked(name, value) {
  document.querySelector(`input[name='${name}'][value='${value}']`).checked = true;
}
