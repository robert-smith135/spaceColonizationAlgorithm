//import typescirpt types. 
///<reference path='../p5-global-mode.d.ts'/>

//import modules
import Tree from "./tree";
import imageProcessor from "./imageProcessor";

//extend existing window property, we have to put the draw and setup functinos of the global window object for p5 to work in global mode
declare global {
    interface Window { 
        setup: any;
        draw: any;
        mousePressed: any;
        mouseReleased: any;
        preload: any;
    }
}

var tree: Tree
var max_distance = 100;
var min_distance = 10;
var pressed = false
var image: imageProcessor;
var sourceImage: p5.Image;
//preload image

let preload = function() {
    sourceImage = loadImage("./image.jpg");
}

let setup = function() {
    createCanvas(800, 800);
    image = new imageProcessor(sourceImage);
    tree = new Tree(200, createVector(width/2, 800), max_distance, min_distance, sourceImage);
}

let draw = function() {
    image.drawImage();
    if(pressed){
        tree.draw();
        tree.growBranches();
    }
}

let mousePressed = function(){
    pressed = true
}

let mouseReleased = function(){
    pressed = false
}

window.preload = preload;
window.mouseReleased = mousePressed
window.mousePressed = mousePressed
window.setup = setup;
window.draw = draw;
