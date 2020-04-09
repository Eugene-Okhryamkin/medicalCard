export const TOGGLE_MENU= "TOGGLE_MENU";

export const toggleMenu = isHidden => ({
    type: TOGGLE_MENU,
    payload: isHidden
});