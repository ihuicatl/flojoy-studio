export const NOISY_SINE = {
  nodes: [
    {
      width: 150,
      height: 150,
      id: "LINSPACE-47cc4c8b-051a-451a-80e8-291a7e2857d5",
      type: "default",
      data: {
        id: "LINSPACE-47cc4c8b-051a-451a-80e8-291a7e2857d5",
        label: "LINSPACE",
        func: "LINSPACE",
        type: "SIMULATION",
        ctrls: {
          start: {
            type: "float",
            default: 10,
            functionName: "LINSPACE",
            param: "start",
            value: "14",
          },
          end: {
            type: "float",
            default: 0,
            functionName: "LINSPACE",
            param: "end",
            value: 0,
          },
          step: {
            type: "int",
            default: 1000,
            functionName: "LINSPACE",
            param: "step",
            value: 1000,
          },
        },
        path: "PYTHON/nodes\\GENERATORS\\SIMULATIONS\\LINSPACE\\LINSPACE.py",
        selected: false,
      },
      position: {
        x: -154.07457499272752,
        y: 255.33075948303212,
      },
      selected: false,
      positionAbsolute: {
        x: -154.07457499272752,
        y: 255.33075948303212,
      },
      dragging: true,
    },
    {
      width: 130,
      height: 130,
      id: "SINE-b2ae7cf6-db5d-4326-8a78-6f72e11af0b7",
      type: "SIMULATION",
      data: {
        id: "SINE-b2ae7cf6-db5d-4326-8a78-6f72e11af0b7",
        label: "SINE",
        func: "SINE",
        type: "SIMULATION",
        ctrls: {
          frequency: {
            type: "float",
            default: 1,
            functionName: "SINE",
            param: "frequency",
            value: 1,
          },
          offset: {
            type: "float",
            default: 0,
            functionName: "SINE",
            param: "offset",
            value: 0,
          },
          amplitude: {
            type: "float",
            default: 1,
            functionName: "SINE",
            param: "amplitude",
            value: 1,
          },
          phase: {
            type: "float",
            default: 0,
            functionName: "SINE",
            param: "phase",
            value: 0,
          },
          waveform: {
            type: "select",
            options: ["sine", "square", "triangle", "sawtooth"],
            default: "sine",
            functionName: "SINE",
            param: "waveform",
            value: "sine",
          },
        },
        path: "PYTHON/nodes\\GENERATORS\\SIMULATIONS\\SINE\\SINE.py",
        selected: false,
      },
      position: {
        x: 184.496853578701,
        y: 5.330759483032068,
      },
      selected: false,
      positionAbsolute: {
        x: 184.496853578701,
        y: 5.330759483032068,
      },
      dragging: true,
    },
    {
      width: 130,
      height: 130,
      id: "RAND-3944199a-abcc-4a1a-9dfa-b43e73bc54b3",
      type: "SIMULATION",
      data: {
        id: "RAND-3944199a-abcc-4a1a-9dfa-b43e73bc54b3",
        label: "RAND",
        func: "RAND",
        type: "SIMULATION",
        ctrls: {},
        path: "PYTHON/nodes\\GENERATORS\\SIMULATIONS\\RAND\\RAND.py",
        selected: false,
      },
      position: {
        x: 184.49685357870106,
        y: 223.90218805446068,
      },
      selected: false,
      positionAbsolute: {
        x: 184.49685357870106,
        y: 223.90218805446068,
      },
      dragging: true,
    },
    {
      width: 130,
      height: 130,
      id: "CONSTANT-34a4df79-ab95-42f8-8c1e-3684d1a3ae13",
      type: "SIMULATION",
      data: {
        id: "CONSTANT-34a4df79-ab95-42f8-8c1e-3684d1a3ae13",
        label: "2.0",
        func: "CONSTANT",
        type: "SIMULATION",
        ctrls: {
          constant: {
            type: "float",
            default: 3,
            functionName: "CONSTANT",
            param: "constant",
            value: "2.0",
          },
        },
        path: "PYTHON/nodes\\GENERATORS\\SIMULATIONS\\CONSTANT\\CONSTANT.py",
        selected: false,
      },
      position: {
        x: 178.78256786441528,
        y: 452.47361662588935,
      },
      selected: false,
      positionAbsolute: {
        x: 178.78256786441528,
        y: 452.47361662588935,
      },
      dragging: true,
    },
    {
      width: 99,
      height: 130,
      id: "MULTIPLY-110b70d1-1d58-45c2-84dd-817080531f43",
      type: "ARITHMETIC",
      data: {
        id: "MULTIPLY-110b70d1-1d58-45c2-84dd-817080531f43",
        label: "MULTIPLY",
        func: "MULTIPLY",
        type: "ARITHMETIC",
        ctrls: {},
        inputs: [
          {
            name: "y",
            id: "multiply_y",
            type: "target",
          },
        ],
        path: "PYTHON/nodes\\TRANSFORMERS\\ARITHMETIC\\MULTIPLY\\MULTIPLY.py",
        selected: false,
      },
      position: {
        x: 471.63971072155823,
        y: 91.04504519731779,
      },
      selected: false,
      positionAbsolute: {
        x: 471.63971072155823,
        y: 91.04504519731779,
      },
      dragging: true,
    },
    {
      width: 99,
      height: 130,
      id: "ADD-36958035-4e23-4b15-a684-b233b0dde7b4",
      type: "ARITHMETIC",
      data: {
        id: "ADD-36958035-4e23-4b15-a684-b233b0dde7b4",
        label: "ADD",
        func: "ADD",
        type: "ARITHMETIC",
        ctrls: {},
        inputs: [
          {
            name: "y",
            id: "add_y",
            type: "target",
          },
        ],
        path: "PYTHON/nodes\\TRANSFORMERS\\ARITHMETIC\\ADD\\ADD.py",
        selected: false,
      },
      position: {
        x: 645.9254250072726,
        y: 291.0450451973179,
      },
      selected: false,
      positionAbsolute: {
        x: 645.9254250072726,
        y: 291.0450451973179,
      },
      dragging: true,
    },
    {
      width: 225,
      height: 226,
      id: "SCATTER-d17dd545-de42-4ca0-955e-d8b105868635",
      type: "PLOTLY_VISOR",
      data: {
        id: "SCATTER-d17dd545-de42-4ca0-955e-d8b105868635",
        label: "SCATTER",
        func: "SCATTER",
        type: "PLOTLY_VISOR",
        ctrls: {},
        path: "PYTHON/nodes\\VISUALIZERS\\PLOTLY\\SCATTER\\SCATTER.py",
        selected: false,
      },
      position: {
        x: 915.9254250072726,
        y: 352.47361662588935,
      },
      selected: false,
      positionAbsolute: {
        x: 915.9254250072726,
        y: 352.47361662588935,
      },
      dragging: true,
    },
    {
      width: 250,
      height: 159,
      id: "HISTOGRAM-dfcff04f-f2a7-40c1-b101-dbdc2e19bebb",
      type: "PLOTLY_VISOR",
      data: {
        id: "HISTOGRAM-dfcff04f-f2a7-40c1-b101-dbdc2e19bebb",
        label: "HISTOGRAM",
        func: "HISTOGRAM",
        type: "PLOTLY_VISOR",
        ctrls: {},
        path: "PYTHON/nodes\\VISUALIZERS\\PLOTLY\\HISTOGRAM\\HISTOGRAM.py",
        selected: false,
      },
      position: {
        x: 897.3539964358439,
        y: 13.90218805446068,
      },
      selected: false,
      positionAbsolute: {
        x: 897.3539964358439,
        y: 13.90218805446068,
      },
      dragging: true,
    },
    {
      width: 210,
      height: 130,
      id: "END-243837b0-183b-44e6-9a68-bed66298764d",
      type: "TERMINATOR",
      data: {
        id: "END-243837b0-183b-44e6-9a68-bed66298764d",
        label: "END",
        func: "END",
        type: "TERMINATOR",
        ctrls: {},
        path: "PYTHON/nodes\\LOGIC_GATES\\TERMINATORS\\END\\END.py",
        selected: false,
      },
      position: {
        x: 1305.9254250072725,
        y: 231.0450451973179,
      },
      selected: false,
      positionAbsolute: {
        x: 1305.9254250072725,
        y: 231.0450451973179,
      },
      dragging: true,
    },
  ],
  edges: [
    {
      source: "LINSPACE-47cc4c8b-051a-451a-80e8-291a7e2857d5",
      sourceHandle: "main",
      target: "SINE-b2ae7cf6-db5d-4326-8a78-6f72e11af0b7",
      targetHandle: "SINE",
      id: "reactflow__edge-LINSPACE-47cc4c8b-051a-451a-80e8-291a7e2857d5main-SINE-b2ae7cf6-db5d-4326-8a78-6f72e11af0b7SINE",
    },
    {
      source: "LINSPACE-47cc4c8b-051a-451a-80e8-291a7e2857d5",
      sourceHandle: "main",
      target: "RAND-3944199a-abcc-4a1a-9dfa-b43e73bc54b3",
      targetHandle: "RAND",
      id: "reactflow__edge-LINSPACE-47cc4c8b-051a-451a-80e8-291a7e2857d5main-RAND-3944199a-abcc-4a1a-9dfa-b43e73bc54b3RAND",
    },
    {
      source: "LINSPACE-47cc4c8b-051a-451a-80e8-291a7e2857d5",
      sourceHandle: "main",
      target: "CONSTANT-34a4df79-ab95-42f8-8c1e-3684d1a3ae13",
      targetHandle: "CONSTANT",
      id: "reactflow__edge-LINSPACE-47cc4c8b-051a-451a-80e8-291a7e2857d5main-CONSTANT-34a4df79-ab95-42f8-8c1e-3684d1a3ae13CONSTANT",
    },
    {
      source: "SINE-b2ae7cf6-db5d-4326-8a78-6f72e11af0b7",
      sourceHandle: "main",
      target: "MULTIPLY-110b70d1-1d58-45c2-84dd-817080531f43",
      targetHandle: "MULTIPLY",
      id: "reactflow__edge-SINE-b2ae7cf6-db5d-4326-8a78-6f72e11af0b7main-MULTIPLY-110b70d1-1d58-45c2-84dd-817080531f43MULTIPLY",
    },
    {
      source: "RAND-3944199a-abcc-4a1a-9dfa-b43e73bc54b3",
      sourceHandle: "main",
      target: "MULTIPLY-110b70d1-1d58-45c2-84dd-817080531f43",
      targetHandle: "multiply_y",
      id: "reactflow__edge-RAND-3944199a-abcc-4a1a-9dfa-b43e73bc54b3main-MULTIPLY-110b70d1-1d58-45c2-84dd-817080531f43multiply_y",
    },
    {
      source: "CONSTANT-34a4df79-ab95-42f8-8c1e-3684d1a3ae13",
      sourceHandle: "main",
      target: "ADD-36958035-4e23-4b15-a684-b233b0dde7b4",
      targetHandle: "add_y",
      id: "reactflow__edge-CONSTANT-34a4df79-ab95-42f8-8c1e-3684d1a3ae13main-ADD-36958035-4e23-4b15-a684-b233b0dde7b4add_y",
    },
    {
      source: "MULTIPLY-110b70d1-1d58-45c2-84dd-817080531f43",
      sourceHandle: "main",
      target: "ADD-36958035-4e23-4b15-a684-b233b0dde7b4",
      targetHandle: "ADD",
      id: "reactflow__edge-MULTIPLY-110b70d1-1d58-45c2-84dd-817080531f43main-ADD-36958035-4e23-4b15-a684-b233b0dde7b4ADD",
    },
    {
      source: "ADD-36958035-4e23-4b15-a684-b233b0dde7b4",
      sourceHandle: "main",
      target: "SCATTER-d17dd545-de42-4ca0-955e-d8b105868635",
      targetHandle: "SCATTER",
      id: "reactflow__edge-ADD-36958035-4e23-4b15-a684-b233b0dde7b4main-SCATTER-d17dd545-de42-4ca0-955e-d8b105868635SCATTER",
    },
    {
      source: "ADD-36958035-4e23-4b15-a684-b233b0dde7b4",
      sourceHandle: "main",
      target: "HISTOGRAM-dfcff04f-f2a7-40c1-b101-dbdc2e19bebb",
      targetHandle: "HISTOGRAM",
      id: "reactflow__edge-ADD-36958035-4e23-4b15-a684-b233b0dde7b4main-HISTOGRAM-dfcff04f-f2a7-40c1-b101-dbdc2e19bebbHISTOGRAM",
    },
    {
      source: "HISTOGRAM-dfcff04f-f2a7-40c1-b101-dbdc2e19bebb",
      sourceHandle: "main",
      target: "END-243837b0-183b-44e6-9a68-bed66298764d",
      targetHandle: "END",
      id: "reactflow__edge-HISTOGRAM-dfcff04f-f2a7-40c1-b101-dbdc2e19bebbmain-END-243837b0-183b-44e6-9a68-bed66298764dEND",
    },
    {
      source: "SCATTER-d17dd545-de42-4ca0-955e-d8b105868635",
      sourceHandle: "main",
      target: "END-243837b0-183b-44e6-9a68-bed66298764d",
      targetHandle: "END",
      id: "reactflow__edge-SCATTER-d17dd545-de42-4ca0-955e-d8b105868635main-END-243837b0-183b-44e6-9a68-bed66298764dEND",
    },
  ],
  viewport: {
    x: 208.62118379542267,
    y: 40.3469577673161,
    zoom: 0.7587017183139962,
  },
};

