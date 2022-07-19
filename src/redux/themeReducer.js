import { lightTheme, darkTheme } from "../components/theme";
import { SWITCH_THEME } from "./themesActions";

const initialState = {
    theme: darkTheme
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEME:
            return {theme: action.theme}
        default: 
            return state
    } 
};

export default themeReducer;