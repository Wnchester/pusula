def on_forever():
    if input.compass_heading() < 45:
        basic.show_string("K")
    elif input.compass_heading() < 90:
        basic.show_string("KD")
    elif input.compass_heading() < 135:
        basic.show_string("D")
    elif input.compass_heading() < 180:
        basic.show_string("GD")
    elif input.compass_heading() < 225:
        basic.show_string("G")
    elif input.compass_heading() < 270:
        basic.show_string("GB")
    elif input.compass_heading() < 315:
        basic.show_string("B")
    elif input.compass_heading() < 360:
        basic.show_string("KB")
    else:
        basic.show_string("K")
basic.forever(on_forever)
