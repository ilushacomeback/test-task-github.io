export { actions as authActions } from './auth/store/index';
export { actions as dataActions } from './data-table/store/index';
export { default as authReducer } from './auth/store/index';
export { default as dataReducer } from './data-table/store/index';
export { useLoginMutation, authApi } from './auth/api/index';
export { BoxLoginForm } from './auth/ui/box-login/index';
export { TableWithData } from './data-table/ui/table';
export {
  useGetDataQuery,
  useAddDataMutation,
  useRemoveDataMutation,
  useRenameDataMutation,
  dataApi,
} from './data-table/api/index';
