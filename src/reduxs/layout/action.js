export const TOGGLE_SIDEBAR = 'layout/toggleSidebar'
export const toggleSidebar = data => ({
  type: TOGGLE_SIDEBAR,
  data: { sidebarCollapse: !data.sidebarCollapse },
})
