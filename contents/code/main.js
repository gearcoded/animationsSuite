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

/*Effects*/
var openEffects = [
  // turn off open effects
  [{ effect: null }],

  // Opacity: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
  ],

  // compress: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 2.0,
        value2: 2.0
      }
    }
  ],

  // Expand: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    }
  ],

  // Expand 75% (aka Cool Effect): 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.75,
        value2: 0.75
      }
    }
  ],


  // Thread horizontal: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 0.1
      },
      from: {
        value1: 10,
        value2: 0
      }
    },
  ],


  // Thread vertical: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.1,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 10
      }
    },
  ],

  // Acid Thread Horizontal: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 0.1
      },
      from: {
        value1: 10,
        value2: 0
      }
    },
    {
      effect: "Saturation",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 10,
        value2: 10
      }
    },

  ],

  // Acid Thread vertical: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.1,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 10
      }
    },
    {
      effect: "Saturation",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 10,
        value2: 10
      }
    },

  ],




  // Unfold Left: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: -200,
        value2: 0
      }
    }
  ],

  // Unfold Right: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 200,
        value2: 0
      }
    }
  ],

  // Unfold Top: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 0,
        value2: -200
      }
    }
  ],

  // Unfold Bottom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 0,
        value2: 200
      }
    }
  ],

  // Unfold Top Left: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: -200,
        value2: -200
      }
    }
  ],

  // Unfold Top Right: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 200,
        value2: -200
      }
    }
  ],

  // Unfold Bottom Left: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: -200,
        value2: 200
      }
    }
  ],

  // Unfold Bottom Right: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 200,
        value2: 200
      }
    }
  ],




  // Unfold Left + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: -200,
        value2: 0
      }
    }
  ],

  // Unfold Right + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 200,
        value2: 0
      }
    }
  ],

  // Unfold Top + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 0,
        value2: -200
      }
    }
  ],

  // Unfold Bottom + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 0,
        value2: 200
      }
    }
  ],




  // Unfold Top Left: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: -200,
        value2: -200
      }
    }
  ],

  // Unfold Top Right: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 200,
        value2: -200
      }
    }
  ],

  // Unfold Bottom Left: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: -200,
        value2: 200
      }
    }
  ],

  // Unfold Bottom Right: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 200,
        value2: 200
      }
    }
  ],




  // Grow: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
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
        value2: 0
      }
    }
  ],

  // Switched Sizes: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Size",
      to: {
        value1: "width",
        value2: "height"
      },
      from: {
        value1: "height",
        value2: "width"
      }
    }
  ],



  // Diagonal Expand: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
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
        value2: 0
      }
    },
  ],

  // Flip Top: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 0,
        value2: 0,
      },
      from: {
        value1: 30,
        value2: 30
      }
    }
  ],

  // Flip Bottom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 0,
        value2: 0,
      },
      from: {
        value1: -30,
        value2: -30
      }
    }
  ],


  // Zoom Flip Top: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 0,
        value2: 0,
      },
      from: {
        value1: 90,
        value2: 90
      }
    }
  ],


  // Zoom Flip Bottom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0.0,
        value2: 0.0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 0,
        value2: 0,
      },
      from: {
        value1: -90,
        value2: -90
      }
    }
  ],

  // Cube Turn Top Outside: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 0,
        value2: -200
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 0,
        value2: 0,
      },
      from: {
        value1: 90,
        value2: 90
      }
    }

  ],

  // Cube Turn Bottom Outside: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 0,
        value2: 200
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 0,
        value2: 0,
      },
      from: {
        value1: -90,
        value2: -90
      }
    }

  ],

  // Cube Turn Top Inside: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 0,
        value2: -200
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 0,
        value2: 0,
      },
      from: {
        value1: -90,
        value2: -90
      }
    }

  ],

  // Cube Turn Bottom Inside: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 0,
        value2: 200
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 0,
        value2: 0,
      },
      from: {
        value1: 90,
        value2: 90
      }
    }

  ],

  // Fade from Dark: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Brightness",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },

  ],

  // Fade from Light: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Brightness",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 2,
        value2: 2
      }
    },
  ],

  // Fade from Bleakness: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Saturation",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
  ],

  // Fade from Acid: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Saturation",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 10,
        value2: 10
      }
    },
  ],


  // Box: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
  ],

  // Box + Flip Top: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 0,
        value2: 0,
      },
      from: {
        value1: -90,
        value2: -90
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
  ],

  // Box + Flip Bottom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 0,
        value2: 0,
      },
      from: {
        value1: 90,
        value2: 90
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
  ],

  // Magnify: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1,
        value2: 1,
      },
      from: {
        value1: 4,
        value2: 4
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
  ],

  // Stretch Horizontal: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 4,
        value2: 0
      }
    },
  ],

  // Stretch Vertical: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 4
      }
    },
  ],


  // Exp: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Saturation",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 10,
        value2: 10
      }
    },
  ],


]


