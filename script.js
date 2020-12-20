function angleBetweenPointsInDegrees(x1, y1, x2, y2) {
    var angle = (Math.atan2(y2 - y1, x2 - x1) * 180.0) / Math.PI;
  
    angle = 180 + angle;
  
    return angle;
  }
  
  function distanceBetweenPoints(x1, y1, x2, y2) {
    var a = x1 - x2;
    var b = y1 - y2;
  
    return Math.sqrt(a * a + b * b);
  }

document.fonts.ready.then ( function () {

    var text = new Blotter.Text("© MWARE 2021", {
        family : "'universe', Helvetica",
        size : 85,
        leading: 1.3,
        fill: "#000000",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });

    var text2 = new Blotter.Text("AESTHETIC E-COMMERCE WITH A", {
        family: "'garamond_narrow',Arial",
        size: 85,
        leading: 1.3,
        fill: "#000000",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });

    var text3 = new Blotter.Text("NARRATIVE PRODUCED IN MADRID", {
        family: "'garamond_narrow',Arial",
        size: 85,
        leading: 1.3,
        fill: "#000000",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });
    var text4 = new Blotter.Text("AND CONSUMED AROUND THE WORLD", {
        family: "'garamond_narrow',Arial",
        size: 85,
        leading: 1.3,
        fill: "#000000",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });

    var text5 = new Blotter.Text("© MWARE 2021", {
        family: "universe, Helvetica",
        size: 97,
        leading: 1.3,
        fill: "#000000",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });

    var text6 = new Blotter.Text("AESTHETIC E-COMMERCE WITH A", {
        family: "garamond_narrow",
        size: 105,
        leading: 1.3,
        fill: "#000000",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });

    var text7 = new Blotter.Text("NARRATIVE PRODUCED IN MADRID", {
        family: "garamond_narrow",
        size: 105,
        leading: 1.3,
        fill: "#000000",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });

    var text8 = new Blotter.Text("AND CONSUMED AROUND THE WORLD", {
        family: "garamond_narrow",
        size: 105,
        leading: 1.3,
        fill: "#000000",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });

    var text9 = new Blotter.Text("MWARE", {
        family: "universe, Helvetica",
        size: 34,
        leading: 1.3,
        fill: "#000000",
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });

    var text1 = new Blotter.Text("MWARE", {
        family: "universe, Helvetica",
        size: 66,
        leading: 1.3,
        fill: "#000000",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });

    let options = {
        autobuild : true,
        texts : [text, text2 ,text3 , text4, text5, text6, text7, text8, text9, text1]
    };

    var material = new Blotter.FliesMaterial();
    material.uniforms.uPointCellWidth.value = 0.03;
    material.uniforms.uPointRadius.value = 1.0;
    material.uniforms.uSpeed.value = 2;
    var blotter = new Blotter(material,options);
    var container = document.getElementById("line1");
    var scope = blotter.forText(text);
    scope.appendTo(container);
    var container2 = document.getElementById('line2');
    var scope2 = blotter.forText(text2);
    scope2.appendTo(container2);
    var container3 = document.getElementById('line3');
    var scope3 = blotter.forText(text3);
    scope3.appendTo(container3);
    var container4 = document.getElementById('line4');
    var scope4 = blotter.forText(text4);
    scope4.appendTo(container4);
    var container5 = document.getElementById('line1.5');
    var scope5 = blotter.forText(text5);
    scope5.appendTo(container5);
    var container6 = document.getElementById('line2.5');
    var scope6 = blotter.forText(text6);
    scope6.appendTo(container6);
    var container7 = document.getElementById('line3.5');
    var scope7 = blotter.forText(text7);
    scope7.appendTo(container7);
    var container8 = document.getElementById('line4.5');
    var scope8 = blotter.forText(text8);
    scope8.appendTo(container8);
    var container9 = document.getElementById('line5');
    var scope9 = blotter.forText(text9);
    scope9.appendTo(container9);
    var container1 = document.getElementById('line6');
    var scope1 = blotter.forText(text1);
    scope1.appendTo(container1);


    document.onmousemove = moveIt;
        function moveIt(event) {
            material.uniforms.uPointCellWidth.value = (event.clientX * .0001);
        }

});