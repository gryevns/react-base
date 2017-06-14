// import { createSelector } from 'reselect'

export const getName = (state) => state.name

export const isLoading = (state) => state.loading

export const getRetailers = (state) => state.retailers

export const getOutlets = (state) => state.outlets

// export const getVisibleTodos = createSelector(
//   [ getVisibilityFilter, getTodos ],
//   (visibilityFilter, todos) => {
//     switch (visibilityFilter) {
//       case 'SHOW_ALL':
//         return todos
//       case 'SHOW_COMPLETED':
//         return todos.filter(t => t.completed)
//       case 'SHOW_ACTIVE':
//         return todos.filter(t => !t.completed)
//     }
//   }
// )
