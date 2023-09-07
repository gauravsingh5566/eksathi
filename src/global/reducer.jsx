const reducer = (state, action) => {

    switch(action.type) {
        case "SET_USER": return {...state, userData: action.payload.userData, loginStatus: action.payload.loginStatus};
        case "SET_QUESTIONS": return {...state, questions: action.payload.questions};
        case "SET_TOKEN": return { ...state, token: action.payload.token};
        case "SET_SOCKET": return { ...state, socket: action.payload.socket};
        case "SET_AUTH": return { ...state, showAuth: action.payload.showAuth};
        case "SET_SHOW_MESSAGE": return { ...state, showMessage: action.payload.showMessage};
        case "SET_MESSAGE_TO": return { ...state, messageTo: action.payload.messageTo};
        case "SET_ONLINE_USERS": return { ...state, onlineUsers: action.payload.onlineUsers};
        case "SET_USERS": return { ...state, users: action.payload.users};
        case "SET_CATEGORIES": return { ...state, categories: action.payload.categories};
        case "SET_USERSTEP": return { ...state, UserStep: action.payload.UserStep};
        case "SET_ONBOARDING": return { ...state, OnboardingData: action.payload.OnboardingData};
        case "SET_FINALDATA": return { ...state, finalData: action.payload.finalData};
        case "SET_JOBDETAILS": return { ...state, jobdetailss: action.payload.jobdetailss};
        default: return state;
    }
}

export default reducer;