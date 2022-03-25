import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useTema = () => useContext(AppContext);
