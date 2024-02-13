var colorSelect = document.getElementById('color');
var outputDiv = document.getElementById('output');
var color_codes = {
    Black: 0,
    Blue: 1,
    Green: 2,
    Aqua: 3,
    Red: 4,
    Purple: 5,
    Yellow: 6,
    White: 7,
    LightGreen: "A",
    LightAqua: "B",
    LightRed: "C",
    LightPurple: "D",
    LightYellow: "E",
    BrightWhite: "F",
};

colorSelect.addEventListener('change', function() {
    var selectedColor = colorSelect.value;
    var colorCode = color_codes[selectedColor];

    outputDiv.textContent = "You selected: " + colorCode;
});