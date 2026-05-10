import { useContext } from "react";
import { EnvironmentContext } from "../environment/Provider"; // Assuming this context exists
export function useEnvironmentObject(key) {
    const environment = useContext(EnvironmentContext);
    return environment[key];
}
