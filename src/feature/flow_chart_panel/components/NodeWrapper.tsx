import React, { useEffect, useState } from "react";
import { CustomNodeProps } from "../types/CustomNodeProps";
import { useFlowChartState } from "@src/hooks/useFlowChartState";
import { useSocket } from "@src/hooks/useSocket";
import { Box, createStyles, Text } from "@mantine/core";

const NodeWrapper = ({
  data,
  children,
}: CustomNodeProps & {
  children: React.ReactNode;
}) => {
  const { failedNode } = useFlowChartState();
  const { states } = useSocket();
  const [runError, setRunError] = useState<{
    message: string;
    show: boolean;
  } | null>(null);

  useEffect(() => {
    if (failedNode === data.id) {
      setRunError({
        message: states?.failureReason!,
        show: false,
      });
    }
    return () => {
      setRunError(null);
    };
  }, [failedNode, data, states?.failureReason]);
  return (
    <div data-testid="node-wrapper">
      {runError && <ErrorPopup message={runError.message} />}
      {children}
    </div>
  );
};

export default NodeWrapper;

const useStyles = createStyles((theme) => {
  return {
    popupContainer: {
      position: "absolute",
      top: -50,
      left: "50%",
      right: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#dcf8c6",
      borderRadius: theme.radius.sm,
      margin: "10px 0",
      padding: 10,
      width: "max-content",
      maxWidth: 500,
      zIndex: 100,
      color: theme.black,
      fontWeight: 600,
    },
    popupArrow: {
      borderStyle: "solid",
      borderWidth: "10px 10px 0 10px",
      borderColor: "#dcf8c6 transparent transparent transparent",
      height: 0,
      width: 0,
      position: "absolute",
      bottom: -10,
      left: "50%",
      marginLeft: -10,
    },
  };
});

const ErrorPopup = ({ message }: { message: string }) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.popupContainer} data-testid="node-error-popup">
      <Text fz="lg">{message}</Text>
      <Box className={classes.popupArrow} />
    </Box>
  );
};