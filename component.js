
window.MyLoginZoidComponent = zoid.create({
    dimensions: {
        width: '300px',
        height: '150px',
    },

    // The html tag used to render my component

    tag: 'my-login-component',

    // The url that will be loaded in the iframe or popup, when someone includes my component on their page

    url: "http://localhost:4201",

    buttonClick: {
      type: 'function',
      required: true
    },

  close: {
    type: 'function',
    required: true
  }
});
