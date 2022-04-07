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
Possible values for the close animation:
only_opacity
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


Possible values for the open animation:
only_opacity
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



/*Effects*/
var close_effects = {
  only_opacity: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
  ],

  maximize_1000: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
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

  slide_to_left: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
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

  slide_to_top: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
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

  slide_to_bottom: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
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
      }
    }
  ],

  jump_down: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },

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
        value1: "width",
        value2: 0
      }, from: {
        value1: "width",
        value2: "height"
      }
    }
  ],

  shrink_horizontally_to_center: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: "width",
        value2: 0
      }, from: {
        value1: "width",
        value2: "height"
      }
    }
  ],

  fly_and_minimize_to_right: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
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
        value2: "height"
      }, from: {
        value1: "width",
        value2: "height"
      }
    }
  ],

  shrink_vertically_to_center: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Size",
      to: {
        value1: 0,
        value2: "height"
      }, from: {
        value1: "width",
        value2: "height"
      }
    }
  ],

  shrink_verticaly: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Size",
      to: {
        value1: 0,
        value2: "double_height"
      }, from: {
        value1: "width",
        value2: "height"
      }
    }
  ],

  shrink_horizontally: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Size",
      to: {
        value1: "double_width",
        value2: 0
      }, from: {
        value1: "width",
        value2: "height"
      }
    }
  ],

  zoom_flip: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
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

  paper_plane_like: [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      }, from: {
        value1: 1.0,
        value2: 1.0
      }
    },
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
  only_opacity: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
  ],

  unmaximize_1000: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
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

  move_in_from_left: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
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

  move_in_from_top: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
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

  move_in_from_bottom: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
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

  jump_up: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
        value1: "width",
        value2: "height"
      }, from: {
        value1: "width",
        value2: 0
      }
    }
  ],

  vertical_from_center: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: "width",
        value2: "height"
      },
      from: {
        value1: "width",
        value2: 0
      }
    }
  ],

  fly_in_from_right: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
        value1: "width",
        value2: "height"
      },
      from: {
        value1: 0,
        value2: "height"
      }
    }
  ],

  horizontal_from_center: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Size",
      to: {
        value1: "width",
        value2: "height"
      }, from: {
        value1: 0,
        value2: "height"
      }
    }
  ],

  vertical_rhombus_assemble: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Size",
      to: {
        value1: "width",
        value2: "height"
      }, from: {
        value1: 0,
        value2: "double_height"
      }
    }
  ],

  horizontal_rhombus_assemble: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Size",
      to: {
        value1: "width",
        value2: "height"
      }, from: {
        value1: "double_width",
        value2: 0
      }
    }
  ],

  zoom_flip: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
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

  ride_from_left_thread: [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      }, from: {
        value1: 0,
        value2: 0
      }
    },
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
  ]
}


function attach_to_window_object(sub_effect, window) {
  for (prop1 in sub_effect) {
    if (typeof sub_effect[prop1] != "string") {
      for (prop2 in sub_effect[prop1]) {
        switch (sub_effect[prop1][prop2]) {
          case "width":
            sub_effect[prop1][prop2] = window.width
            break
          case "height":
            sub_effect[prop1][prop2] = window.height
            break
          case "double_width":
            sub_effect[prop1][prop2] = window.width * 2
            break
          case "double_height":
            sub_effect[prop1][prop2] = window.height * 2
            break
        }
      }
    }
  }
  sub_effect.to.value1
  sub_effect.to.value2
  sub_effect.from.value1
  sub_effect.from.value2
  return sub_effect;
}

/*global effect, effects, animationTime, Effect*/
var kwinDevEffect = {
  duration: animationTime(300),
  loadConfig: function () {
    "use strict";
    kwinDevEffect.duration = animationTime(300);
    isFadeToBlack: false,
    kwinDevEffect.isFadeToBlack = effect.readConfig("FadeToBlack", false);
  },
  windowClosed: function (window) {
    "use strict";

    var close_params = close_effects[close_animation];
    close_params.forEach(function (sub_effect) {
      attach_to_window_object(sub_effect, window)
      effect.animate(window, Effect[sub_effect.effect], close_duration, sub_effect.to, sub_effect.from)
    })



  },
  windowAdded: function (window) {
    "use strict";

    var open_params = open_effects[open_animation];
    open_params.forEach(function (sub_effect) {
      attach_to_window_object(sub_effect, window)
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
