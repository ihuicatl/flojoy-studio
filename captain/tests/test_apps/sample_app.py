from captain.utils.flowchart_utils import flowchart_to_nx_graph
import json

sample_app = """
{
    "nodes": [
      {
        "width": 130,
        "height": 130,
        "id": "SINE-db665d87-c2af-4acd-916b-b97a815e69a7",
        "type": "GENERATORS",
        "data": {
          "id": "SINE-db665d87-c2af-4acd-916b-b97a815e69a7",
          "label": "SINE",
          "func": "SINE",
          "type": "GENERATORS",
          "ctrls": {
            "amplitude": {
              "type": "float",
              "default": 1,
              "functionName": "SINE",
              "param": "amplitude",
              "value": 1
            },
            "frequency": {
              "type": "float",
              "default": 1,
              "functionName": "SINE",
              "param": "frequency",
              "value": 1
            },
            "offset": {
              "type": "float",
              "default": 0,
              "functionName": "SINE",
              "param": "offset",
              "value": 0
            },
            "phase": {
              "type": "float",
              "default": 0,
              "functionName": "SINE",
              "param": "phase",
              "value": 0
            },
            "waveform": {
              "type": "select",
              "default": "sine",
              "options": ["sine", "square", "triangle", "sawtooth"],
              "functionName": "SINE",
              "param": "waveform",
              "value": "sine"
            }
          },
          "inputs": [
            {
              "name": "default",
              "id": "default",
              "type": "OrderedPair",
              "multiple": false
            }
          ],
          "outputs": [
            {
              "name": "default",
              "id": "default",
              "type": "OrderedPair"
            }
          ],
          "path": "PYTHON/nodes/GENERATORS/SIMULATIONS/SINE/SINE.py",
          "selected": false
        },
        "position": {
          "x": 776.7590765313249,
          "y": -33.14686027271438
        },
        "selected": false,
        "positionAbsolute": {
          "x": 776.7590765313249,
          "y": -33.14686027271438
        },
        "dragging": true
      },
      {
        "width": 150,
        "height": 150,
        "id": "LINSPACE-fb6e23f4-080c-4d26-9070-45f3081ee5f3",
        "type": "default",
        "data": {
          "id": "LINSPACE-fb6e23f4-080c-4d26-9070-45f3081ee5f3",
          "label": "LINSPACE",
          "func": "LINSPACE",
          "type": "default",
          "ctrls": {
            "start": {
              "type": "float",
              "default": 10,
              "functionName": "LINSPACE",
              "param": "start",
              "value": 10
            },
            "end": {
              "type": "float",
              "default": 0,
              "functionName": "LINSPACE",
              "param": "end",
              "value": 0
            },
            "step": {
              "type": "int",
              "default": 1000,
              "functionName": "LINSPACE",
              "param": "step",
              "value": 1000
            }
          },
          "outputs": [
            {
              "name": "default",
              "id": "default",
              "type": "OrderedPair"
            }
          ],
          "path": "PYTHON/nodes/GENERATORS/SIMULATIONS/LINSPACE/LINSPACE.py",
          "selected": false
        },
        "position": {
          "x": 415.6162193884677,
          "y": 171.138854013
        },
        "selected": false,
        "positionAbsolute": {
          "x": 415.6162193884677,
          "y": 171.138854013
        },
        "dragging": true
      },
      {
        "width": 130,
        "height": 130,
        "id": "CONSTANT-a357c1d7-0a1e-459b-bc03-faa48026e0e3",
        "type": "GENERATORS",
        "data": {
          "id": "CONSTANT-a357c1d7-0a1e-459b-bc03-faa48026e0e3",
          "label": "2.0",
          "func": "CONSTANT",
          "type": "GENERATORS",
          "ctrls": {
            "constant": {
              "type": "float",
              "default": 3,
              "functionName": "CONSTANT",
              "param": "constant",
              "value": "2.0"
            }
          },
          "inputs": [
            {
              "name": "default",
              "id": "default",
              "type": "OrderedPair",
              "multiple": false
            }
          ],
          "outputs": [
            {
              "name": "default",
              "id": "default",
              "type": "OrderedPair"
            }
          ],
          "path": "PYTHON/nodes/GENERATORS/SIMULATIONS/CONSTANT/CONSTANT.py",
          "selected": false
        },
        "position": {
          "x": 777.034632942326,
          "y": 399.72607622902814
        },
        "selected": false,
        "positionAbsolute": {
          "x": 777.034632942326,
          "y": 399.72607622902814
        },
        "dragging": true
      },
      {
        "width": 99,
        "height": 130,
        "id": "ADD-b4cb003b-f34d-419e-bc95-452ab539c1ec",
        "type": "ARITHMETIC",
        "data": {
          "id": "ADD-b4cb003b-f34d-419e-bc95-452ab539c1ec",
          "label": "ADD",
          "func": "ADD",
          "type": "ARITHMETIC",
          "ctrls": {},
          "inputs": [
            {
              "name": "a",
              "id": "a",
              "type": "OrderedPair",
              "multiple": false
            },
            {
              "name": "b",
              "id": "b",
              "type": "OrderedPair",
              "multiple": true
            }
          ],
          "outputs": [
            {
              "name": "default",
              "id": "default",
              "type": "OrderedPair"
            }
          ],
          "path": "PYTHON/nodes/TRANSFORMERS/ARITHMETIC/ADD/ADD.py",
          "selected": false
        },
        "position": {
          "x": 1087.9891474596368,
          "y": 195.25915121516448
        },
        "selected": false,
        "positionAbsolute": {
          "x": 1087.9891474596368,
          "y": 195.25915121516448
        },
        "dragging": true
      },
      {
        "width": 250,
        "height": 159,
        "id": "HISTOGRAM-d53932d3-1dce-4320-a135-906b046cbe82",
        "type": "VISUALIZERS",
        "data": {
          "id": "HISTOGRAM-d53932d3-1dce-4320-a135-906b046cbe82",
          "label": "HISTOGRAM",
          "func": "HISTOGRAM",
          "type": "VISUALIZERS",
          "ctrls": {},
          "inputs": [
            {
              "name": "default",
              "id": "default",
              "type": "OrderedPair|DataFrame|Matrix",
              "multiple": false
            }
          ],
          "outputs": [
            {
              "name": "default",
              "id": "default",
              "type": "Plotly"
            }
          ],
          "path": "PYTHON/nodes/VISUALIZERS/PLOTLY/HISTOGRAM/HISTOGRAM.py",
          "selected": false
        },
        "position": {
          "x": 1301.9835116897505,
          "y": -28.568299803888863
        },
        "selected": false,
        "positionAbsolute": {
          "x": 1301.9835116897505,
          "y": -28.568299803888863
        },
        "dragging": true
      },
      {
        "width": 225,
        "height": 226,
        "id": "SCATTER-8ac7a273-ef5f-4780-bc57-6c62c5ce507a",
        "type": "VISUALIZERS",
        "data": {
          "id": "SCATTER-8ac7a273-ef5f-4780-bc57-6c62c5ce507a",
          "label": "SCATTER",
          "func": "SCATTER",
          "type": "VISUALIZERS",
          "ctrls": {},
          "inputs": [
            {
              "name": "default",
              "id": "default",
              "type": "OrderedPair|DataFrame|Matrix",
              "multiple": false
            }
          ],
          "outputs": [
            {
              "name": "default",
              "id": "default",
              "type": "Plotly"
            }
          ],
          "path": "PYTHON/nodes/VISUALIZERS/PLOTLY/SCATTER/SCATTER.py",
          "selected": false
        },
        "position": {
          "x": 1321.42749430047,
          "y": 335.8151686044447
        },
        "selected": false,
        "positionAbsolute": {
          "x": 1321.42749430047,
          "y": 335.8151686044447
        },
        "dragging": true
      }
    ],
    "edges": [
      {
        "source": "LINSPACE-fb6e23f4-080c-4d26-9070-45f3081ee5f3",
        "sourceHandle": "default",
        "target": "SINE-db665d87-c2af-4acd-916b-b97a815e69a7",
        "targetHandle": "default",
        "id": "reactflow__edge-LINSPACE-fb6e23f4-080c-4d26-9070-45f3081ee5f3default-SINE-db665d87-c2af-4acd-916b-b97a815e69a7default"
      },
      {
        "source": "LINSPACE-fb6e23f4-080c-4d26-9070-45f3081ee5f3",
        "sourceHandle": "default",
        "target": "CONSTANT-a357c1d7-0a1e-459b-bc03-faa48026e0e3",
        "targetHandle": "default",
        "id": "reactflow__edge-LINSPACE-fb6e23f4-080c-4d26-9070-45f3081ee5f3default-CONSTANT-a357c1d7-0a1e-459b-bc03-faa48026e0e3default"
      },
      {
        "source": "SINE-db665d87-c2af-4acd-916b-b97a815e69a7",
        "sourceHandle": "default",
        "target": "ADD-b4cb003b-f34d-419e-bc95-452ab539c1ec",
        "targetHandle": "a",
        "id": "reactflow__edge-SINE-db665d87-c2af-4acd-916b-b97a815e69a7default-ADD-b4cb003b-f34d-419e-bc95-452ab539c1eca"
      },
      {
        "source": "CONSTANT-a357c1d7-0a1e-459b-bc03-faa48026e0e3",
        "sourceHandle": "default",
        "target": "ADD-b4cb003b-f34d-419e-bc95-452ab539c1ec",
        "targetHandle": "b",
        "id": "reactflow__edge-CONSTANT-a357c1d7-0a1e-459b-bc03-faa48026e0e3default-ADD-b4cb003b-f34d-419e-bc95-452ab539c1ecb"
      },
      {
        "source": "ADD-b4cb003b-f34d-419e-bc95-452ab539c1ec",
        "sourceHandle": "default",
        "target": "SCATTER-8ac7a273-ef5f-4780-bc57-6c62c5ce507a",
        "targetHandle": "default",
        "id": "reactflow__edge-ADD-b4cb003b-f34d-419e-bc95-452ab539c1ecdefault-SCATTER-8ac7a273-ef5f-4780-bc57-6c62c5ce507adefault"
      },
      {
        "source": "ADD-b4cb003b-f34d-419e-bc95-452ab539c1ec",
        "sourceHandle": "default",
        "target": "HISTOGRAM-d53932d3-1dce-4320-a135-906b046cbe82",
        "targetHandle": "default",
        "id": "reactflow__edge-ADD-b4cb003b-f34d-419e-bc95-452ab539c1ecdefault-HISTOGRAM-d53932d3-1dce-4320-a135-906b046cbe82default"
      }
    ]
}
"""
graph = flowchart_to_nx_graph(json.loads(sample_app))