var closeEffects = [
  // turn off open effects
  [{ effect: null }],

  // Opacity: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
  ],

  // Compress: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1,
        value2: 1
      }
    }
  ],

  // Expand: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 2,
        value2: 2
      },
      from: {
        value1: 1,
        value2: 1
      }
    }
  ],

  // Expand 75% (aka Cool Effect):
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.75,
        value2: 0.75
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    }
  ],


  // Thread horizontal: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 10,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 0.1
      }
    },
  ],


  // Thread vertical: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0,
        value2: 10
      },
      from: {
        value1: 0.1,
        value2: 1.0
      }
    },
  ],

  // Acid Thread Horizontal: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 10,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 0.1
      }
    },
    {
      effect: "Saturation",
      to: {
        value1: 10,
        value2: 10
      },
      from: {
        value1: 1,
        value2: 1
      }
    },

  ],

  // Acid Thread vertical: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0,
        value2: 10
      },
      from: {
        value1: 0.1,
        value2: 1.0
      }
    },
    {
      effect: "Saturation",
      to: {
        value1: 10,
        value2: 10
      },
      from: {
        value1: 1,
        value2: 1
      }
    },

  ],




  // Unfold Left: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: -200,
        value2: 0
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Right: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 200,
        value2: 0
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Top: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: -200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Bottom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Top Left: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: -200,
        value2: -200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Top Right: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 200,
        value2: -200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Bottom Left: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: -200,
        value2: 200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Bottom Right: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 200,
        value2: 200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],




  // Unfold Left + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.0,
        value2: 0.0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: -200,
        value2: 0
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Right + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.0,
        value2: 0.0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 200,
        value2: 0
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Top + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.0,
        value2: 0.0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: -200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Bottom + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.0,
        value2: 0.0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],




  // Unfold Top Left + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.0,
        value2: 0.0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: -200,
        value2: -200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Top Right + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.0,
        value2: 0.0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 200,
        value2: -200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Bottom Left + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.0,
        value2: 0.0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: -200,
        value2: 200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Unfold Bottom Right + Zoom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.0,
        value2: 0.0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 200,
        value2: 200
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],




  // Grow: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Size",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: "width",
        value2: "height"
      }
    }
  ],

  // Switched Sizes: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Size",
      to: {
        value1: "half_height",
        value2: "half_width"
      },
      from: {
        value1: "width",
        value2: "height"
      }
    }
  ],

  // Diagonal Expand: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
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
        value1: "half_width",
        value2: "half_height"
      },
      from: {
        value1: "width",
        value2: "height"
      }
    },
  ],

  // Flip Top: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 30,
        value2: 30,
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Flip Bottom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 1.0,
        value2: 1.0
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: -30,
        value2: -30,
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],


  // Zoom Flip Top: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.0,
        value2: 0.0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 90,
        value2: 90,
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],


  // Zoom Flip Bottom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0.0,
        value2: 0.0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: -90,
        value2: -90,
      },
      from: {
        value1: 0,
        value2: 0
      }
    }
  ],

  // Cube Turn Top Outside: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: -200
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 90,
        value2: 90,
      },
      from: {
        value1: 0,
        value2: 0
      }
    }

  ],

  // Cube Turn Bottom Outside: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 200
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: -90,
        value2: -90,
      },
      from: {
        value1: 0,
        value2: 0
      }
    }

  ],

  // Cube Turn Top Inside: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: -200
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: -90,
        value2: -90,
      },
      from: {
        value1: 0,
        value2: 0
      }
    }

  ],

  // Cube Turn Bottom Inside: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Translation",
      to: {
        value1: 0,
        value2: 200
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 90,
        value2: 90,
      },
      from: {
        value1: 0,
        value2: 0
      }
    }

  ],

  // Fade from Dark: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Brightness",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1,
        value2: 1
      }
    },

  ],

  // Fade from Light: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Brightness",
      to: {
        value1: 2,
        value2: 2
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
  ],

  // Fade from Bleakness: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Saturation",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
  ],

  // Fade from Acid: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Saturation",
      to: {
        value1: 10,
        value2: 10
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
  ],


  // Box: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
  ],

  // Box + Flip Top: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: -90,
        value2: -90,
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
  ],

  // Box + Flip Bottom: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Rotation",
      to: {
        value1: 90,
        value2: 90,
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
  ],

  // Magnify: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 4,
        value2: 4,
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 0.5,
        value2: 0.5
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
  ],

  // Stretch Horizontal: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 4,
        value2: 0
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
  ],

  // Stretch Vertical: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
    {
      effect: "Scale",
      to: {
        value1: 0,
        value2: 4
      },
      from: {
        value1: 1,
        value2: 1
      }
    },
  ],


  // Exp: 
  [
    {
      effect: "Opacity",
      to: {
        value1: 0,
        value2: 0
      },
      from: {
        value1: 1.0,
        value2: 1.0
      }
    },
    {
      effect: "Clip",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 0,
        value2: 0
      }
    },
    {
      effect: "Saturation",
      to: {
        value1: 1,
        value2: 1
      },
      from: {
        value1: 10,
        value2: 10
      }
    },
  ],


]