export const LOOP_APP = {
  elements: [
    {
      id: "LINSPACE-userGeneratedNode_1646432683694",
      data: {
        id: "LINSPACE-userGeneratedNode_1646432683694",
        label: "LINSPACE",
        func: "LINSPACE",
        type: "SIMULATION",
        ctrls: {
          LINSPACE_LINSPACE_start: {
            functionName: "LINSPACE",
            param: "start",
            value: 1,
          },
          LINSPACE_LINSPACE_end: {
            functionName: "LINSPACE",
            param: "end",
            value: 14,
          },
          LINSPACE_LINSPACE_step: {
            functionName: "LINSPACE",
            param: "step",
            value: 3,
          },
        },
      },
      position: {
        x: -61,
        y: 268,
      },
      type: "default",
    },
    {
      id: "LOOP-userGeneratedNode_1646417604301",
      data: {
        id: "LOOP-userGeneratedNode_1646417604301",
        label: "LOOP",
        func: "LOOP",
        type: "LOOP",
        ctrls: {
          LOOP_LOOP_initial_count: {
            value: 0,
            param: "initial_count",
          },
          LOOP_LOOP_iteration_count: {
            value: 2,
            param: "iteration_count",
          },
          LOOP_LOOP_step: {
            value: 1,
            param: "step",
          },
        },
        inputs: [
          {
            name: "end",
            id: "end",
          },
          {
            name: "body",
            id: "body",
          },
        ],
      },
      position: {
        x: 265,
        y: 281,
      },
      type: "default",
    },
    {
      id: "RAND-userGeneratedNode_1646417371398",
      data: {
        id: "RAND-userGeneratedNode_1646417371398",
        label: "RAND",
        func: "RAND",
        type: "SIMULATION",
        ctrls: {},
      },
      position: {
        x: 550,
        y: 619,
      },
      type: "default",
    },
    {
      id: "RAND-userGeneratedNode_1646417371399",
      data: {
        id: "RAND-userGeneratedNode_1646417371399",
        label: "RAND",
        func: "RAND",
        type: "SIMULATION",
        ctrls: {},
      },
      position: {
        x: 550,
        y: 619,
      },
      type: "default",
    },
    {
      id: "MULTIPLY-userGeneratedNode_1646417352715",
      data: {
        id: "MULTIPLY-userGeneratedNode_1646417352715",
        label: "MULTIPLY",
        func: "MULTIPLY",
        type: "ARITHMETIC",
        ctrls: {},
        inputs: [
          {
            name: "y",
            id: "multiply_y",
          },
        ],
      },
      position: {
        x: 715,
        y: 495,
      },
      type: "default",
    },
    {
      id: "CONDITIONAL-userGeneratedNode_1646435677929",
      data: {
        id: "CONDITIONAL-userGeneratedNode_1646435677929",
        label: "CONDITIONAL",
        func: "CONDITIONAL",
        type: "COMPARATOR",
        ctrls: {
          CONDITIONAL_CONDITIONAL_operator_type: {
            param: "operator_type",
            value: ">",
          },
        },
        inputs: [
          {
            name: "x",
            id: "first",
          },
          {
            name: "y",
            id: "second",
          },
        ],
      },
      position: {
        x: 900,
        y: 426,
      },
      type: "default",
    },
    {
      id: "LINE-bdff1fc7-4e1d-4a3a-aa0b-d86fe514fa9b",
      data: {
        id: "LINE-bdff1fc7-4e1d-4a3a-aa0b-d86fe514fa9b",
        label: "Line",
        func: "LINE",
        type: "PLOTLY_VISOR",
        ctrls: {},
      },
      position: {
        x: 901,
        y: 212,
      },
    },
    {
      id: "BAR-6106326f-ff85-4940-9f5b-018381e2e2ce",
      data: {
        id: "BAR-6106326f-ff85-4940-9f5b-018381e2e2ce",
        label: "Bar",
        func: "BAR",
        type: "PLOTLY_VISOR",
        ctrls: {},
      },
      position: {
        x: 907,
        y: -16,
      },
    },
    {
      source: "LINSPACE-userGeneratedNode_1646432683694",
      sourceHandle: null,
      target: "LOOP-userGeneratedNode_1646417604301",
      targetHandle: null,
      id: "LINSPACE-userGeneratedNode_1646432683694null-LOOP-userGeneratedNode_1646417604301null",
      type: "default",
    },
    {
      source: "LOOP-userGeneratedNode_1646417604301",
      targetHandle: null,
      target: "RAND-userGeneratedNode_1646417371398",
      sourceHandle: "body",
      id: "reactflow__edge-LOOP-userGeneratedNode_1646417604301null-RAND-userGeneratedNode_1646417371398null",
      type: "default",
    },
    {
      source: "LOOP-userGeneratedNode_1646417604301",
      sourceHandle: "body",
      target: "MULTIPLY-userGeneratedNode_1646417352715",
      targetHandle: null,
      id: "reactflow__edge-LOOP-userGeneratedNode_1646417604301null-MULTIPLY-userGeneratedNode_1646417352715null",
      type: "default",
    },
    {
      source: "LOOP-userGeneratedNode_1646417604301",
      sourceHandle: "body",
      target: "CONDITIONAL-userGeneratedNode_1646435677929",
      targetHandle: null,
      id: "reactflow__edge-LOOP-userGeneratedNode_1646417604301null-CONDITIONAL-userGeneratedNode_1646435677929null",
      type: "default",
    },
    {
      source: "RAND-userGeneratedNode_1646417371398",
      sourceHandle: null,
      target: "MULTIPLY-userGeneratedNode_1646417352715",
      targetHandle: "multiply_y",
      id: "reactflow__edge-RAND-userGeneratedNode_1646417371398null-MULTIPLY-userGeneratedNode_1646417352715null",
      type: "default",
    },
    {
      source: "MULTIPLY-userGeneratedNode_1646417352715",
      sourceHandle: null,
      target: "RAND-userGeneratedNode_1646417371399",
      targetHandle: null,
      id: "reactflow__edge-RAND-userGeneratedNode_1646417371399null-RAND-userGeneratedNode_1646417371399null",
      type: "default",
    },
    {
      source: "RAND-userGeneratedNode_1646417371399",
      sourceHandle: null,
      target: "CONDITIONAL-userGeneratedNode_1646435677929",
      targetHandle: null,
      id: "reactflow__edge-RAND-userGeneratedNode_1646417371399null-CONDITIONAL-userGeneratedNode_1646435677929null",
      type: "default",
    },
    {
      source: "LOOP-userGeneratedNode_1646417604301",
      sourceHandle: "end",
      target: "LINE-bdff1fc7-4e1d-4a3a-aa0b-d86fe514fa9b",
      targetHandle: null,
      id: "reactflow__edge-LOOP-userGeneratedNode_1646417604301null-LINE-bdff1fc7-4e1d-4a3a-aa0b-d86fe514fa9bnull",
      type: "default",
    },
    {
      source: "LOOP-userGeneratedNode_1646417604301",
      sourceHandle: "end",
      target: "BAR-6106326f-ff85-4940-9f5b-018381e2e2ce",
      targetHandle: null,
      id: "reactflow__edge-LOOP-userGeneratedNode_1646417604301null-BAR-6106326f-ff85-4940-9f5b-018381e2e2cenull",
      type: "default",
    },
  ],
  position: [0, 0],
  zoom: 1,
};

