/**
 * Area of various shapes
 * Triangle -- input base and height
 * Sqaure -- input the length
 * Rectangle -- input length and width
 * Circle -- input the radius
 */

//% color="#2C3FAF" weight=100 icon="\u26d0"
namespace area {
    //% block="circle radius $radius"
    //% radius.defl=100
    //% radius.min=0 radius.max=1000
    export function circle(radius: number) {
        return Math.PI * radius * radius
    }

    //% block="square length $length"
    //% length.defl=10
    //% length.min=0 length.max=1000
    export function square(length: number) {
        return length * length
    }

    //% block="rectangle length $length width $width"
    //% length.defl=10
    //% length.min=0 length.max=1000
    //% width.defl=10
    //% width.min=0 width.max=1000
    export function rectangle(length: number, width: number) {
        return length * width
    }

    //% block="triangle base $base height $height"
    //% base.defl=1
    //% height.defl=1
    export function triangle(base: number, height: number) {
        return 0.5 * base * height
    }

}
