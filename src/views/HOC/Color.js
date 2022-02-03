import React from "react";

// function js thông thường
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// nó không biết WrappedComponent là gì, nó cứ bọc nó lại trong return của nó
// nên HOC này có thể dùng cho mọi component
const Color = (WrappedComponent) => {
    const colorRandom = getRandomColor();

    // truyền props là syntax của HOC
    return (props) => (
        <div style={{ color: colorRandom }}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default Color;
