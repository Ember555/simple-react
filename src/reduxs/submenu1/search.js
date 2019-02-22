import axios from 'axios'
import { from } from 'rxjs/observable/from'
import { of } from 'rxjs/observable/of'
import { map, catchError, switchMap } from 'rxjs/operators'

import { restUrl } from '../../config/endpoint'
// import { limit as LIMIT } from '../../config/pagination'
import { getToken } from '../../common/token'
import { withQuery } from '../../common/url'
import { alertError } from '../../common/alert'

// actions
export const SEARCH = 'notifications/search'
export const search = data => ({
  type: SEARCH,
  data: { ...data, searching: true },
})

export const SEARCH_SUCCESS = 'notifications/searchSuccess'
export const searchSuccess = data => ({
  type: SEARCH_SUCCESS,
  data: { ...data, searching: false },
})

export const SEARCH_ERROR = 'notifications/searchError'
export const searchError = () => ({
  type: SEARCH_ERROR,
  data: { searching: false },
})

export const PAGINATE = 'notifications/paginate'
export const paginate = (page, limit = 20) => ({
  type: PAGINATE,
  data: {
    pagination: {
      page,
      limit,
    },
  },
})

export const searchEpic = (action$, { getState }) =>
  action$
    //
    .ofType(SEARCH)
    //
    .pipe(
      switchMap(() => {
        const {
          submenu1: { filter, pagination },
        } = getState()
        const _pagination = pagination || { page: 1, limit: 20 }
        const query = { ..._pagination, ...filter }

        const url = withQuery(restUrl('/submenu1/search'), query)

        return (
          from(
            axios({
              url,
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                'cache-control': 'no-cache',
                access_token: getToken() || 'token',
              },
            }),
          )
            //
            .pipe(
              //
              map(response => {
                const { data } = response
                return searchSuccess({
                  ...(data || {}),
                })
              }),

              //
              catchError(error => {
                const { message } = error
                alertError(message)
                return of(searchError({}))
              }),
            )
        )
      }),
    )
