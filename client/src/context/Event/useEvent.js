import { EventContext } from "./EventContext";
import { useContext } from "react";

export function useEvent() {
    return useContext(EventContext);
}