export const CONDITIONAL = {
  elements: [
    {
      id: "2.0-userGeneratedNode_1646435677928",
      data: {
        id: "2.0-userGeneratedNode_1646435677928",
        label: "2.0",
        func: "CONSTANT",
        type: "SIMULATION",
        ctrls: {
          "CONSTANT_2.0_constant": {
            functionName: "CONSTANT",
            param: "constant",
            value: "3",
          },
        },
      },
      position: {
        x: 96,
        y: 46,
      },
      type: "default",
    },
    {
      id: "2.0-userGeneratedNode_1646435677929",
      data: {
        id: "2.0-userGeneratedNode_1646435677929",
        label: "2.0",
        func: "CONSTANT",
        type: "SIMULATION",
        ctrls: {
          "CONSTANT_2.0_constant": {
            functionName: "CONSTANT",
            param: "constant",
            value: "4",
          },
        },
      },
      position: {
        x: 145,
        y: 400,
      },
      type: "default",
    },
    {
      id: "CONDITIONAL-userGeneratedNode_1646435677929",
      data: {
        id: "CONDITIONAL-userGeneratedNode_1646435677929",
        label: "CONDITIONAL",
        func: "CONDITIONAL",
        type: "COMPARATOR",
        ctrls: {
          CONDITIONAL_CONDITIONAL_operator_type: {
            param: "operator_type",
            value: ">",
          },
        },
        inputs: [
          {
            name: "x",
            id: "first",
          },
          {
            name: "y",
            id: "second",
          },
        ],
      },
      position: {
        x: 500,
        y: 218,
      },
      type: "default",
    },
    {
      id: "LINE-bdff1fc7-4e1d-4a3a-aa0b-d86fe514fa9b",
      data: {
        id: "LINE-bdff1fc7-4e1d-4a3a-aa0b-d86fe514fa9b",
        label: "Line",
        func: "LINE",
        type: "PLOTLY_VISOR",
        ctrls: {},
      },
      position: {
        x: 1203,
        y: 308,
      },
    },
    {
      id: "BAR-6106326f-ff85-4940-9f5b-018381e2e2ce",
      data: {
        id: "BAR-6106326f-ff85-4940-9f5b-018381e2e2ce",
        label: "Bar",
        func: "BAR",
        type: "PLOTLY_VISOR",
        ctrls: {},
      },
      position: {
        x: 1157,
        y: -48,
      },
    },
    {
      id: "TIMER-userGeneratedNode_1646435677929",
      data: {
        id: "TIMER-userGeneratedNode_1646435677929",
        label: "TIMER",
        func: "TIMER",
        type: "TIMER",
        ctrls: {
          TIMER_TIMER_sleep_time: {
            param: "sleep_time",
            value: 3,
          },
        },
      },
      position: {
        x: 256,
        y: 146,
      },
    },
    {
      id: "RAND-userGeneratedNode_1646417371398",
      data: {
        id: "RAND-userGeneratedNode_1646417371398",
        label: "RAND",
        func: "RAND",
        type: "SIMULATION",
        ctrls: {},
      },
      position: {
        x: 887,
        y: 393,
      },
      type: "default",
    },
    {
      id: "RAND-userGeneratedNode_1646417371399",
      data: {
        id: "RAND-userGeneratedNode_1646417371399",
        label: "RAND",
        func: "RAND",
        type: "SIMULATION",
        ctrls: {},
      },
      position: {
        x: 897,
        y: 59,
      },
      type: "default",
    },
    {
      source: "2.0-userGeneratedNode_1646435677928",
      sourceHandle: null,
      target: "TIMER-userGeneratedNode_1646435677929",
      targetHandle: null,
      animated: false,
      id: "reactflow__edge-2.0-userGeneratedNode_1646435677928null-TIMER-userGeneratedNode_1646435677929null",
    },
    {
      source: "TIMER-userGeneratedNode_1646435677929",
      sourceHandle: null,
      target: "CONDITIONAL-userGeneratedNode_1646435677929",
      targetHandle: "first",
      animated: false,
      id: "reactflow__edge-TIMER-userGeneratedNode_1646435677929null-CONDITIONAL-userGeneratedNode_1646435677929null",
    },
    {
      source: "2.0-userGeneratedNode_1646435677929",
      sourceHandle: null,
      target: "CONDITIONAL-userGeneratedNode_1646435677929",
      targetHandle: "second",
      animated: false,
      id: "reactflow__edge-2.0-userGeneratedNode_1646435677929null-CONDITIONAL-userGeneratedNode_1646435677929null",
    },
    {
      target: "RAND-userGeneratedNode_1646417371398",
      sourceHandle: null,
      source: "CONDITIONAL-userGeneratedNode_1646435677929",
      targetHandle: null,
      animated: false,
      label: "True",
      id: "reactflow__edge-CONDITIONAL-userGeneratedNode_1646435677929null-RAND-userGeneratedNode_1646417371398null",
    },
    {
      target: "RAND-userGeneratedNode_1646417371399",
      sourceHandle: null,
      source: "CONDITIONAL-userGeneratedNode_1646435677929",
      targetHandle: null,
      animated: false,
      label: "False",
      id: "reactflow__edge-CONDITIONAL-userGeneratedNode_1646435677929null-RAND-userGeneratedNode_1646417371399null",
    },
    {
      target: "LINE-bdff1fc7-4e1d-4a3a-aa0b-d86fe514fa9b",
      sourceHandle: null,
      source: "RAND-userGeneratedNode_1646417371398",
      targetHandle: null,
      animated: false,
      id: "reactflow__edge-RAND-userGeneratedNode_1646417371398null-LINE-bdff1fc7-4e1d-4a3a-aa0b-d86fe514fa9bnull",
    },
    {
      target: "BAR-6106326f-ff85-4940-9f5b-018381e2e2ce",
      sourceHandle: null,
      source: "RAND-userGeneratedNode_1646417371399",
      targetHandle: null,
      animated: false,
      id: "reactflow__edge-RAND-userGeneratedNode_1646417371399null-BAR-6106326f-ff85-4940-9f5b-018381e2e2cenull",
    },
  ],
  position: [0, 0],
  zoom: 0.8,
};

