import { useEffect } from "react";
import { LightRig } from "./LightsRig";
import { MobileController } from "./MobileController";
import { useGame } from "../hooks/useGame";
import { GameContextType } from "../hooks/useGameProvider";
import { Box } from "./Box";

export function Experience() {
  const { start } = useGame() as GameContextType;

  useEffect(() => {
    start();
  }, []);

  return (
    <>
      <LightRig />
      <MobileController />
      <Box />
    </>
  );
}
