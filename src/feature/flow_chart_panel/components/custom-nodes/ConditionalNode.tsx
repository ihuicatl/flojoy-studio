import { memo } from "react";
import { Position } from "reactflow";
import { CustomNodeProps } from "../../types/CustomNodeProps";
import { CustomHandle } from "../CustomHandle";
import LogicNode from "./LogicNode";

export const LoopNode = ({ data, handleRemove }: CustomNodeProps) => {
  if (!data.inputs || !data.outputs) {
    throw new Error("LoopNode must have 1 inputs and 2 outputs");
  }

  const input1 = data.inputs[0];
  const input2 = data.inputs[1];
  const output1 = data.outputs[0];
  const output2 = data.outputs[1];
  const operator = data.ctrls["operator_type"].value as string;

  return (
    <LogicNode data={data} handleRemove={handleRemove}>
      <h2 className="font-sans font-extrabold text-2xl tracking-wider text-accent3 -rotate-45">
        {operator}
      </h2>
      <CustomHandle
        position={Position.Bottom}
        type="target"
        id={input1.id}
        colorClass="!border-accent3"
        style={{ bottom: -6 }}
      />
      <CustomHandle
        position={Position.Left}
        type="target"
        id={input2.id}
        colorClass="!border-accent3"
        style={{ left: -6 }}
      />
      <CustomHandle
        position={Position.Top}
        type="source"
        id={output1.id}
        colorClass="!border-accent3"
        style={{
          top: -6,
        }}
      />
      <CustomHandle
        position={Position.Right}
        type="target"
        id={output2.id}
        colorClass="!border-accent3"
        style={{ right: -6 }}
      />
    </LogicNode>
  );
};

export default memo(LoopNode);