export const OBJECT_DETECTION = {
  elements: [
    {
      id: "OBJECT_DETECTION-de29f22f-0a28-4341-8720-c46f69deb1ad",
      type: "default",
      position: {
        x: 1136.6444964153716,
        y: 132.0527524900669,
      },
      data: {
        id: "OBJECT_DETECTION-de29f22f-0a28-4341-8720-c46f69deb1ad",
        label: "Object Detection",
        func: "OBJECT_DETECTION",
        type: "SIMULATION",
        ctrls: {},
      },
    },
    {
      id: "LOCAL_FILE-731a1e1b-446e-4780-92bb-fb46d538b68c",
      type: "default",
      position: {
        x: 228.09710889449232,
        y: 129.01818849474336,
      },
      data: {
        id: "LOCAL_FILE-731a1e1b-446e-4780-92bb-fb46d538b68c",
        label: "File Loader",
        func: "LOCAL_FILE",
        type: "LOADER",
        ctrls: {
          LOCAL_FILE_file_file_type: {
            functionName: "LOCAL_FILE",
            param: "file_type",
            value: "image",
          },
          LOCAL_FILE_file_op_type: {
            functionName: "LOCAL_FILE",
            param: "op_type",
            value: "OD",
          },
          LOCAL_FILE_file_path: {
            functionName: "LOCAL_FILE",
            param: "path",
            value: "",
          },
        },
      },
    },
    {
      source: "LOCAL_FILE-731a1e1b-446e-4780-92bb-fb46d538b68c",
      sourceHandle: "main",
      target: "OBJECT_DETECTION-de29f22f-0a28-4341-8720-c46f69deb1ad",
      targetHandle: "OBJECT_DETECTION",
      id: "reactflow__edge-LOCAL_FILE-731a1e1b-446e-4780-92bb-fb46d538b68cmain-OBJECT_DETECTION-de29f22f-0a28-4341-8720-c46f69deb1adOBJECT_DETECTION",
    },
  ],
  position: [0, 0],
  zoom: 1,
};

export const EMPTY_CANVAS = {
  elements: [],
  position: [0, 0],
  zoom: 0.8,
};
