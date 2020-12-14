document.fonts.ready.then(function () {

  container = document.getElementById("logo");

  var text = new Blotter.Text("© MWARE 2021", {
      family: "'universe', Helvetica",
      size: 77,
      fill: "#000000",
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
  });

  var material = new Blotter.FliesMaterial();
  material.uniforms.uPointCellWidth.value = 0.03;
  material.uniforms.uPointRadius.value = 1.0;
  material.uniforms.uSpeed.value = 2;

  var blotter = new Blotter(material, {
      texts: text
  });

  var scope = blotter.forText(text);
  scope.appendTo(container);

  container = document.getElementById("line1");

  var text = new Blotter.Text("AESTHETIC E-COMMERCE WITH A", {
      family: "'garamond_narrow'",
      size: 85,
      fill: "#000000",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
  });

  var material = new Blotter.FliesMaterial();
  material.uniforms.uPointCellWidth.value = 0.03;
  material.uniforms.uPointRadius.value = 1.0;
  material.uniforms.uSpeed.value = 2;

  var blotter = new Blotter(material, {
      texts: text
  });

  var scope = blotter.forText(text);
  scope.appendTo(container);

  container = document.getElementById("line2");

  var text = new Blotter.Text("NARRATIVE PRODUCED IN MADRID", {
      family: "'garamond_narrow'",
      size: 85,
      fill: "#000000",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
  });

  var material = new Blotter.FliesMaterial();
  material.uniforms.uPointCellWidth.value = 0.03;
  material.uniforms.uPointRadius.value = 1.0;
  material.uniforms.uSpeed.value = 2;

  var blotter = new Blotter(material, {
      texts: text
  });

  var scope = blotter.forText(text);
  scope.appendTo(container);

  container = document.getElementById("line3");

  var text = new Blotter.Text("AND CONSUMED AROUND THE WORLD", {
      family: "'garamond_narrow'",
      size: 85,
      fill: "#000000",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
  });

  var material = new Blotter.FliesMaterial();
  material.uniforms.uPointCellWidth.value = 0.03;
  material.uniforms.uPointRadius.value = 1.0;
  material.uniforms.uSpeed.value = 2;

  var blotter = new Blotter(material, {
      texts: text
  });

  var scope = blotter.forText(text);
  scope.appendTo(container);

  container = document.getElementById("logo2");

  var text = new Blotter.Text("MWARE", {
      family: "'universe', Helvetica",
      size: 33,
      fill: "#000000",
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
  });

  var material = new Blotter.FliesMaterial();
  material.uniforms.uPointCellWidth.value = 0.03;
  material.uniforms.uPointRadius.value = 1.1;
  material.uniforms.uSpeed.value = 2;

  var blotter = new Blotter(material, {
      texts: text
  });

  var scope = blotter.forText(text);
  scope.appendTo(container);

  container = document.getElementById("logo3");

  var text = new Blotter.Text("MWARE", {
      family: "'universe', Helvetica",
      size: 66,
      fill: "#000000",
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
  });

  var material = new Blotter.FliesMaterial();
  material.uniforms.uPointCellWidth.value = 0.03;
  material.uniforms.uPointRadius.value = 1.1;
  material.uniforms.uSpeed.value = 2;

  var blotter = new Blotter(material, {
      texts: text
  });

  var scope = blotter.forText(text);
  scope.appendTo(container);

}.bind(this));
