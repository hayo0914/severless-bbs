import { call, put, takeLatest } from 'redux-saga/effects';
import firebaseApis from '../apis/FirebaseApis';
import {
  FETCH_BOARDS_REQUEST,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAIL,
} from '../actions/types';

function* fetchBoards(action) {
  try {
    const [boards, lastVisibleBoard] = yield call(
      firebaseApis.fetchBoards,
      action.lastVisibleBoard,
    );
    yield put({
      type: FETCH_BOARDS_SUCCESS,
      payload: { boards, lastVisibleBoard },
    });
  } catch (e) {
    yield put({ type: FETCH_BOARDS_FAIL, message: e.message });
  }
}

function* mySaga() {
  yield takeLatest(FETCH_BOARDS_REQUEST, fetchBoards);
}

export default mySaga;
