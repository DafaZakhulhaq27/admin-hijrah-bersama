import { filter } from '../filter'
import { MainResponse, dummyAPIResponse, dummyMainResponse } from '../response'
import {
  GetCategories,
  GetDetailCategory,
  dummyCategoriesListResponse,
  dummyCategoryResponse,
} from './model'

export const getCategory = async (params: filter) =>
  //   fetcher<GetCategories>({ path: '/v1/category', params: params })
  dummyAPIResponse<GetCategories>(dummyCategoriesListResponse)

export const getDetailCategory = async (id: string) =>
  // fetcher<GetDetailCategory>({ path: `/v1/category/${id}` })
  dummyAPIResponse<GetDetailCategory>(dummyCategoryResponse)

type CategoryForm = {
  icon: string
  name: string
}

export const createCategory = async (form: CategoryForm) => {
  //   return fetcher<MainResponse>({
  //     path: '/v1/category',
  //     options: {
  //       method: 'POST',
  //       body: form,
  //     },
  //   })
  return dummyAPIResponse<MainResponse>(dummyMainResponse)
}

export const editCategory = async (id: string, form: CategoryForm) => {
  //   fetcher<MainResponse>({
  //     path: `/v1/category/${id}`,
  //     options: {
  //       method: 'PUT',
  //       body: form,
  //     },
  //   })
  return dummyAPIResponse<MainResponse>(dummyMainResponse)
}

export const deleteCategory = async (id: string) =>
  //   fetcher<MainResponse>({
  //     path: `/v1/category/${id}`,
  //     options: {
  //       method: 'DELETE',
  //     },
  //   })
  dummyAPIResponse<MainResponse>(dummyMainResponse)
