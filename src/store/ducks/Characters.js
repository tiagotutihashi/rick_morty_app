export const Types = {
  // GET CHARACTER
  GET_CHARACTERS_REQUEST: 'GET_CHARACTERS_REQUEST',
  GET_CHARACTERS_SUCCESS: 'GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_FAILURE: 'GET_CHARACTERS_FAILURE',
  GET_CHARACTERS_CLEANER: 'GET_CHARACTERS_CLEANER',

  // ADD CHARACTERS
  ADD_CHARACTERS_REQUEST: 'ADD_CHARACTERS_REQUEST',
  ADD_CHARACTERS_SUCCESS: 'ADD_CHARACTERS_SUCCESS',
  ADD_CHARACTERS_FAILURE: 'ADD_CHARACTERS_FAILURE',

  // GET BY ID
  GET_BY_ID_CHARACTER_REQUEST: 'GET_BY_ID_CHARACTER_REQUEST',
  GET_BY_ID_CHARACTER_SUCCESS: 'GET_BY_ID_CHARACTER_SUCCESS',
  GET_BY_ID_CHARACTER_FAILURE: 'GET_BY_ID_CHARACTER_FAILURE',
  GET_BY_ID_CHARACTER_CLEANER: 'GET_BY_ID_CHARACTER_CLEANER',
};

const INITIAL_STATE = {
  // GET CHARACTER
  loading: false,
  error: false,
  data: null,

  // ADD CHARACTERS
  loadingAdd: false,
  errorAdd: false,

  // GET BY ID
  loadingId: false,
  errorId: false,
  dataId: null,
};

export default function Characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    // GET CHARACTER
    case Types.GET_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case Types.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case Types.GET_CHARACTERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case Types.GET_CHARACTERS_CLEANER:
      return {
        ...state,
        loading: INITIAL_STATE.loading,
        error: INITIAL_STATE.error,
        data: INITIAL_STATE.data,
      };

    // ADD CHARACTERS
    case Types.ADD_CHARACTERS_REQUEST:
      return {
        ...state,
        loadingAdd: true,
        errorAdd: false,
      };
    case Types.ADD_CHARACTERS_SUCCESS:
      return {
        ...state,
        loadingAdd: false,
        errorAdd: false,
        data: {
          ...action.payload,
          results: [...state.data.results, ...action.payload.results],
        },
      };
    case Types.ADD_CHARACTERS_FAILURE:
      return {
        ...state,
        loadingAdd: false,
        errorAdd: true,
      };

    // GET BY ID
    case Types.GET_BY_ID_CHARACTER_REQUEST:
      return {
        ...state,
        loadingId: true,
        errorId: false,
      };
    case Types.GET_BY_ID_CHARACTER_SUCCESS:
      return {
        ...state,
        loadingId: false,
        errorId: false,
        dataId: action.payload,
      };
    case Types.GET_BY_ID_CHARACTER_FAILURE:
      return {
        ...state,
        loadingId: false,
        errorId: true,
      };
    case Types.GET_BY_ID_CHARACTER_CLEANER:
      return {
        ...state,
        loadingId: INITIAL_STATE.loadingId,
        errorId: INITIAL_STATE.errorId,
        dataId: INITIAL_STATE.dataId,
      };

    default:
      return state;
  }
}

export const Creators = {
  // GET CHARACTER
  GetCharacterRequest: payload => ({
    type: Types.GET_CHARACTERS_REQUEST,
    payload,
  }),
  GetCharacterSuccess: payload => ({
    type: Types.GET_CHARACTERS_SUCCESS,
    payload,
  }),
  GetCharacterFailure: () => ({
    type: Types.GET_CHARACTERS_FAILURE,
  }),
  GetCharacterCleaner: () => ({
    type: Types.GET_CHARACTERS_CLEANER,
  }),

  // ADD CHARACTERS
  AddCharacterRequest: payload => ({
    type: Types.ADD_CHARACTERS_REQUEST,
    payload,
  }),
  AddCharacterSuccess: payload => ({
    type: Types.ADD_CHARACTERS_SUCCESS,
    payload,
  }),
  AddCharacterFailure: () => ({
    type: Types.ADD_CHARACTERS_FAILURE,
  }),

  // GET BY ID
  GetByIdCharacterRequest: payload => ({
    type: Types.GET_BY_ID_CHARACTER_REQUEST,
    payload,
  }),
  GetByIdCharacterSuccess: payload => ({
    type: Types.GET_BY_ID_CHARACTER_SUCCESS,
    payload,
  }),
  GetByIdCharacterFailure: () => ({
    type: Types.GET_BY_ID_CHARACTER_FAILURE,
  }),
  GetByIdCharacterCleaner: () => ({
    type: Types.GET_BY_ID_CHARACTER_CLEANER,
  }),
};