function attachWindowObject(subEffect, window) {
  for (prop1 in subEffect) {
    if (typeof subEffect[prop1] != "string") {
      for (prop2 in subEffect[prop1]) {
        switch (subEffect[prop1][prop2]) {
          case "width":
            subEffect[prop1][prop2] = window.width
            break
          case "height":
            subEffect[prop1][prop2] = window.height
            break
          case "double_width":
            subEffect[prop1][prop2] = window.width * 2
            break
          case "double_height":
            subEffect[prop1][prop2] = window.height * 2
            break
          case "half_width":
            subEffect[prop1][prop2] = window.width / 2
            break
          case "half_height":
            subEffect[prop1][prop2] = window.height / 2
            break
        }
      }
    }
  }
  subEffect.to.value1
  subEffect.to.value2
  subEffect.from.value1
  subEffect.from.value2
  return subEffect;
}

function isModal(window){
  return window.popupWindow || window.outline 
  || window.dock || window.splash || window.toolbar
  || window.notification || window.onScreenDisplay
  || window.criticalNotification || window.utility || window.managed
}


var animationSuite = {
  duration: animationTime(300),
  loadConfig: function () {
    "use strict";

    animationSuite.openEffect = effect.readConfig("openEffect", false);
    animationSuite.openDuration = effect.readConfig("openDuration", false);

    animationSuite.closeEffect = effect.readConfig("closeEffect", false);
    animationSuite.closeDuration = effect.readConfig("closeDuration", false);

    animationSuite.openForModals = effect.readConfig("openForModals", false);
    animationSuite.closeForModals = effect.readConfig("closeForModals", false);

    animationSuite.minimizeEffect = effect.readConfig("minimizeEffect", false);
    animationSuite.minimizeDuration = effect.readConfig("minimizeDuration", false);

    animationSuite.unMinimizeEffect = effect.readConfig("unminimizeEffect", false);
    animationSuite.unMinimizeDuration = effect.readConfig("unminimizeDuration", false);


  },

  windowAdded: function (window) {
    "use strict";

    var openParams = openEffects[animationSuite.openEffect];
    openParams.forEach(function (subEffect) {
      attachWindowObject(subEffect, window)
      if (isModal(window) && !animationSuite.openForModals){
        return false;
      }

      effect.animate(window, Effect[subEffect.effect], animationSuite.openDuration, subEffect.to, subEffect.from)
    })

  },

  windowClosed: function (window) {
    "use strict";

    if (isModal(window) && !animationSuite.closeForModals){
      return false;
    }

    var closeParams = closeEffects[animationSuite.closeEffect];
    closeParams.forEach(function (subEffect) {
      attachWindowObject(subEffect, window);  
      effect.animate(window, Effect[subEffect.effect], animationSuite.closeDuration, subEffect.to, subEffect.from)
    })

  },

  windowUnminimized: function (window) {
    "use strict";

    var openParams = openEffects[animationSuite.unMinimizeEffect];
    openParams.forEach(function (subEffect) {
      attachWindowObject(subEffect, window)
      effect.animate(window, Effect[subEffect.effect], animationSuite.unMinimizeDuration, subEffect.to, subEffect.from)
    })

  },

  windowMinimized: function (window) {
    "use strict";
    var closeParams = closeEffects[animationSuite.minimizeEffect];
    closeParams.forEach(function (subEffect) {
      attachWindowObject(subEffect, window)
      effect.animate(window, Effect[subEffect.effect], animationSuite.minimizeDuration, subEffect.to, subEffect.from)
    })

  },

  init: function () {
    "use strict";
    effect.configChanged.connect(animationSuite.loadConfig);

    effects.windowAdded.connect(animationSuite.windowAdded);
    effects.windowClosed.connect(animationSuite.windowClosed);

    effects.windowMinimized.connect(animationSuite.windowMinimized);
    effects.windowUnminimized.connect(animationSuite.windowUnminimized);

    animationSuite.loadConfig();
  }
};
animationSuite.init();
