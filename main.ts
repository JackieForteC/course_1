input.onButtonPressed(Button.A, function () {
    prueba += 1
    basic.showString("" + (prueba))
})
input.onButtonPressed(Button.AB, function () {
    texto1 = texto2
    basic.showString(texto1)
})
input.onButtonPressed(Button.B, function () {
    prueba += -1
    basic.showString("" + (prueba))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(texto1)
})
let texto2 = ""
let texto1 = ""
let prueba = 0
prueba = 0
texto1 = "Hola"
texto2 = "bye"
basic.forever(function () {
	
})
