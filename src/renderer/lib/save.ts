import { Project } from "@src/hooks/useFlowChartState";
import { ElementsData } from "@src/types";
import { TextData } from "@src/types/node";
import saveAs from "file-saver";
import { Node, Edge } from "reactflow";

export const makeAppFileContent = (
  project: Project,
  nodes: Node<ElementsData>[],
  edges: Edge[],
  textNodes: Node<TextData>[],
) => {
  const fileContent = {
    ...project,
    rfInstance: {
      ...project.rfInstance,
      nodes,
      edges,
    },
    textNodes,
  };
  return JSON.stringify(fileContent, undefined, 4);
};

export const saveFileAs = async (
  project: Project,
  nodes: Node<ElementsData>[],
  edges: Edge[],
  textNodes: Node<TextData>[],
): Promise<string | undefined> => {
  if (!project.rfInstance) {
    throw new Error("Could not find flow chart instance to save");
  }

  const fileContent = makeAppFileContent(project, nodes, edges, textNodes);
  const basename =
    project.name
      ?.split(" ")
      .map((s) => s.toLowerCase().trim())
      .filter((s) => s !== "")
      .join("-") ?? "app";
  const defaultFilename = `${basename}.json`;

  // in electron
  if ("api" in window) {
    const { filePath, canceled } = await window.api.saveFileAs(
      defaultFilename,
      fileContent,
    );
    if (canceled) {
      throw new Error("Save was cancelled");
    }
    return filePath;
  }

  const blob = new Blob([fileContent]);
  saveAs(blob, defaultFilename);
};
