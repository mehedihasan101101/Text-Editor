function makebold(boldId, italiId, underlineId, rightid, leftid, centerid, justifiedid, colorid,numberid) {
    const areavalue = document.getElementById("text-editor");

    // ------------------------------------boldButton---------------
    const becomenormalBold = document.getElementById("bold-button");
    const becomenormalBold2 = document.getElementById("bold-button-2");
    document.getElementById(boldId).addEventListener("click", function () {
        areavalue.style.fontWeight = "bold";
        becomenormalBold.style.display = "none";
        becomenormalBold2.style.display = "inline";
    })
    becomenormalBold2.addEventListener("click", function () {
        areavalue.style.fontWeight = "normal";
        becomenormalBold.style.display = "inline";
        becomenormalBold2.style.display = "none";
    })
    // ------------------------------------italic Button---------------
    const becomenormalItalic = document.getElementById("italic-button");
    const becomenormalItalic2 = document.getElementById("italic-button-2");

    document.getElementById(italiId).addEventListener("click", function () {
        areavalue.style.fontStyle = "italic";
        becomenormalItalic.style.display = "none";
        becomenormalItalic2.style.display = "inline";
    })
    becomenormalItalic2.addEventListener("click", function () {
        areavalue.style.fontStyle = "normal";
        becomenormalItalic.style.display = "inline";
        becomenormalItalic2.style.display = "none";
    })
    // -----------------------------------------underline button------------------
    const becomenormal = document.getElementById("underline-button");
    const becomenormal2 = document.getElementById("underline-button-2");
    document.getElementById(underlineId).addEventListener("click", function () {
        areavalue.style.textDecoration = "Underline";
        becomenormal.style.display = "none";
        becomenormal2.style.display = "inline";
    })
    becomenormal2.addEventListener("click", function () {
        areavalue.style.textDecoration = "none";
        becomenormal.style.display = "inline";
        becomenormal2.style.display = "none";
    })

    // -----------------------------------------align right button------------------
    const becomenormalright = document.getElementById("align-right-button");
    const becomenormalrights2 = document.getElementById("align-right-button-2");
    document.getElementById(rightid).addEventListener("click", function () {
        areavalue.style.textAlign = "right";
        becomenormalright.style.display = "none";
        becomenormalrights2.style.display = "inline";
    })
    becomenormalrights2.addEventListener("click", function () {
        areavalue.style.textAlign = "left";
        becomenormalright.style.display = "inline";
        becomenormalrights2.style.display = "none";
    })
    // -----------------------------------------align left button------------------
    document.getElementById(leftid).addEventListener("click", function () {
        areavalue.style.textAlign = "left";
    })
    // -----------------------------------------center button------------------

    const becomenormalcenter = document.getElementById("align-center-button");
    const becomenormalcenter2 = document.getElementById("align-center-button-2");
    document.getElementById(centerid).addEventListener("click", function () {
        areavalue.style.textAlign = "center";
        becomenormalcenter.style.display = "none";
        becomenormalcenter2.style.display = "inline";
    })
    becomenormalcenter2.addEventListener("click", function () {
        areavalue.style.textAlign = "left";
        becomenormalcenter.style.display = "inline";
        becomenormalcenter2.style.display = "none";
    })
    // ------------------------------------------ JUSTIFIED BUTTON------------------
    const becomenormaljustified = document.getElementById("align-justified-button");
    const becomenormaljustified2 = document.getElementById("align-justified-button-2");
    document.getElementById(justifiedid).addEventListener("click", function () {
        areavalue.style.textAlign = "justify";
        becomenormaljustified.style.display = "none";
        becomenormaljustified2.style.display = "inline";
    })
    becomenormaljustified2.addEventListener("click", function () {
        areavalue.style.textAlign = "start";
        becomenormaljustified.style.display = "inline";
        becomenormaljustified2.style.display = "none";
    })
    // ------------------------------------------ color change------------------
    document.getElementById(colorid).addEventListener("input", function () {
        var colorCode = document.getElementById(colorid);
        var colorr = colorCode.value;
        areavalue.style.color = colorr;
    })
    // ------------------------------------------ color number------------------
    document.getElementById(numberid).addEventListener("input", function () {
        let numbercode = document.getElementById(numberid);
        let areavalue = document.getElementById("text-editor");
        let code = numbercode.value;
        areavalue.style.fontSize = code + "px";


    })

}

