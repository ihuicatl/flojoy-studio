export type ParamValueType =
  | "str"
  | "float"
  | "int"
  | "list[int]"
  | "list[str]"
  | "list[float]"
  | "Array"
  | "bool"
  | "select"
  | "NodeReference"
  | "CameraDevice"
  | "SerialDevice"
  | "VisaDevice"
  | "CameraConnection"
  | "SerialConnection"
  | "VisaConnection"
  | "File"
  | "Directory"
  | "unknown";
