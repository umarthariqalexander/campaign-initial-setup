require('es6-promise').polyfill();
import Request from 'superagent';
// import browserHistory from './browserHistory';
let apisArr = [];
let	apiRequest = '';

// import { toggleLoader } from '../actions/loaderAction';

export function makeApiRequest( apiData, dispatch ) {
	if(typeof window !== 'undefined') {
		if(apiData.apiName) {
			if (apisArr.indexOf(apiData.apiName) >= 0) {
				apiRequest.abort();
			}
			else {
				apisArr.push(apiData.apiName);
			}
		}
		// useDispatch(dispatch, true);
		if(apiData.method === 'GET') {
			apiRequest = makeGetCall(apiData, dispatch);
		} else if(apiData.method === 'POST') {
			apiRequest = makePostCall(apiData, dispatch);
		} else if(apiData.method === 'FORM') {
            apiRequest = makeFormPostCall(apiData, dispatch);
        } else {
			apiRequest = makeDeleteCall(apiData, dispatch);
		}
	}
}


function makeGetCall(apiData, dispatch) {
	return Request
       .get(window.baseUrl + apiData.url)
       .query(apiData.params)
       .accept('application/json,application/xhtml+xml,image/webp,*/*;q=0.8')
       .withCredentials()
       .end((err, res) => {
            handleResponse(res, err, dispatch, apiData);
    });
}

function makePostCall(apiData, dispatch) {
	return Request
		.post(window.baseUrl + apiData.url)
		.send(apiData.requestBody)
		.query(apiData.params)
		.set('Accept', 'application/json')
		.accept('application/xhtml+xml,image/webp,*/*;q=0.8')
		.withCredentials()
		.end((err, res) => {
            handleResponse(res, err, dispatch, apiData);
    });
}

function makeFormPostCall(apiData, dispatch) {
    return Request
        .post(window.baseUrl + apiData.url)
        .field(apiData.requestName, apiData.file)
        .query(apiData.params)
        .set('Accept', 'application/json')
        .accept('application/xhtml+xml,image/webp,*/*;q=0.8')
        .withCredentials()
        .end((err, res) => {
            handleResponse(res, err, dispatch, apiData);
    });
}

function makeDeleteCall(apiData, dispatch) {
	return Request
		.del(window.baseUrl + apiData.url)
		.send(apiData.requestBody)
		.query(apiData.params)
		.set('Accept', 'application/json')
		.accept('application/xhtml+xml,image/webp,*/*;q=0.8')
		.withCredentials()
		.end((err, res) => {
            handleResponse(res, err, dispatch, apiData);
    });
}

function handleResponse(res, err, dispatch, apiData) {
    if(err) {
        if(err.status === 403 && dispatch) {
            err.errorMessage = 'Session Expired. Please login again';
            // dispatch(logoutUser());
        }
        apiData.failureCallback.call(this, err);
        // useDispatch(dispatch, false);
    }else {
        let index = apisArr.indexOf(apiData.apiName);
        if (index > -1) {
            apisArr.splice(index, 1);
        }
        if((res.type === 'application/json' && (res.body.status === 'SUCCESS' || res.body.success)) ||
            res.type !== 'application/json') {
            if(res.type === 'application/json') {
                apiData.successCallBack.call(this, res.body);
            } else {
                apiData.successCallBack.call(this, res.text);
            }
        } else {
            apiData.failureCallback.call(this, res.body);
        }
        // useDispatch(dispatch, false);
        if(dispatch) {
            // dispatch(setUIActiveTime(new Date().getTime()));
        }
    }
}

// function useDispatch(dispatch, toShow) {
// 	if(dispatch) {
// 		dispatch(toggleLoader(toShow));
// 	}
// }
