import { fetchLogData } from '../services/api';

export default {
  namespace: 'log',
  state: {
    logData: [],
  },

  effects: {
      *fetchLogData(_, { call, put }) {
          const response = yield call(fetchLogData);
          console.log("*fetchLogData response: ");
          console.log(response);
          yield put({
              type: 'fetchLogDataSuccess',
              payload: response.data,
          })
      },
  },

  reducers: {
      fetchLogDataSuccess(state, { payload }) {
          console.log("Payload");
          console.log(payload);
          return {
              logData: payload,
          }
      }
  },

}
