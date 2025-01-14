import { Leaf as NodeElement } from "@src/utils/ManifestLoader";
import { Draft } from "immer";
import { useCallback } from "react";
import { Node } from "reactflow";
import { ElementsData } from "@src/types";
import { sendEventToMix } from "@src/services/MixpanelServices";
import { centerPositionAtom } from "@src/hooks/useFlowChartState";
import { useAtomValue, useSetAtom } from "jotai";
import { unsavedChangesAtom } from "@src/hooks/useHasUnsavedChanges";
import { addRandomPositionOffset } from "@src/utils/RandomPositionOffset";
import { BlocksMetadataMap } from "@src/types/blocks-metadata";
import { createNodeId, createNodeLabel } from "@src/utils/NodeUtils";
import { ctrlsFromParams } from "@src/utils/NodeUtils";
import { DeviceInfo, useHardwareDevices } from "@src/hooks/useHardwareDevices";

export type AddNewNode = (node: NodeElement) => void;

export const useAddNewNode = (
  setNodes: (
    update:
      | Node<ElementsData>[]
      | ((draft: Draft<Node<ElementsData>>[]) => void),
  ) => void,
  getTakenNodeLabels: (func: string) => string[][],
  nodesMetadataMap: BlocksMetadataMap | null,
) => {
  const center = useAtomValue(centerPositionAtom);
  const setHasUnsavedChanges = useSetAtom(unsavedChangesAtom);
  const hardwareDevices: DeviceInfo | undefined = useHardwareDevices();

  return useCallback(
    (node: NodeElement) => {
      const pos = center ?? { x: 0, y: 0 };
      const nodePosition = addRandomPositionOffset(pos, 30);
      const funcName = node.key;
      const type = node.type;
      const params = node.parameters;
      const initParams = node.init_parameters;
      const inputs = node.inputs;
      const outputs = node.outputs;
      const uiComponentId = node.ui_component_id;
      const pip_dependencies = node.pip_dependencies;
      const path = nodesMetadataMap
        ? nodesMetadataMap[`${funcName}.py`].path
        : "";

      const nodeId = createNodeId(node.key);
      const nodeLabel =
        funcName === "CONSTANT"
          ? params!["constant"].default!.toString()
          : createNodeLabel(node.key, getTakenNodeLabels(funcName));

      const nodeCtrls = ctrlsFromParams(params, funcName, hardwareDevices);
      const initCtrls = ctrlsFromParams(initParams, funcName);

      const newNode = {
        id: nodeId,
        type: uiComponentId ?? type,
        data: {
          id: nodeId,
          label: nodeLabel,
          func: funcName,
          type,
          ctrls: nodeCtrls,
          initCtrls: initCtrls,
          inputs,
          outputs,
          pip_dependencies,
          path,
        },
        position: nodePosition,
      };
      setNodes((els) => els.concat(newNode));
      setHasUnsavedChanges(true);
      sendEventToMix("Node Added", newNode.data.label);
    },
    [
      setNodes,
      getTakenNodeLabels,
      center,
      setHasUnsavedChanges,
      nodesMetadataMap,
    ],
  );
};
