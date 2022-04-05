/********************************************************************
 This file is a custom kwin effects extension for the KDE project.

 2022, Reverse engineered by Leaf Watoru

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*********************************************************************/

/*choose your effect here*/
var open_animation = "flip"
var open_duration = 200;

var close_animation = "flip"
var close_duration = 300;


/*
Possible values for the open animation:
maximize_1000
minimize_to_center
zoom_in_from_bottom
minimize_to_top
minimize_to_left
minimize_to_right
slide_to_right
slide_to_left
slide_to_top
slide_to_bottom
jump_down
shrink_horizontally_to_center
fly_and_minimize_to_right
shrink_vertically_to_center
shrink_verticaly
shrink_horizontally
zoom_flip
flip
paper_plane_like
stretch_horizontally


Possible values for the close animation:
unmaximize_1000
unminimize
zoom_in_from_top
zoom_in_from_left
zoom_in_from_right
move_in_from_right
move_in_from_left
move_in_from_top
move_in_from_bottom
jump_up
vertical_from_center
fly_in_from_right
horizontal_from_center
vertical_rhombus_assemble
horizontal_rhombus_assemble
zoom_flip
flip
ride_from_left_thread
thread


*/


var window = {}


/*Effects*/
var close_effects = {
    maximize_1000: [
        {
            effect: "Scale",
            to: {
                value1: 10.0,
                value2: 10.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        }
    ],

    minimize_to_center: [
        {
            effect: "Scale",
            to: {
                value1: 0.0,
                value2: 0.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        }
    ],

    zoom_in_from_bottom: [
        {
            effect: "Scale",
            to: {
                value1: 0.0,
                value2: 0.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        },
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: 200
            }, from: {
                value1: 0,
                value2: 0
            },
        }
    ],

    minimize_to_top: [
        {
            effect: "Scale",
            to: {
                value1: 0.0,
                value2: 0.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        },
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: -200
            }, from: {
                value1: 0,
                value2: 0
            }
        }
    ],

    minimize_to_left: [
        {
            effect: "Scale",
            to: {
                value1: 0.0,
                value2: 0.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        },
        {
            effect: "Translation",
            to: {
                value1: -200,
                value2: 0
            }, from: {
                value1: 0,
                value2: 0
            }
        }
    ],

    minimize_to_right: [
        {
            effect: "Scale",
            to: {
                value1: 0.0,
                value2: 0.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        },
        {
            effect: "Translation",
            to: {
                value1: 200,
                value2: 0
            }, from: {
                value1: 0,
                value2: 0
            }
        }
    ],

    slide_to_right: [
        {
            effect: "Translation",
            to: {
                value1: 200,
                value2: 0
            }, from: {
                value1: 0,
                value2: 0
            }
        }
    ],

    slide_to_left: [
        {
            effect: "Translation",
            to: {
                value1: -200,
                value2: 0
            }, from: {
                value1: 0,
                value2: 0
            }
        }
    ],

    slide_to_top: [
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: -200
            }, from: {
                value1: 0,
                value2: 0
            }
        }
    ],

    slide_to_bottom: [
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: 200
            }, from: {
                value1: 0,
                value2: 0
            }
        }
    ],

    jump_down: [
        {
            effect: "Scale",
            to: {
                value1: 0.0,
                value2: 0.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        },
        {
            effect: "Size",
            to: {
                value1: window.width,
                value2: 0
            }, from: {
                value1: window.width,
                value2: window.height
            }
        }
    ],

    shrink_horizontally_to_center: [
        {
            effect: "Scale",
            to: {
                value1: window.width,
                value2: 0
            }, from: {
                value1: window.width,
                value2: window.height
            }
        }
    ],

    fly_and_minimize_to_right: [
        {
            effect: "Scale",
            to: {
                value1: 0.0,
                value2: 0.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        },
        {
            effect: "Size",
            to: {
                value1: 0,
                value2: window.height
            }, from: {
                value1: window.width,
                value2: window.height
            }
        }
    ],

    shrink_vertically_to_center: [
        {
            effect: "Size",
            to: {
                value1: 0,
                value2: window.height
            }, from: {
                value1: window.width,
                value2: window.height
            }
        }
    ],

    shrink_verticaly: [
        {
            effect: "Size",
            to: {
                value1: 0,
                value2: window.height * 2
            }, from: {
                value1: window.width,
                value2: window.height
            }
        }
    ],

    shrink_horizontally: [
        {
            effect: "Size",
            to: {
                value1: window.width * 2,
                value2: 0
            }, from: {
                value1: window.width,
                value2: window.height
            }
        }
    ],

    zoom_flip: [
        {
            effect: "Scale",
            to: {
                value1: 0.0,
                value2: 0.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        },
        {
            effect: "Rotation",
            to: {
                value1: -90,
                value2: -90
            }, from: {
                value1: 0,
                value2: 0
            }
        }
    ],

    flip: [
        {
            effect: "Rotation",
            to: {
                value1: -90,
                value2: -90
            }, from: {
                value1: 0,
                value2: 0
            }
        }
    ],

    paper_plane_like: [
        {
            effect: "Scale",
            to: {
                value1: 0.0,
                value2: 0.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        },
        {
            effect: "Scale",
            to: {
                value1: 10.0,
                value2: 0.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        }
    ],

    stretch_horizontally: [
        {
            effect: "Scale",
            to: {
                value1: 10.0,
                value2: 0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        },
        {
            effect: "Opacity",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 1.0,
                value2: 1.0
            }
        }
    ]
}


var open_effects = {
    unmaximize_1000: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 10.0,
                value2: 10.0
            }
        }
    ],

    unminimize: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 0.0,
                value2: 0.0
            }
        }
    ],

    zoom_in_from_bottom: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 0.0,
                value2: 0.0
            }
        },
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: 0
            }, from: {
                value1: 0,
                value2: 200
            }
        }
    ],
    // move from right!!!!
    zoom_in_from_top: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 0.0,
                value2: 0.0
            }
        },
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: 0
            }, from: {
                value1: 0,
                value2: -200
            }
        }
    ],

    zoom_in_from_left: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 0.0,
                value2: 0.0
            }
        },
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: 0
            }, from: {
                value1: -200,
                value2: 0
            }
        }
    ],

    zoom_in_from_right: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 0.0,
                value2: 0.0
            }
        },
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: 0
            }, from: {
                value1: 200,
                value2: 0
            }
        }
    ],

    move_in_from_right: [
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: 0
            }, from: {
                value1: 200,
                value2: 0
            }
        }
    ],

    move_in_from_left: [
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: 0
            }, from: {
                value1: -200,
                value2: 0
            }
        }
    ],

    move_in_from_top: [
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: 0
            }, from: {
                value1: 0,
                value2: -200
            }
        }
    ],

    move_in_from_bottom: [
        {
            effect: "Translation",
            to: {
                value1: 0,
                value2: 0
            }, from: {
                value1: 0,
                value2: 200
            }
        }
    ],

    jump_up: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 0.0,
                value2: 0.0
            }
        },
        {
            effect: "Size",
            to: {
                value1: window.width,
                value2: window.height
            }, from: {
                value1: window.width,
                value2: 0
            }
        }
    ],

    vertical_from_center: [
        {
            effect: "Scale",
            to: {
                value1: window.width,
                value2: window.height
            },
            from: {
                value1: window.width,
                value2: 0
            }
        }
    ],

    fly_in_from_right: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 0.0,
                value2: 0.0
            }
        },
        {
            effect: "Size",
            to: {
                value1: window.width,
                value2: window.height
            },
            from: {
                value1: 0,
                value2: window.height
            }
        }
    ],

    horizontal_from_center: [
        {
            effect: "Size",
            to: {
                value1: window.width,
                value2: window.height
            }, from: {
                value1: 0,
                value2: window.height
            }
        }
    ],

    vertical_rhombus_assemble: [
        {
            effect: "Size",
            to: {
                value1: window.width,
                value2: window.height
            }, from: {
                value1: 0,
                value2: window.height * 2
            }
        }
    ],

    horizontal_rhombus_assemble: [
        {
            effect: "Size",
            to: {
                value1: window.width,
                value2: window.height
            }, from: {
                value1: window.width * 2,
                value2: 0
            }
        }
    ],

    zoom_flip: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 0.0,
                value2: 0.0
            }
        },
        {
            effect: "Rotation",
            to: {
                value1: 0,
                value2: 0,
            }, from: {
                value1: -90,
                value2: -90
            }
        }
    ],

    flip: [
        {
            effect: "Rotation",
            to: {
                value1: 0,
                value2: 0,
            }, from: {
                value1: -90,
                value2: -90
            }
        }
    ],

    ride_from_left_thread: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 0.0,
                value2: 0.0
            }
        },
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 10.0,
                value2: 0.0
            }
        }
    ],

    thread: [
        {
            effect: "Scale",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 10.0,
                value2: 0
            }
        },
        {
            effect: "Opacity",
            to: {
                value1: 1.0,
                value2: 1.0
            }, from: {
                value1: 0.0,
                value2: 0.0
            }
        }
    ]
}


/*global effect, effects, animationTime, Effect*/
var kwinDevEffect = {
    duration: animationTime(300),
    loadConfig: function () {
        "use strict";
        kwinDevEffect.duration = animationTime(300);
    },
    windowClosed: function (window) {
        "use strict";

        var close_params = close_effects[close_animation];
        close_params.forEach(function (sub_effect) {
            effect.animate(window, Effect[sub_effect.effect], close_duration, sub_effect.to, sub_effect.from)
        })

    },
    windowAdded: function (window) {
        "use strict";

        var open_params = open_effects[open_animation];
        open_params.forEach(function (sub_effect) {
            effect.animate(window, Effect[sub_effect.effect], open_duration, sub_effect.to, sub_effect.from)
        })

    },

    init: function () {
        "use strict";
        effect.configChanged.connect(kwinDevEffect.loadConfig);
        effects.windowClosed.connect(kwinDevEffect.windowClosed);
        effects.windowAdded.connect(kwinDevEffect.windowAdded);
    }
};
kwinDevEffect.init();
